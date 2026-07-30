# FloatTech - Digital Agency Website

A modern, high-performance digital agency website built with Next.js 16, Redux, Framer Motion, and Tailwind CSS.

## Features

### Core Features
- **Responsive Design** - Mobile-first design that works on all devices
- **Modern Hero Section** - Eye-catching hero with animations
- **Services Showcase** - Detailed service offerings with icons
- **Portfolio Gallery** - Display of completed projects with filtering
- **Testimonials Carousel** - Client testimonials with ratings
- **Contact Form** - Fully validated contact form with API integration
- **Newsletter Signup** - Email subscription system
- **Smooth Animations** - Framer Motion animations throughout

### Technical Features
- **Redux State Management** - Centralized state with Redux Toolkit
- **Server Components** - Optimized with Next.js 16 App Router
- **Type Safety** - Full TypeScript support
- **Form Validation** - Zod schema validation with React Hook Form
- **SEO Optimized** - JSON-LD schema, robots.txt, sitemap, OG tags
- **Performance** - Optimized images, compression, lazy loading
- **Security** - Security headers, CORS protection, input validation
- **Dark Mode** - Light/dark theme support with system preference detection
- **Accessibility** - WCAG compliant with proper ARIA labels

### Advanced Features
- **Scroll Progress Bar** - Visual indication of page scroll position
- **Scroll to Top Button** - Quick navigation back to top
- **Parallax Effects** - Scrolling parallax animations
- **Floating Elements** - Animated background shapes
- **Loading States** - Smooth loading overlays
- **Toast Notifications** - Success/error messaging with Sonner

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm, npm, or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd floattech

# Install dependencies
pnpm install

# Create environment file
cp .env.example .env.local

# Set up environment variables
# NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Development

```bash
# Start development server
pnpm dev

# Open browser
# Visit http://localhost:3000
```

### Production Build

```bash
# Build the application
pnpm build

# Start production server
pnpm start

# Build and start in one command
pnpm dev
```

## Project Structure

```
floattech/
├── app/                        # Next.js App Router
│   ├── api/                   # API routes (contact, theme, newsletter)
│   ├── layout.tsx             # Root layout with metadata
│   ├── page.tsx               # Home page
│   ├── sitemap.ts             # SEO sitemap
│   └── globals.css            # Global styles with Tailwind
├── src/
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── sections/          # Page sections (Hero, Services, etc)
│   │   ├── layout/            # Layout components (Navbar, Footer)
│   │   └── common/            # Common utilities (ScrollToTop, etc)
│   ├── redux/
│   │   ├── slices/            # Redux state slices
│   │   ├── store.ts           # Redux store configuration
│   │   └── hooks.ts           # Redux hooks
│   ├── lib/
│   │   ├── animations.ts      # Framer Motion animation presets
│   │   ├── api.ts             # API utilities
│   │   ├── seo.ts             # SEO utilities
│   │   └── utils.ts           # General utilities
│   ├── constants/             # Application constants
│   ├── data/                  # Static data (services, portfolio, etc)
│   ├── providers/             # Context/Redux providers
│   ├── schemas/               # Zod validation schemas
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
├── .env.example              # Environment variables template
└── package.json              # Dependencies
```

## Key Technologies

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React version with new features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations library

### State Management
- **Redux Toolkit** - Modern Redux state management
- **Redux Persist** - Redux state persistence

### Forms & Validation
- **React Hook Form** - Efficient form handling
- **Zod** - TypeScript-first schema validation
- **Sonner** - Toast notifications

### Development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## API Routes

### Contact Form
- **POST** `/api/contact` - Submit contact form
- Request: `{ name, email, phone?, subject, message }`
- Response: `{ success: boolean, message: string }`

### Theme
- **GET** `/api/theme` - Get current theme preference
- **POST** `/api/theme` - Set theme preference
- Request: `{ theme: "light" | "dark" | "system" }`

### Newsletter
- **POST** `/api/newsletter` - Subscribe to newsletter
- Request: `{ email: string }`
- Response: `{ success: boolean, message: string }`

## Redux State Structure

```typescript
{
  site: {          // Site-wide data
    name: string
    description: string
    // ...
  },
  theme: {         // Theme settings
    mode: "light" | "dark"
    // ...
  },
  services: {      // Services data
    items: Service[]
    loading: boolean
    // ...
  },
  portfolio: {     // Portfolio projects
    items: Project[]
    filter: string
    // ...
  },
  testimonials: {  // Client testimonials
    items: Testimonial[]
    // ...
  },
  contact: {       // Contact form state
    formData: ContactFormData
    isSubmitting: boolean
    success: boolean
    error: string | null
  },
  // ... more slices
}
```

## Environment Variables

```bash
# Required
NEXT_PUBLIC_BASE_URL=https://floattech.com

# Optional - Email configuration
SMTP_FROM=noreply@floattech.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Optional - Analytics
NEXT_PUBLIC_GTAG_ID=

# Optional - API
API_SECRET_KEY=your-secret-key-here
```

## Performance Optimization

### Build Time Optimization
- Static page generation for landing page
- Code splitting and lazy loading
- Image optimization with WebP/AVIF formats

### Runtime Optimization
- Progressive enhancement
- Minimal JavaScript bundle
- Efficient re-rendering with React optimization
- CSS-in-JS optimization with Tailwind

### SEO Optimization
- JSON-LD structured data
- Open Graph meta tags
- Twitter Card support
- Sitemap generation
- Robots.txt configuration

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

```bash
# Push to GitHub
git push origin main

# Connect to Vercel
# - Visit vercel.com and import repository
# - Set environment variables
# - Deploy automatically
```

## Customization

### Add New Service
1. Edit `src/data/index.ts`
2. Add service data to `SERVICES_DATA`
3. Update Redux slice if needed
4. Service will automatically appear in Services section

### Add New Portfolio Item
1. Edit `src/data/index.ts`
2. Add project to `PORTFOLIO_DATA`
3. Generate or add project image
4. Update filtering if needed

### Customize Colors
1. Edit `app/globals.css`
2. Update CSS variables in `:root` and `.dark`
3. Colors cascade through all components

### Update Animations
1. Edit `src/lib/animations.ts`
2. Modify or create new animation variants
3. Use in components via `variants={animationVariant}`

## Performance Metrics

Current performance targets:
- **Lighthouse Score**: 90+
- **Core Web Vitals**: Good (Green)
- **Page Size**: < 500KB (gzipped)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## Troubleshooting

### Build Fails
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && pnpm install`
- Check Node version: `node -v` (should be 18+)

### Animations Not Working
- Check Framer Motion is installed: `pnpm list framer-motion`
- Verify component has `'use client'` directive
- Check browser dev console for errors

### Form Not Submitting
- Verify API route exists: `app/api/contact/route.ts`
- Check browser network tab
- Verify CORS configuration
- Check server logs

### Styling Issues
- Clear Tailwind cache: `pnpm exec tailwindcss -i app/globals.css -o /dev/null --clean`
- Verify class names are correct
- Check dark mode configuration

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Support

For issues and questions:
- Check existing GitHub issues
- Create a new GitHub issue with details
- Contact: support@floattech.com

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- State management with [Redux](https://redux.js.org/)

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Maintained by**: FloatTech Team
