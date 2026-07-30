/**
 * Centralized data hub for all website content
 * Update data here and the entire site updates dynamically via Redux
 */

export const heroData = {
  title: "Building Modern Digital Experiences",
  subtitle:
    "We transform businesses through innovative digital solutions and cutting-edge technology.",
  ctaText: "Get Started",
  ctaSecondaryText: "Learn More",
  backgroundImage: "/hero-bg.jpg",
};

export const featuresData = [
  {
    title: "Strategy",
    description:
      "Data-driven approach to understanding your market and customers",
    icon: "Lightbulb",
  },
  {
    title: "Design",
    description: "Beautiful interfaces that solve real user problems",
    icon: "Palette",
  },
  {
    title: "Development",
    description: "Scalable, performant solutions built with modern tech",
    icon: "Code",
  },
  {
    title: "Growth",
    description: "Analytics-focused strategies to scale your business",
    icon: "TrendingUp",
  },
];

export const statsData = [
  { label: "Projects Completed", value: "150+", suffix: "" },
  { label: "Team Members", value: "50+", suffix: "" },
  { label: "Years Experience", value: "8+", suffix: "" },
  { label: "Client Satisfaction", value: "98%", suffix: "" },
];

export const processData = [
  {
    step: 1,
    title: "Discover",
    description:
      "We deep dive into your business, market, and goals to create a strategic foundation.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Our team creates beautiful, user-centric designs that reflect your brand.",
    icon: "Palette",
  },
  {
    step: 3,
    title: "Develop",
    description:
      "We build scalable, performant solutions using industry-leading technologies.",
    icon: "Code",
  },
  {
    step: 4,
    title: "Launch",
    description:
      "We ensure a smooth launch and provide ongoing support for your success.",
    icon: "Rocket",
  },
];

export const pricingData = [
  {
    name: "Starter",
    price: 2999,
    description: "Perfect for small projects",
    features: [
      "Up to 5 pages",
      "Basic SEO",
      "Mobile responsive",
      "1 month support",
    ],
  },
  {
    name: "Professional",
    price: 7999,
    description: "For growing businesses",
    features: [
      "Up to 15 pages",
      "Advanced SEO",
      "Analytics setup",
      "3 months support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 19999,
    description: "For large-scale projects",
    features: [
      "Unlimited pages",
      "Custom solutions",
      "Priority support",
      "12 months support",
    ],
  },
];

export const companyData = {
  name: "FloatTech",
  description:
    "A premier digital agency delivering world-class digital experiences.",
  logo: "/logo.svg",
  favicon: "/favicon.ico",
};
