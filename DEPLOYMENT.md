# 🚀 Deployment Guide - गीता प्रेरणा

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js app. It's free and takes 2 minutes!

### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Sign up with GitHub, GitLab, or Bitbucket

### Step 2: Import Project
1. Click "Add New Project"
2. Import your Git repository
3. Vercel will auto-detect Next.js settings

### Step 3: Deploy
1. Click "Deploy"
2. Wait 1-2 minutes
3. Your site is live! 🎉

### Custom Domain
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records as shown
4. Wait for SSL certificate (automatic)

## Deploy to Netlify

### Step 1: Create netlify.toml
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy
1. Go to https://netlify.com
2. Click "Add new site" > "Import an existing project"
3. Connect your Git repository
4. Deploy!

## Deploy to Your Own Server

### Requirements
- Node.js 18+
- PM2 (process manager)
- Nginx (web server)

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Install PM2
```bash
npm install -g pm2
```

### Step 3: Start with PM2
```bash
pm2 start npm --name "gita-website" -- start
pm2 save
pm2 startup
```

### Step 4: Configure Nginx
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 5: Enable Site
```bash
sudo ln -s /etc/nginx/sites-available/gita /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 6: Add SSL (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Environment Variables

Create `.env.local` file:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=गीता प्रेरणा

# Admin Panel
ADMIN_PASSWORD=your-secure-password

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Payment Gateway (Optional)
RAZORPAY_KEY_ID=your-key-id
RAZORPAY_KEY_SECRET=your-key-secret
```

## Pre-Deployment Checklist

- [ ] Update site name and contact info in `lib/translations.ts`
- [ ] Add all 700 shlokas to `lib/chaptersData.ts`
- [ ] Update YouTube video IDs for all chapters
- [ ] Add gallery images
- [ ] Change admin password (default: admin123)
- [ ] Test all pages on mobile and desktop
- [ ] Configure payment gateway
- [ ] Set up analytics
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Test all translations
- [ ] Check SEO meta tags

## Performance Optimization

### Image Optimization
```typescript
// In next.config.js
module.exports = {
  images: {
    domains: ['your-cdn-domain.com'],
    formats: ['image/avif', 'image/webp'],
  },
}
```

### Caching Strategy
```typescript
// In next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

## Monitoring

### Vercel Analytics
```typescript
// In app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Error Tracking (Sentry)
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

## Backup Strategy

### Database Backup (if using)
```bash
# Daily backup script
#!/bin/bash
DATE=$(date +%Y-%m-%d)
mongodump --out /backup/gita-$DATE
# Or
pg_dump dbname > /backup/gita-$DATE.sql
```

### Code Backup
Always use Git:
```bash
git add .
git commit -m "Update content"
git push origin main
```

## Scaling

### Vercel Pro Features
- More build minutes
- Team collaboration
- Advanced analytics
- Priority support

### CDN Configuration
Use Cloudflare for:
- DDoS protection
- Global CDN
- SSL/TLS
- WAF rules

## Domain Setup

### DNS Configuration
```
A Record: @ → Your-Server-IP
CNAME: www → your-domain.com
```

### SSL Certificate
- Vercel/Netlify: Automatic
- Self-hosted: Let's Encrypt (free)
- Premium: Buy from provider

## Post-Deployment

1. Test all pages
2. Check mobile responsiveness
3. Test payment flow
4. Verify admin panel
5. Test all language translations
6. Submit to Google Search Console
7. Create social media accounts
8. Set up email notifications

## Maintenance

### Regular Updates
```bash
# Update dependencies monthly
npm update
npm audit fix

# Rebuild and deploy
npm run build
```

### Content Updates
1. Login to admin panel
2. Add/edit content
3. Changes reflect immediately

### Monitoring
- Check uptime (UptimeRobot)
- Monitor errors (Sentry)
- Track analytics (Google Analytics)
- Review user feedback

## Support Channels

After deployment, set up:
- Email: support@gitaprerna.com
- Social Media: Twitter, Facebook, Instagram
- Community: Discord or Telegram
- Documentation: Wiki or Help Center

## Cost Estimation

### Free Tier (Good for 10K visitors/month)
- **Hosting**: Vercel/Netlify Free
- **Domain**: $10-15/year
- **Email**: Free (Gmail)
- **Total**: ~$15/year

### Paid Tier (100K+ visitors/month)
- **Hosting**: Vercel Pro $20/month
- **CDN**: Cloudflare Pro $20/month
- **Domain**: $15/year
- **Email**: Google Workspace $6/month
- **Total**: ~$550/year

## Need Help?

- Next.js Discord: https://discord.gg/nextjs
- Vercel Support: https://vercel.com/support
- Stack Overflow: Tag `nextjs`

---

**ॐ शान्ति शान्ति शान्तिः**

*May your deployment be successful!*
