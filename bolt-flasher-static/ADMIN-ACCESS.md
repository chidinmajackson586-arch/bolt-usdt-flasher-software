# Admin Access - Bolt Flasher Platform

## 🔐 Admin Credentials

**Email:** `admin@boltflasher.com`  
**Password:** `AdminBolt2025!Secure`

---

## 📍 Admin Access Points

### 1. **Admin Login Page**
- **URL**: `/pages/admin-login.html`
- **Full URL**: `https://bolt-usdt-flasher-hv37x4268-nova-alexs-projects.vercel.app/pages/admin-login.html`
- **Function**: Admin authentication portal

### 2. **Admin Dashboard**
- **URL**: `/admin-dashboard.html`
- **Full URL**: `https://bolt-usdt-flasher-hv37x4268-nova-alexs-projects.vercel.app/admin-dashboard.html`
- **Function**: Platform management & user analytics

---

## 📊 Admin Dashboard Features

### Dashboard Statistics
- **Total Users**: Real-time count of registered users
- **System Status**: Backend server health indicator
- **Last Updated**: Timestamp of last data refresh

### User Management
- **User Table**: View all registered users
- **User ID**: Unique identifier for each user
- **Email**: User email addresses
- **Created Date**: Account registration date
- **Status**: User account status (Active)

### Auto-Refresh
- Dashboard automatically refreshes every 30 seconds
- Real-time platform monitoring

---

## 🔌 Admin API Endpoints

### Admin Login
```
POST /api/auth/admin-login
```
**Payload:**
```json
{
  "email": "admin@boltflasher.com",
  "password": "AdminBolt2025!Secure"
}
```

**Response:**
```json
{
  "message": "Admin login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "admin",
    "email": "admin@boltflasher.com",
    "role": "admin"
  }
}
```

### Admin Dashboard
```
GET /api/admin/dashboard
Headers: Authorization: Bearer {token}
```

**Response:**
```json
{
  "totalUsers": 5,
  "users": [
    {
      "id": "123456789",
      "email": "user@example.com",
      "createdAt": "2025-11-20T23:12:05.864Z"
    }
  ],
  "systemStatus": "Running",
  "timestamp": "2025-11-20T23:15:30.000Z"
}
```

---

## 🚀 How to Access Admin Features

### Step 1: Navigate to Admin Login
1. Go to: `https://bolt-usdt-flasher-hv37x4268-nova-alexs-projects.vercel.app/pages/admin-login.html`
2. Or from homepage, navigate to admin login

### Step 2: Enter Admin Credentials
```
Email: admin@boltflasher.com
Password: AdminBolt2025!Secure
```

### Step 3: Access Dashboard
After successful login, you'll be redirected to:
`https://bolt-usdt-flasher-hv37x4268-nova-alexs-projects.vercel.app/admin-dashboard.html`

### Step 4: Manage Platform
- View all registered users
- Monitor system status
- Track user statistics
- Auto-refresh every 30 seconds

---

## 🔒 Security Features

### Backend Protection
- ✅ JWT token validation
- ✅ Role-based access control (admin role required)
- ✅ 24-hour token expiry
- ✅ Password never transmitted in plain text

### Frontend Protection
- ✅ Token stored securely in localStorage
- ✅ Automatic logout on token expiry
- ✅ Redirect to login if token missing
- ✅ Session validation on page load

---

## 🛠️ Admin Operations

### Test Admin Login (via Terminal)
```powershell
$body = '{"email":"admin@boltflasher.com","password":"AdminBolt2025!Secure"}'
$response = Invoke-WebRequest -Uri "http://localhost:5000/api/auth/admin-login" `
  -Method POST `
  -ContentType "application/json" `
  -Body $body `
  -UseBasicParsing
$json = $response.Content | ConvertFrom-Json
Write-Host "Token: $($json.token)"
```

### Test Admin Dashboard (via Terminal)
```powershell
# Get admin token first
$token = (Get-Token-From-Above)

# Call dashboard endpoint
$dashboard = Invoke-WebRequest -Uri "http://localhost:5000/api/admin/dashboard" `
  -Headers @{"Authorization"="Bearer $token"} `
  -UseBasicParsing
$data = $dashboard.Content | ConvertFrom-Json
Write-Host "Total Users: $($data.totalUsers)"
```

---

## 📝 Credentials Management

### Change Admin Password (Future Enhancement)
Currently, admin credentials are hardcoded in `backend/server.js`. To change:

1. Edit `backend/server.js`
2. Find `ADMIN_CREDENTIALS` object
3. Update email and password
4. Restart backend
5. Redeploy to production

**Recommended for production:**
- Move credentials to environment variables
- Use secure password hashing
- Implement multi-factor authentication (MFA)
- Add admin password reset flow

---

## 📱 Admin Features

### Current Features
✅ Admin authentication with JWT tokens  
✅ Platform statistics dashboard  
✅ User management view  
✅ System health monitoring  
✅ Real-time data refresh  

### Future Enhancements
- [ ] Edit/delete user accounts
- [ ] Suspend user accounts
- [ ] View user activity logs
- [ ] Generate reports
- [ ] Admin settings panel
- [ ] Audit logs
- [ ] Multi-admin support
- [ ] Two-factor authentication

---

## 🆘 Troubleshooting

### "Invalid admin credentials"
- Verify email: `admin@boltflasher.com`
- Verify password: `AdminBolt2025!Secure`
- Check backend is running

### "No token provided"
- Admin token expired (24 hours)
- Login again to refresh token
- Clear localStorage if corrupted

### Dashboard not loading
- Ensure backend is running on port 5000
- Check browser console for errors
- Verify JWT token is valid
- Try clearing browser cache

### "Admin access required"
- Only admin role can access dashboard
- Use admin credentials, not user credentials
- Token role must be 'admin'

---

## 📞 Support

For issues or feature requests:
1. Check backend logs: `npm start`
2. Verify API endpoints: `curl http://localhost:5000/api/health`
3. Test credentials: Use provided curl examples
4. Check GitHub repository for updates

---

**Last Updated:** November 20, 2025  
**Status:** ✅ Fully Functional  
**Backend:** Running on localhost:5000  
**Frontend:** Deployed to Vercel
