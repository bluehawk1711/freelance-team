"use client";

import { Container, Section, Heading, Text } from "@/components/ui";
import { featuresData } from "@/data";
import { TrendingUp, Palette, Terminal, LineChart } from "lucide-react";

const iconMap = {
  Lightbulb: TrendingUp,
  TrendingUp: TrendingUp,
  Palette: Palette,
  Code: Terminal,
  Terminal: Terminal,
  LineChart: LineChart,
};

export function FeaturesSection() {
  return (
    <Section size="lg" className="relative" id="about">
      <Container size="xl">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          <Heading level={2} className="text-foreground">
            Where Precision Meets{" "}
            <span className="text-primary">Imagination</span>
          </Heading>
          <Text size="lg" color="muted" className="lg:pt-3 leading-relaxed">
            We are a boutique digital agency dedicated to transforming ambitious
            ideas into pixel-perfect realities. Our cross-functional team
            bridges the gap between sophisticated aesthetics and robust
            technical infrastructure.
          </Text>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="rounded-2xl border border-border p-7 transition-colors duration-200 hover:border-primary/30"
              >
                {IconComponent && (
                  <IconComponent
                    className="w-7 h-7 text-primary mb-4"
                    strokeWidth={2}
                  />
                )}
                <Heading level={3} className="text-xl text-foreground mb-3">
                  {feature.title}
                </Heading>
                <Text size="sm" color="muted" className="leading-relaxed">
                  {feature.description}
                </Text>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
