"use client";

import {
  Container,
  Section,
  Heading,
  Text,
  Grid,
  FeatureCard,
} from "@/components/ui";
import { featuresData } from "@/data";
import { Lightbulb, Palette, Code, TrendingUp } from "lucide-react";

const iconMap = {
  Lightbulb,
  Palette,
  Code,
  TrendingUp,
};

export function FeaturesSection() {
  return (
    <Section size="lg" className="relative" id="about">
      <Container size="xl">
        <div className="text-center mb-12 space-y-4">
          <Heading level={2} className="text-foreground">
            Where Precision Meets{" "}
            <span className="text-primary">Imagination</span>
          </Heading>
          <Text size="lg" color="muted" className="max-w-2xl mx-auto">
            We are a boutique digital agency dedicated to transforming
            ambitious ideas into pixel-perfect realities. Our cross-functional
            team bridges the gap between sophisticated aesthetics and
            robust technical infrastructure.
          </Text>
        </div>

        <Grid cols={4} gap="lg" responsive>
          {featuresData.map((feature, index) => {
            const IconComponent =
              iconMap[feature.icon as keyof typeof iconMap];
            return (
              <FeatureCard
                key={index}
                icon={
                  IconComponent ? (
                    <IconComponent className="w-6 h-6 text-primary" />
                  ) : null
                }
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}
