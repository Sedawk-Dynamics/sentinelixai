# QUICK FIX: Use Gmail to Test (Temporary)

Since Zoho authentication keeps failing despite all troubleshooting steps,
let's use Gmail temporarily to verify the contact form works.

## Setup Gmail SMTP (5 minutes)

### 1. Enable 2-Step Verification
- Go to: https://myaccount.google.com/security
- Enable "2-Step Verification" if not already enabled

### 2. Generate App Password
- Go to: https://myaccount.google.com/apppasswords
- Select app: "Mail"
- Select device: "Other (Custom name)"
- Enter name: "SentinelixAI Contact Form"
- Click "Generate"
- **Copy the 16-character password**

### 3. Update .env file
Replace with:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail-address@gmail.com
SMTP_PASS=the_16_character_app_password
```

### 4. Restart server
```bash
cd api
npm run dev
```

You should see: ✅ SMTP server is ready to send emails

## After Gmail Works

Once confirmed working, we can:
1. Contact Zoho support about the authentication issue
2. Or keep using Gmail (it's actually more reliable)
3. Or switch to a dedicated email service (SendGrid, Mailgun, etc.)

The Zoho issue is likely:
- Account-level restriction
- Regional SMTP server mismatch  
- Two-factor authentication conflict
- Zoho Workplace vs Free Mail difference
