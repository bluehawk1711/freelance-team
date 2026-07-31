/**
 * Application configuration
 */

export const config = {
  site: {
    name: "FloatTech",
    description:
      "A premier digital agency delivering world-class digital experiences",
    url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  },
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com",
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@floattech.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+1 (555) 123-4567",
  },
  seo: {
    googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    googleAnalytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  },
};
