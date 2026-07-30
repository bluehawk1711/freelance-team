"use client";

import {
  Container,
  Section,
  Heading,
  Text,
} from "@/components/ui";
import { processData } from "@/data";
import { Search, Palette, Code, Rocket } from "lucide-react";

const iconMap = {
  Search,
  Palette,
  Code,
  Rocket,
};

export function ProcessSection() {
  return (
    <Section size="lg" className="relative bg-muted/30" id="process">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Text
            size="sm"
            weight="semibold"
            className="uppercase tracking-widest text-primary mb-4"
          >
            How We Work
          </Text>
          <Heading level={2} className="text-foreground">
            Our Creative Process
          </Heading>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Horizontal connector line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-border hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processData.map((process, index) => {
              const IconComponent =
                iconMap[process.icon as keyof typeof iconMap];
              return (
                <div
                  key={process.step}
                  className="relative text-center"
                >
                  {/* Step number circle */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      )}
                    </div>
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center text-[10px] font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <Heading level={4} className="mb-3 text-foreground">
                    {process.title}
                  </Heading>
                  <Text size="sm" color="muted" className="max-w-xs mx-auto">
                    {process.description}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
