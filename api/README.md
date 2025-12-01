# SentinelixAI Contact Form API

Backend API for handling contact form submissions from the SentinelixAI website using Zoho SMTP.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd api
npm install
```

### 2. Configure Environment Variables
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your actual credentials
```

### 3. Set Up Zoho App-Specific Password

**Important:** For security, use an app-specific password instead of your main Zoho password.

1. Log in to [Zoho Mail](https://mail.zoho.com)
2. Go to Settings → Security → App Passwords
3. Click "Generate New Password"
4. Name it "SentinelixAI Contact Form"
5. Copy the generated password
6. Paste it in your `.env` file as `SMTP_PASS`

### 4. Update `.env` File

```env
# Server Configuration
PORT=3001

# Zoho SMTP Configuration
SMTP_HOST=smtp.zoho.com
SMTP_PORT=465

# Zoho Credentials
SMTP_USER=contact@sentinelixai.com
SMTP_PASS=your_generated_app_password_here

# Recipients
EMAIL_RECIPIENTS=contact@sentinelixai.com,gaurav.verma@sentinelixai.com,saptarshi.pal@sentinelixai.com

# User Confirmation
SEND_CONFIRMATION_EMAIL=true

# CORS (add your production domain)
ALLOWED_ORIGINS=http://localhost:5173,https://sentinelixai.com
```

### 5. Run the Server

**Development Mode (with auto-restart):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

The server will start on `http://localhost:3001`

## 📡 API Endpoints

### Health Check
```bash
GET /health
```

Response:
```json
{
  "status": "ok",
  "message": "SentinelixAI Contact API is running",
  "timestamp": "2025-11-28T10:30:00.000Z"
}
```

### Contact Form Submission
```bash
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@company.com",
  "company": "Acme Corp",
  "phone": "+1234567890",
  "message": "I'm interested in your services."
}
```

Response (Success):
```json
{
  "success": true,
  "message": "Your message has been sent successfully!",
  "details": {
    "emailsSent": 3,
    "emailsFailed": 0
  }
}
```

## 🔒 Security Features

- ✅ Rate limiting (5 requests per 15 minutes per IP)
- ✅ CORS protection (only allowed origins)
- ✅ Input validation
- ✅ Environment-based configuration
- ✅ Secure SMTP with SSL/TLS

## 🌐 Deployment

### Option 1: Deploy to Your VPS/Server

1. **Copy files to server:**
```bash
scp -r api/ user@your-server.com:/var/www/sentinelixai-api/
```

2. **SSH into server:**
```bash
ssh user@your-server.com
cd /var/www/sentinelixai-api
```

3. **Install dependencies:**
```bash
npm install --production
```

4. **Set up environment variables:**
```bash
nano .env
# Paste your configuration
```

5. **Install PM2 (process manager):**
```bash
npm install -g pm2
```

6. **Start the server with PM2:**
```bash
pm2 start server.js --name sentinelixai-contact-api
pm2 save
pm2 startup
```

7. **Configure Nginx reverse proxy** (optional but recommended):
```nginx
server {
    listen 80;
    server_name api.sentinelixai.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Option 2: Deploy to Cloud Platforms

**Heroku:**
```bash
heroku create sentinelixai-contact-api
heroku config:set SMTP_USER=contact@sentinelixai.com
heroku config:set SMTP_PASS=your_password
# ... set other env vars
git push heroku main
```

**DigitalOcean App Platform / Railway / Render:**
- Connect your repository
- Set environment variables in dashboard
- Deploy automatically

## 🧪 Testing

### Test locally:
```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

### Test with frontend:
Update your frontend `.env`:
```env
VITE_CONTACT_API_URL=http://localhost:3001
```

## 📝 Logs

View logs with PM2:
```bash
pm2 logs sentinelixai-contact-api
```

## 🛠️ Troubleshooting

**Email not sending?**
- Check SMTP credentials in `.env`
- Verify Zoho app-specific password
- Check firewall allows outbound SMTP (port 465/587)
- Review server logs

**CORS errors?**
- Add your frontend domain to `ALLOWED_ORIGINS` in `.env`

**Rate limit issues?**
- Adjust `windowMs` and `max` in `server.js`

## 📧 Support

For issues, contact: contact@sentinelixai.com
