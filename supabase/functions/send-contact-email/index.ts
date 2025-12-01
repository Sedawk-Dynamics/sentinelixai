import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Parse request body
    const formData: ContactFormData = await req.json()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Store contact submission in database
    const { data: submission, error: dbError } = await supabaseClient
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          phone: formData.phone || null,
          message: formData.message,
        }
      ])
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      return new Response(
        JSON.stringify({ error: 'Failed to save submission' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Prepare email content
    const emailSubject = `New Contact Form Submission from ${formData.name}`
    const emailBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
      ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      <p><small>Submission ID: ${submission.id}</small></p>
    `

    // Send emails to multiple recipients
    const recipients = [
      'contact@sentinelixai.com',
      'gaurav.verma@sentinelixai.com',
      'saptarshi.pal@sentinelixai.com'
    ]

    const emailPromises = recipients.map(async (recipient) => {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'SentinelixAI Website <noreply@sentinelixai.com>',
            to: [recipient],
            subject: emailSubject,
            html: emailBody,
            reply_to: formData.email,
          }),
        })

        if (!emailResponse.ok) {
          const errorText = await emailResponse.text()
          console.error(`Failed to send email to ${recipient}:`, errorText)
          return { recipient, success: false, error: errorText }
        }

        const emailResult = await emailResponse.json()
        console.log(`Email sent successfully to ${recipient}:`, emailResult.id)
        return { recipient, success: true, id: emailResult.id }
      } catch (error) {
        console.error(`Error sending email to ${recipient}:`, error)
        return { recipient, success: false, error: error.message }
      }
    })

    const emailResults = await Promise.all(emailPromises)
    const successfulEmails = emailResults.filter(result => result.success)
    const failedEmails = emailResults.filter(result => !result.success)

    // Send confirmation email to the user
    try {
      const confirmationResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'SentinelixAI <noreply@sentinelixai.com>',
          to: [formData.email],
          subject: 'Thank you for contacting SentinelixAI',
          html: `
            <h2>Thank you for your inquiry!</h2>
            <p>Dear ${formData.name},</p>
            <p>We have received your message and will get back to you within 24 hours.</p>
            <p>Here's a copy of your submission:</p>
            <blockquote style="border-left: 4px solid #39a2ae; padding-left: 16px; margin: 16px 0;">
              ${formData.message.replace(/\n/g, '<br>')}
            </blockquote>
            <p>Best regards,<br>The SentinelixAI Team</p>
            <hr>
            <p><small>This is an automated confirmation email. Please do not reply to this email.</small></p>
          `,
        }),
      })

      if (confirmationResponse.ok) {
        console.log('Confirmation email sent to user')
      }
    } catch (error) {
      console.error('Failed to send confirmation email:', error)
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Contact form submitted successfully',
        submissionId: submission.id,
        emailResults: {
          successful: successfulEmails.length,
          failed: failedEmails.length,
          details: emailResults
        }
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})