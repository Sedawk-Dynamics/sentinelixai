# ⚠️ TROUBLESHOOTING GUIDE - Zoho Authentication Failed

## Current Issue: 535 Authentication Failed

The server is connecting to Zoho successfully, but authentication is failing.
This means either:
1. The app-specific password is incorrect
2. IMAP/SMTP access is not enabled in Zoho
3. The email account needs additional configuration

## ✅ Step-by-Step Fix

### Option 1: Fix Zoho Authentication (RECOMMENDED)

#### A. Enable IMAP in Zoho Mail
1. Go to: https://mail.zoho.com
2. Click Settings (⚙️) → Mail Accounts
3. Click on your account: contact@sentinelixai.com
4. Find "IMAP Access" section
5. **Toggle it to ENABLED** ✓
6. Save changes

#### B. Generate Fresh App Password
1. Go to: https://accounts.zoho.com/home#security
2. Scroll to "Application-Specific Passwords"
3. **Delete ALL existing passwords**
4. Click "Generate New Password"
5. Application Name: `Email API`
6. **Copy the ENTIRE password** (usually 16 characters)
7. Update in `/api/.env`:
   ```
   SMTP_PASS=your_new_password_here
   ```

#### C. Verify Email Account Type
- Is this a FREE Zoho Mail account or PAID Zoho Workplace?
- If Workplace: SMTP host might need to be: `smtp.zoho.{region}` 
  - US: smtp.zoho.com
  - EU: smtp.zoho.eu
  - India: smtp.zoho.in
  - China: smtp.zoho.com.cn

### Option 2: Test with Gmail (Temporary Testing)

If Zoho keeps failing, test with Gmail to verify the code works:

1. Enable 2FA on your Gmail account
2. Generate App Password:
   - https://myaccount.google.com/apppasswords
3. Update `.env`:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your_gmail_app_password
   ```

### Option 3: Use Regular Password (NOT RECOMMENDED FOR PRODUCTION)

**Only for testing:**
1. Temporarily disable 2FA on Zoho (if enabled)
2. Use your regular Zoho password in `.env`
3. This confirms if app passwords are the issue

## 🔍 Debug Checklist

- [ ] IMAP Access enabled in Zoho Mail settings
- [ ] App-specific password generated (not regular password)
- [ ] Password copied without extra spaces
- [ ] Email address is correct: contact@sentinelixai.com
- [ ] Using correct Zoho region SMTP server
- [ ] Firewall not blocking port 587
- [ ] No typos in .env file

## 📞 Still Not Working?

**Contact Zoho Support** with this info:
- "I'm trying to use SMTP with app-specific password"
- "Getting 535 Authentication Failed error"
- "Port 587 with STARTTLS"
- "Using contact@sentinelixai.com"

**Or try alternative email service:**
- SendGrid (free tier: 100 emails/day)
- Mailgun (free tier: 5,000 emails/month)
- AWS SES (very cheap)

Let me know which option you'd like to try!
