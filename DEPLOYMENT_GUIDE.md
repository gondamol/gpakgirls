# Deploying GPAK Girls Website to gpakgirls.org

## Complete Deployment Guide

### Step 1: Push Code to GitHub

First, we need to get your code on GitHub so Vercel can access it.

```bash
# Initialize git (if not already done)
cd /home/gondamol/gondamol/gpakgirls
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial GPAK Girls website"

# Create a new repository on GitHub:
# 1. Go to https://github.com
# 2. Click the "+" icon in top right
# 3. Click "New repository"
# 4. Name it: gpakgirls
# 5. Keep it Public or Private (your choice)
# 6. Don't add README, .gitignore, or license (we already have them)
# 7. Click "Create repository"

# Connect to GitHub and push (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/gpakgirls.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel (FREE)

1. **Go to Vercel**: https://vercel.com
2. **Sign Up/Login**: Use your GitHub account (easiest)
3. **Import Project**:
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your `gpakgirls` repository
4. **Configure Project**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (leave as is)
   - Build Command: `next build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
5. **Add Environment Variables** (if you have any in .env.local):
   - Skip for now (you can add later)
6. **Click "Deploy"**

Wait 2-3 minutes and your site will be live at something like:
`https://gpakgirls.vercel.app`

### Step 3: Connect Your Hostinger Domain (gpakgirls.org)

Now we'll point your Hostinger domain to Vercel.

#### In Vercel Dashboard:

1. Go to your project settings
2. Click "Domains"
3. Add your domain: `gpakgirls.org`
4. Vercel will show you DNS records you need to add

#### In Hostinger:

1. **Login to Hostinger**: https://www.hostinger.com
2. **Go to Domains**:
   - Click on "Domains" in the sidebar
   - Find `gpakgirls.org`
   - Click "Manage"
3. **Go to DNS/Name Servers**:
   - Look for "DNS Zone" or "DNS Records"
   - Click "Manage DNS Records"

4. **Add These DNS Records**:

   **Option A: Using A Records (Recommended)**
   
   Delete any existing A records and add:
   ```
   Type: A
   Name: @ (or leave blank)
   Points to: 76.76.21.21
   TTL: 14400 (or Auto)
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Points to: cname.vercel-dns.com
   TTL: 14400 (or Auto)
   ```

   **Option B: Using CNAME (Alternative)**
   
   If Hostinger allows CNAME for root domain:
   ```
   Type: CNAME
   Name: @ (or leave blank)
   Points to: cname.vercel-dns.com
   TTL: 14400
   ```

5. **Save Changes**

### Step 4: Wait for DNS Propagation

- **Time**: 10 minutes to 48 hours (usually 1-2 hours)
- **Check Status**: Visit https://gpakgirls.org after 30 minutes
- **Check DNS**: Use https://www.whatsmydns.net to see if changes propagated

### Step 5: Verify SSL Certificate

Once DNS propagates:
1. Vercel automatically generates SSL certificate
2. Your site will be accessible via `https://gpakgirls.org`
3. Vercel handles all SSL/HTTPS automatically (free!)

## Alternative: If You Want to Use Hostinger Hosting

If you prefer to host on Hostinger servers instead of Vercel:

### Build Your Site

```bash
cd /home/gondamol/gondamol/gpakgirls
npm run build
```

This creates an optimized production build in `.next` folder.

### Upload to Hostinger

1. **Requirements**: 
   - Hostinger needs to support Node.js (check your plan)
   - Most shared hosting won't work for Next.js

2. **Better Options**:
   - Use Vercel (free, optimized for Next.js)
   - Use Hostinger VPS (if you have one)
   - Use Netlify (alternative to Vercel)

**Recommendation**: Stick with Vercel for Next.js sites. It's free, fast, and designed for Next.js.

## Troubleshooting

### DNS Not Working?

1. **Clear DNS cache on your computer**:
   ```bash
   # Linux/Mac
   sudo systemd-resolve --flush-caches
   
   # Windows
   ipconfig /flushdns
   ```

2. **Check DNS propagation**: https://www.whatsmydns.net
   - Enter: gpakgirls.org
   - Record Type: A
   - Should show: 76.76.21.21

3. **Wait longer**: DNS can take up to 48 hours

### Site Not Loading?

1. Check Vercel deployment status (should show green checkmark)
2. Verify domain is added in Vercel settings
3. Check DNS records in Hostinger match Vercel requirements
4. Try accessing via `https://gpakgirls.vercel.app` first

### SSL Certificate Error?

1. Wait 10-15 minutes after DNS propagates
2. Vercel auto-generates certificates
3. If still not working after 1 hour, contact Vercel support

## Quick Reference

### Your URLs:
- **Development**: http://localhost:3000
- **Vercel (temporary)**: https://gpakgirls.vercel.app
- **Production**: https://gpakgirls.org

### DNS Settings Summary (Hostinger):
```
Type: A, Name: @, Value: 76.76.21.21
Type: CNAME, Name: www, Value: cname.vercel-dns.com
```

### Vercel Dashboard:
- Project: https://vercel.com/dashboard
- Domains: Settings → Domains
- Deployments: See all versions

## Cost Summary

- **Vercel Hosting**: FREE forever
- **Domain (gpakgirls.org)**: $15/year (you already own it)
- **SSL Certificate**: FREE (automatic with Vercel)
- **Bandwidth**: FREE (unlimited on Vercel)
- **Deployments**: Unlimited FREE

**Total ongoing cost**: $0/month (just $15/year for domain renewal)

## Auto-Deployments

Once connected to GitHub:
- Every push to `main` branch = automatic deployment
- Changes go live in 2-3 minutes
- Automatic preview URLs for branches
- Rollback to any previous version anytime

## Next Steps After Deployment

1. ✅ Test all pages work
2. ✅ Check mobile responsiveness
3. ✅ Verify contact form (needs backend integration)
4. ✅ Set up analytics (Google Analytics)
5. ✅ Configure payment gateways (Stripe, M-Pesa)
6. ✅ Connect email service (for forms)
7. ✅ Set up CMS (Sanity)

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Hostinger Support**: https://www.hostinger.com/contact
- **DNS Help**: https://www.whatsmydns.net

---

**Your website will be live at https://gpakgirls.org within 1-2 hours! 🚀**

