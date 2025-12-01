# 🚀 SentinelixAI Email Functionality Setup Guide

## 📋 What Was Implemented

A complete email system for your contact form using:
- ✅ Node.js/Express backend API
- ✅ Zoho SMTP for email delivery
- ✅ No database required
- ✅ Rate limiting & security features
- ✅ Auto-confirmation emails to users

---

## 🛠️ Setup Instructions

### **Step 1: Install Backend Dependencies**

Open a terminal in your project folder and run:

```bash
cd api
npm install
```

This will install:
- Express (web server)
- Nodemailer (email sending)
- CORS (security)
- Rate limiting (spam protection)

---

### **Step 2: Configure Zoho SMTP Credentials**

#### A. Create App-Specific Password in Zoho

1. Go to [Zoho Mail](https://mail.zoho.com)
2. Click on your profile → **Settings**
3. Navigate to **Security** → **App Passwords**
4. Click **Generate New Password**
5. Name it: `SentinelixAI Contact Form`
6. **Copy the generated password** (you'll need this in Step B)

#### B. Create `.env` File

In the `/api` folder, create a new file named `.env` (copy from `.env.example`):

```bash
cd api
cp .env.example .env
```

Edit the `.env` file with your actual credentials:

```env
# Server Configuration
PORT=3001

# Zoho SMTP Configuration
SMTP_HOST=smtp.zoho.com
SMTP_PORT=465

# YOUR ZOHO CREDENTIALS (REQUIRED)
SMTP_USER=contact@sentinelixai.com
SMTP_PASS=paste_your_app_password_here

# Email Recipients (people who will receive form submissions)
EMAIL_RECIPIENTS=contact@sentinelixai.com,gaurav.verma@sentinelixai.com,saptarshi.pal@sentinelixai.com

# Send confirmation email to users?
SEND_CONFIRMATION_EMAIL=true

# CORS - Add your website domain here
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

**Important:** Replace `SMTP_PASS` with the app-specific password you generated in Step A.

---

### **Step 3: Configure Frontend**

Create a `.env` file in your **main project folder** (not in `/api`):

```env
# Backend API URL
# For development:
VITE_CONTACT_API_URL=http://localhost:3001

# For production (update after deploying backend):
# VITE_CONTACT_API_URL=https://api.sentinelixai.com
```

---

### **Step 4: Test Locally**

#### A. Start the Backend Server

In one terminal:

```bash
cd api
npm run dev
```

You should see:
```
✅ SMTP server is ready to send emails
🚀 SentinelixAI Contact API Server running on port 3001
```

#### B. Start the Frontend

In another terminal (from main project folder):

```bash
npm run dev
```

#### C. Test the Form

1. Open your website: `http://localhost:5173`
2. Scroll to the contact form
3. Fill it out with a test message
4. Submit
5. Check if:
   - ✅ Success message appears on website
   - ✅ Email arrives in your Zoho inbox
   - ✅ User receives confirmation email (if enabled)

---

## 🌐 Deployment to Production

### **Option 1: Deploy to Your VPS/Dedicated Server**

If you have SSH access to your server:

#### 1. Upload Backend Files

```bash
# From your local machine
scp -r api/ user@your-server.com:/var/www/sentinelixai-api/
```

#### 2. SSH into Server

```bash
ssh user@your-server.com
cd /var/www/sentinelixai-api
```

#### 3. Install Dependencies

```bash
npm install --production
```

#### 4. Create `.env` File on Server

```bash
nano .env
```

Paste your configuration (same as Step 2B above, but update `ALLOWED_ORIGINS` with your production domain):

```env
ALLOWED_ORIGINS=https://sentinelixai.com,https://www.sentinelixai.com
```

#### 5. Install PM2 (Process Manager)

```bash
npm install -g pm2
```

#### 6. Start the API with PM2

```bash
pm2 start server.js --name sentinelixai-api
pm2 save
pm2 startup
```

#### 7. Configure Nginx Reverse Proxy (Recommended)

Create nginx config:

```bash
sudo nano /etc/nginx/sites-available/sentinelixai-api
```

Add:

```nginx
server {
    listen 80;
    server_name api.sentinelixai.com;  # or your domain

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

Enable and restart:

```bash
sudo ln -s /etc/nginx/sites-available/sentinelixai-api /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 8. Set Up SSL with Certbot

```bash
sudo certbot --nginx -d api.sentinelixai.com
```

#### 9. Update Frontend `.env` for Production

Build your frontend with production API URL:

```env
VITE_CONTACT_API_URL=https://api.sentinelixai.com
```

Then rebuild:

```bash
npm run build
```

---

### **Option 2: Deploy to Cloud Platforms**

#### **Railway.app** (Easiest)

1. Go to [Railway.app](https://railway.app)
2. Create new project → Deploy from GitHub
3. Select the `/api` folder
4. Add environment variables in Railway dashboard
5. Deploy
6. Copy the provided URL (e.g., `https://your-app.railway.app`)

#### **Heroku**

```bash
cd api
heroku create sentinelixai-api
heroku config:set SMTP_USER=contact@sentinelixai.com
heroku config:set SMTP_PASS=your_password
heroku config:set EMAIL_RECIPIENTS=contact@sentinelixai.com
heroku config:set ALLOWED_ORIGINS=https://sentinelixai.com
git push heroku main
```

#### **DigitalOcean App Platform**

1. Create new app
2. Connect GitHub repository
3. Select `/api` folder
4. Add environment variables
5. Deploy

---

## 🧪 Testing Checklist

- [ ] Backend server starts without errors
- [ ] SMTP connection successful (check logs)
- [ ] Health check endpoint works: `http://localhost:3001/health`
- [ ] Form submission works locally
- [ ] Email received in Zoho inbox
- [ ] Confirmation email sent to user
- [ ] Multiple recipients receive emails
- [ ] Rate limiting works (try submitting 6 times quickly)
- [ ] CORS works from your frontend domain
- [ ] Production deployment successful
- [ ] SSL certificate active

---

## 🔧 Troubleshooting

### **Email Not Sending?**

Check the backend logs:
```bash
pm2 logs sentinelixai-api
```

Common issues:
- ❌ Wrong SMTP password → Regenerate app-specific password
- ❌ Firewall blocking port 465/587 → Check server firewall rules
- ❌ Invalid email format → Check email validation

### **CORS Errors?**

Add your frontend domain to `ALLOWED_ORIGINS` in `.env`:
```env
ALLOWED_ORIGINS=https://sentinelixai.com,https://www.sentinelixai.com
```

### **Rate Limit Issues?**

Adjust in `server.js`:
```javascript
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10, // Increase from 5 to 10
});
```

---

## 📝 File Structure

```
project/
├── api/                          # Backend API (NEW)
│   ├── server.js                 # Main server file
│   ├── package.json              # Backend dependencies
│   ├── .env                      # Environment variables (YOU CREATE THIS)
│   ├── .env.example              # Example config
│   ├── .gitignore                # Git ignore rules
│   └── README.md                 # API documentation
│
├── src/
│   └── components/sections/
│       └── Contact.tsx           # Updated contact form (MODIFIED)
│
├── .env                          # Frontend env (YOU CREATE THIS)
└── .env.example                  # Frontend env example (UPDATED)
```

---

## 🔒 Security Best Practices

✅ **Never commit `.env` files** to Git  
✅ Use app-specific passwords, not main Zoho password  
✅ Enable HTTPS in production  
✅ Keep rate limiting enabled  
✅ Restrict CORS to your domains only  
✅ Regularly update npm packages  

---

## 📞 Need Help?

If you encounter any issues:
1. Check the backend logs: `pm2 logs sentinelixai-api`
2. Test the health endpoint: `curl http://localhost:3001/health`
3. Verify Zoho credentials are correct
4. Ensure firewall allows outbound SMTP (port 465)

---

## ✅ Summary

You now have:
- ✅ Professional email system with Zoho SMTP
- ✅ No database dependency
- ✅ Secure, rate-limited API
- ✅ User confirmation emails
- ✅ Multiple recipient support
- ✅ Production-ready deployment

**Next Steps:**
1. Test locally (Steps 1-4)
2. Deploy to your server
3. Update production domain in `.env`
4. Test in production

Good luck! 🚀
