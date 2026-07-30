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

const iconBgColors = [
  "bg-blue-100 dark:bg-blue-900/40",
  "bg-violet-100 dark:bg-violet-900/40",
  "bg-slate-200 dark:bg-slate-700/50",
  "bg-sky-100 dark:bg-sky-900/40",
  "bg-indigo-100 dark:bg-indigo-900/40",
  "bg-rose-100 dark:bg-rose-900/40",
];

const iconColors = [
  "text-blue-600 dark:text-blue-400",
  "text-violet-600 dark:text-violet-400",
  "text-slate-700 dark:text-slate-300",
  "text-sky-600 dark:text-sky-400",
  "text-indigo-600 dark:text-indigo-400",
  "text-rose-600 dark:text-rose-400",
];

export function FeaturedServicesSection() {
  return (
    <Section size="lg" className="relative overflow-hidden" id="services">
      {/* Dark background - distinct from page bg in both modes */}
      <div className="absolute inset-0 bg-slate-900 dark:bg-[#080c18]" />

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
            className="uppercase tracking-widest text-blue-400 mb-4"
          >
            Our Expertise
          </Text>
          <Heading level={2} className="text-white">
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
                className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconBgColors[index]}`}>
                  <IconComponent className={`w-6 h-6 ${iconColors[index]}`} />
                </div>
                <Heading level={4} className="mb-3 text-slate-900 dark:text-white">
                  {service.title}
                </Heading>
                <Text size="sm" className="text-slate-600 dark:text-slate-300 mb-6">
                  {service.description}
                </Text>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
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
