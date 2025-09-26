# Custom Domain Setup Guide

## ✅ Current Status:
- ✅ Your app is successfully deployed to: https://bestaround-in.web.app
- ✅ Security headers are working
- ❌ Custom domain `www.bestaround.in` needs to be configured

## 🔧 Steps to Configure Custom Domain:

### Step 1: Go to Firebase Console
1. Visit: https://console.firebase.google.com/project/best-around-website/hosting
2. Click on the **"Custom domains"** tab
3. Click **"Add custom domain"**

### Step 2: Add Your Domain
1. Enter: `www.bestaround.in`
2. Click **"Continue"**
3. Firebase will provide you with DNS records

### Step 3: Configure DNS Records
You'll need to add these records to your domain registrar (where you bought bestaround.in):

#### Option A: If using Cloudflare or similar DNS provider:
- **Type**: A
- **Name**: www
- **Value**: 151.101.1.195
- **TTL**: 300 (or Auto)

#### Option B: If using other DNS providers:
- **Type**: A
- **Name**: www
- **Value**: 151.101.1.195
- **TTL**: 300

### Step 4: Wait for DNS Propagation
- DNS changes can take 24-48 hours
- You can check propagation using: https://www.whatsmydns.net/

### Step 5: Verify in Firebase Console
- Go back to Firebase Console → Hosting → Custom domains
- Status should change from "Pending" to "Connected"
- SSL certificate will be automatically provisioned

## 🚨 Important Notes:

### DNS Configuration:
- Make sure you're adding the A record to the **root domain** (bestaround.in)
- The www subdomain will automatically work
- Don't add CNAME records unless specifically instructed by Firebase

### SSL Certificate:
- Firebase automatically provisions SSL certificates
- This can take up to 24 hours after DNS is configured
- You'll see "Not secure" until SSL is provisioned

### Testing:
- Test the Firebase subdomain first: https://bestaround-in.web.app
- Then test your custom domain: https://www.bestaround.in

## 🔍 Troubleshooting:

### If DNS is not working:
1. Check your domain registrar's DNS settings
2. Ensure A record points to: 151.101.1.195
3. Wait 24-48 hours for propagation

### If SSL is not working:
1. Wait up to 24 hours for SSL certificate provisioning
2. Check Firebase Console for SSL status
3. Ensure DNS is properly configured first

### If site shows "Not Found":
1. Verify deployment was successful
2. Check Firebase Console for domain status
3. Ensure you're using the correct domain

## 📞 Next Steps:
1. Configure DNS records as shown above
2. Wait for DNS propagation (24-48 hours)
3. Wait for SSL certificate (up to 24 hours)
4. Test your site at https://www.bestaround.in

Your app is working correctly - we just need to connect your custom domain!
