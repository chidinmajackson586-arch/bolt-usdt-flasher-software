# Backend Deployment Guide

## Overview
The Bolt Flasher authentication system uses a Node.js/Express backend with JWT tokens and bcryptjs password hashing. This guide explains how to deploy the backend to production.

## Current Setup
- **Frontend**: Hosted on Vercel (https://bolt-usdt-flasher-hv37x4268-nova-alexs-projects.vercel.app)
- **Backend**: Currently runs locally on `http://localhost:5000`
- **Database**: JSON file-based (users.json) - suitable for development/testing

## Deployment Options

### Option 1: Render (Recommended - Free Tier Available)

1. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub
   - Create a new Web Service

2. **Deploy Backend**
   ```
   - Repository: chidinmajackson586-arch/bolt-usdt-flasher-software
   - Root Directory: bolt-flasher-static/backend
   - Runtime: Node
   - Build Command: npm install
   - Start Command: npm start
   - Environment Variables:
     PORT=10000
     JWT_SECRET=your-strong-secret-key-here
     NODE_ENV=production
   ```

3. **After Deployment**
   - Get your Render URL (e.g., https://bolt-flasher-api.render.com)
   - Update frontend config.js: `API_CONFIG.setProduction('https://bolt-flasher-api.render.com')`

### Option 2: Railway

1. Create Railway account at https://railway.app
2. Connect GitHub repository
3. Deploy backend service
4. Set environment variables
5. Configure custom domain

### Option 3: Heroku (Paid)

1. Install Heroku CLI
2. Create app: `heroku create bolt-flasher-api`
3. Deploy: `git push heroku main`
4. Set vars: `heroku config:set JWT_SECRET=your-secret`

## Environment Variables Required

```env
PORT=10000 (or let provider assign)
JWT_SECRET=your-very-strong-secret-key-min-32-chars
NODE_ENV=production
```

## Frontend Update for Production

After deploying backend, update the frontend to use production URL:

1. Open browser console on deployed site
2. Run: `API_CONFIG.setProduction('https://your-backend-url.com')`
3. Or manually edit `config.js` and redeploy to Vercel

## Database Upgrade (Recommended for Production)

The current JSON file database works but should be upgraded to a real database:

### MongoDB Atlas (Free Tier)
```javascript
// Example connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
```

### PostgreSQL
```javascript
// Example connection
const pg = require('pg');
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
```

## Security Checklist

- [ ] JWT_SECRET is strong (minimum 32 characters)
- [ ] CORS is restricted to frontend domain only
- [ ] Password hashing uses bcryptjs (10 rounds minimum)
- [ ] Environment variables are set in production
- [ ] HTTPS is enforced
- [ ] Rate limiting is implemented (optional)
- [ ] Input validation is in place

## Testing Production Deployment

1. **Test Signup**
   ```bash
   curl -X POST https://your-backend-url/api/auth/signup \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","password":"Test1234","confirmPassword":"Test1234"}'
   ```

2. **Test Login**
   ```bash
   curl -X POST https://your-backend-url/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","password":"Test1234"}'
   ```

3. **Test Health Check**
   ```bash
   curl https://your-backend-url/api/health
   ```

## Monitoring

- Check Render/Railway logs for errors
- Monitor JWT token usage patterns
- Track user signup/login metrics
- Set up alerts for server downtime

## Troubleshooting

**Backend responds with 502 Bad Gateway**
- Check that npm start command is correct
- Verify all dependencies are installed
- Check environment variables are set

**CORS errors on frontend**
- Verify frontend domain is in CORS whitelist
- Check that backend is serving correct headers

**Users not persisting**
- For JSON database: ensure write permissions on server
- Consider migrating to real database

## Next Steps

1. Choose a hosting provider (Render recommended)
2. Deploy backend service
3. Update frontend config with production URL
4. Test signup/login flow
5. Monitor logs for issues
6. Plan database migration for scaling
