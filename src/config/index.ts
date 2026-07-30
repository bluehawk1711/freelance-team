/**
 * Application configuration
 */

export const config = {
  site: {
    name: "FloatTech",
    description:
      "A premier digital agency delivering world-class digital experiences",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
  },
  contact: {
    email: "hello@floattech.com",
    phone: "+1 (555) 123-4567",
  },
  seo: {
    googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    googleAnalytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  },
};
