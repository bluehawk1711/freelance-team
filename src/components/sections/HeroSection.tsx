"use client";

import Link from "next/link";
import Image from "next/image";
import { Container, Section, Heading, Text, Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <Section size="xl" className="relative overflow-hidden !py-5">
      {/* Gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-secondary/30 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-secondary/20 to-primary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[60vh]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <p className="text-xs sm:text-sm font-mono font-semibold tracking-[0.2em] text-primary uppercase">
              Future-Proof Digital Solutions
            </p>

            <Heading
              level={1}
              className="leading-tight sm:leading-snug text-foreground"
            >
              Building
              <br />
              Modern
              <br />
              <span className="text-primary">Digital</span>
              <br />
              Experiences
            </Heading>

            <Text size="lg" color="muted" className="max-w-lg">
              We design beautiful UI/UX and develop high-performance websites
              that help businesses grow with engineered creativity.
            </Text>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                variant="gradient"
                className="group"
                render={<Link href="/#portfolio" />}
              >
                View Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                render={<Link href="/#contact" />}
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Visual - Glass Card */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-muted/50 to-card border border-border shadow-2xl">
                <Image
                  src="/hero.webp"
                  alt="FloatTech digital agency hero"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                {/* Grain texture on right side */}
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-xl border border-border animate-[bounce_4s_infinite]" role="complementary" aria-label="Performance score">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      99% Score
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Core Web Vitals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
