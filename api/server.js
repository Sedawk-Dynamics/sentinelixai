import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

// Load environment variables
dotenv.config();

// Debug: Log environment variables (temporarily)
console.log('=== ENV VARS DEBUG ===');
console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SMTP_PASS exists:', !!process.env.SMTP_PASS);
console.log('SMTP_PASS length:', process.env.SMTP_PASS ? process.env.SMTP_PASS.length : 0);
console.log('SMTP_PASS first 4 chars:', process.env.SMTP_PASS ? process.env.SMTP_PASS.substring(0, 4) + '...' : 'undefined');
console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('======================\n');

const app = express();
const PORT = process.env.PORT || 3001;

// Rate limiting to prevent spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: { error: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS 
    ? process.env.ALLOWED_ORIGINS.split(',') 
    : ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
app.use(cors(corsOptions));

// Configure Zoho SMTP transporter
const transporterConfig = {
  host: process.env.SMTP_HOST || 'smtp.zoho.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  authMethod: 'LOGIN',
  tls: {
    rejectUnauthorized: false, // Try with false first for testing
    ciphers: 'SSLv3',
  },
  debug: true, // Enable debug output
  logger: true, // Log to console
};

console.log('SMTP Config:', {
  host: transporterConfig.host,
  port: transporterConfig.port,
  user: transporterConfig.auth.user,
  passLength: transporterConfig.auth.pass ? transporterConfig.auth.pass.length : 0,
});

const transporter = nodemailer.createTransport(transporterConfig);

// Verify SMTP connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP connection error:', error);
    console.error('Please check your Zoho email credentials in .env file');
  } else {
    console.log('✅ SMTP server is ready to send emails');
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'SentinelixAI Contact API is running',
    timestamp: new Date().toISOString()
  });
});

// Contact form endpoint
app.post('/api/contact', limiter, async (req, res) => {
  try {
    const { name, email, company, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false,
        error: 'Missing required fields: name, email, and message are required.' 
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid email format.' 
      });
    }

    // Get recipients from environment or use defaults
    const recipients = process.env.EMAIL_RECIPIENTS 
      ? process.env.EMAIL_RECIPIENTS.split(',').map(r => r.trim())
      : ['contact@sentinelixai.com'];

    const currentDateTime = new Date().toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long'
    });

    // Prepare email content for internal team
    const internalEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #003d5c; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f9f9f9; padding: 30px; border-radius: 5px; margin-top: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #003d5c; }
          .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #39a2ae; }
          .message-box { background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔔 New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${company ? `
            <div class="field">
              <div class="label">🏢 Company:</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            ${phone ? `
            <div class="field">
              <div class="label">📞 Phone:</div>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">💬 Message:</div>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="footer">
              <p>📅 Submitted on: ${currentDateTime}</p>
              <p>This email was sent from the SentinelixAI website contact form.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to internal team
    const emailPromises = recipients.map(async (recipient) => {
      try {
        const info = await transporter.sendMail({
          from: `"SentinelixAI Contact Form" <${process.env.SMTP_USER}>`,
          to: recipient,
          replyTo: email,
          subject: `🔔 New Contact: ${name} ${company ? `from ${company}` : ''}`,
          html: internalEmailHTML,
          text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nPhone: ${phone || 'N/A'}\nMessage: ${message}\n\nSubmitted: ${currentDateTime}`,
        });

        console.log(`✅ Email sent to ${recipient}: ${info.messageId}`);
        return { recipient, success: true, messageId: info.messageId };
      } catch (error) {
        console.error(`❌ Failed to send email to ${recipient}:`, error.message);
        return { recipient, success: false, error: error.message };
      }
    });

    const emailResults = await Promise.all(emailPromises);
    const successfulEmails = emailResults.filter(r => r.success);
    const failedEmails = emailResults.filter(r => !r.success);

    // Send confirmation email to the user (optional)
    if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
      try {
        const confirmationHTML = `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #003d5c; color: white; padding: 20px; text-align: center; }
              .content { padding: 30px; }
              .message-copy { background-color: #f9f9f9; padding: 20px; border-left: 4px solid #39a2ae; margin: 20px 0; }
              .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Contacting SentinelixAI</h1>
              </div>
              <div class="content">
                <p>Dear ${name},</p>
                <p>Thank you for reaching out to us. We have received your message and our team will get back to you within 24 hours.</p>
                <p><strong>Here's a copy of your message:</strong></p>
                <div class="message-copy">
                  ${message.replace(/\n/g, '<br>')}
                </div>
                <p>If you have any urgent queries, feel free to reach us directly at:</p>
                <ul>
                  <li>📧 Email: <a href="mailto:contact@sentinelixai.com">contact@sentinelixai.com</a></li>
                  <li>📞 Phone: <a href="tel:+918826196393">+91-8826196393</a></li>
                </ul>
                <p>Best regards,<br><strong>The SentinelixAI Team</strong></p>
                <div class="footer">
                  <p>This is an automated confirmation email. Please do not reply to this email.</p>
                  <p>&copy; ${new Date().getFullYear()} SentinelixAI. All rights reserved.</p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `;

        await transporter.sendMail({
          from: `"SentinelixAI" <${process.env.SMTP_USER}>`,
          to: email,
          subject: 'Thank you for contacting SentinelixAI',
          html: confirmationHTML,
          text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and our team will get back to you within 24 hours.\n\nYour message:\n${message}\n\nBest regards,\nThe SentinelixAI Team`,
        });

        console.log(`✅ Confirmation email sent to user: ${email}`);
      } catch (error) {
        console.error('❌ Failed to send confirmation email:', error.message);
      }
    }

    // Return response
    if (successfulEmails.length > 0) {
      return res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully!',
        details: {
          emailsSent: successfulEmails.length,
          emailsFailed: failedEmails.length,
        }
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Failed to send email. Please try again later or contact us directly.',
      });
    }

  } catch (error) {
    console.error('❌ Server error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.',
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Endpoint not found',
    availableEndpoints: [
      'GET /health',
      'POST /api/contact'
    ]
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('❌ Unhandled error:', err);
  res.status(500).json({ 
    success: false,
    error: 'Internal server error' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 SentinelixAI Contact API Server running on port ${PORT}`);
  console.log(`📧 SMTP User: ${process.env.SMTP_USER || 'NOT CONFIGURED'}`);
  console.log(`📬 Email Recipients: ${process.env.EMAIL_RECIPIENTS || 'contact@sentinelixai.com'}`);
  console.log(`🔒 CORS allowed origins: ${process.env.ALLOWED_ORIGINS || 'localhost:5173,localhost:3000'}`);
  console.log(`\n📍 Endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/health`);
  console.log(`   POST http://localhost:${PORT}/api/contact\n`);
});

export default app;
