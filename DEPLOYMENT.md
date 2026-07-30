# Deployment Guide

This guide covers deploying the FloatTech digital agency website to production.

## Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- GitHub account (for Vercel deployment)
- Domain name (optional, but recommended)

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **Push your code to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables
   - Click "Deploy"

3. **Environment Variables**
   - Copy `.env.example` to `.env.local`
   - Set `NEXT_PUBLIC_BASE_URL` to your production domain
   - Add any additional required variables

### Option 2: Self-Hosted (Docker)

Build a Docker container for deployment:

```bash
# Build the application
pnpm build

# Create Dockerfile in project root
FROM node:18-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
EXPOSE 3000
CMD ["pnpm", "start"]

# Build and run
docker build -t floattech .
docker run -p 3000:3000 -e NEXT_PUBLIC_BASE_URL=https://floattech.com floattech
```

### Option 3: Traditional Server (Ubuntu/Debian)

1. **SSH into your server**
   ```bash
   ssh user@your-server.com
   ```

2. **Install dependencies**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pnpm pm2
   ```

3. **Clone and setup**
   ```bash
   git clone <your-repo> floattech
   cd floattech
   pnpm install
   pnpm build
   ```

4. **Run with PM2**
   ```bash
   pm2 start "pnpm start" --name "floattech"
   pm2 save
   ```

5. **Setup Nginx reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name floattech.com www.floattech.com;

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

## Performance Optimization

### Enable Caching
- Static pages are pre-rendered at build time
- Set appropriate cache headers in `next.config.mjs`
- Use CDN for static assets

### Database Optimization (when added)
- Create indexes on frequently queried columns
- Use connection pooling
- Implement query caching

### Image Optimization
- Use WebP format for modern browsers
- Optimize image sizes before upload
- Lazy load images below the fold

## Security Checklist

- [ ] Set strong passwords for all services
- [ ] Enable HTTPS/SSL certificate
- [ ] Configure CORS properly
- [ ] Set environment variables securely
- [ ] Enable rate limiting on API routes
- [ ] Implement CSRF protection
- [ ] Regularly update dependencies: `pnpm upgrade`

## Monitoring

### Error Tracking
Consider adding error tracking services:
- [Sentry](https://sentry.io)
- [LogRocket](https://logrocket.com)
- [BugSnag](https://www.bugsnag.com)

### Performance Monitoring
- Use Google Analytics for user behavior
- Monitor Core Web Vitals
- Set up alerts for errors

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://www.pingdom.com)
- [Monitoring services](https://statuspage.io)

## Backup Strategy

1. **Version Control**: All code is backed up in GitHub
2. **Database Backups**: If database is added, backup regularly
3. **Content Backups**: Export important content periodically

## Rollback Procedure

If deployment fails:

```bash
# Vercel: Automatic rollback to previous deployment
# Manual rollback:
git revert <commit-hash>
git push origin main
```

## Contact & Support

For deployment issues:
- Check logs: `pnpm logs` or server logs
- Verify environment variables
- Check network connectivity
- Contact deployment platform support

---

**Last Updated**: 2024
**Maintained By**: FloatTech Team
