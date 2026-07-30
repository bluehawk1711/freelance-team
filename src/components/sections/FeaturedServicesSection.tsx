"use client";

import {
  Container,
  Section,
  Heading,
  Text,
} from "@/components/ui";
import {
  Layout,
  Globe,
  Zap,
  BarChart3,
  Briefcase,
  Palette,
} from "lucide-react";

const premiumServices = [
  {
    title: "UI/UX Design",
    description:
      "Immersive digital journeys crafted with attention to every micro-interaction and pixel.",
    icon: Layout,
  },
  {
    title: "Website Design",
    description:
      "Bespoke web designs that capture your brand essence while maximizing conversion rates.",
    icon: Globe,
  },
  {
    title: "Frontend Development",
    description:
      "React, Next.js, and Tailwind based architectures for lightning-fast performance.",
    icon: Zap,
  },
  {
    title: "Landing Pages",
    description:
      "High-impact landing pages designed specifically for marketing campaigns and growth.",
    icon: BarChart3,
  },
  {
    title: "Business Websites",
    description:
      "Scaleable digital platforms for enterprises that require security and reliability.",
    icon: Briefcase,
  },
  {
    title: "Website Redesign",
    description:
      "Modernizing legacy web applications with contemporary aesthetics and UX.",
    icon: Palette,
  },
];

// Icon background colors using CSS variables from globals.css
const iconBgColors = [
  "bg-[var(--icon-blue-bg)]",
  "bg-[var(--icon-teal-bg)]",
  "bg-[var(--icon-amber-bg)]",
  "bg-[var(--icon-cyan-bg)]",
  "bg-[var(--icon-emerald-bg)]",
  "bg-[var(--icon-rose-bg)]",
];

// Icon foreground colors using CSS variables from globals.css
const iconColors = [
  "text-[var(--icon-blue)]",
  "text-[var(--icon-teal)]",
  "text-[var(--icon-amber)]",
  "text-[var(--icon-cyan)]",
  "text-[var(--icon-emerald)]",
  "text-[var(--icon-rose)]",
];

export function FeaturedServicesSection() {
  return (
    <Section size="lg" className="relative overflow-hidden" id="services">
      {/* Dark background - uses CSS variable for both modes */}
      <div className="absolute inset-0 bg-[var(--services-bg)]" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <Container size="xl" className="relative">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <Text
            size="sm"
            weight="semibold"
            className="uppercase tracking-widest text-[var(--services-subheading)] mb-4"
          >
            Our Expertise
          </Text>
          <Heading level={2} className="text-[var(--services-heading)]">
            Premium Digital Services
          </Heading>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {premiumServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-[var(--services-card)] backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconBgColors[index]}`}>
                  <IconComponent className={`w-6 h-6 ${iconColors[index]}`} />
                </div>
                <Heading level={4} className="mb-3 text-[var(--services-card-foreground)]">
                  {service.title}
                </Heading>
                <Text size="sm" className="text-[var(--services-card-muted)] mb-6">
                  {service.description}
                </Text>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--services-link)] hover:underline"
                >
                  Learn more
                  <span className="text-lg leading-none">&rsaquo;</span>
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
