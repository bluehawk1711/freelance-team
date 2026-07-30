"use client";

import Link from "next/link";
import { Container, Text, Heading, Input, Button } from "@/components/ui";
import { useAppSelector } from "@/redux/hooks";
import { Send } from "lucide-react";

export function Footer() {
  const { companyName } = useAppSelector((state) => state.site);

  return (
    <footer className="border-t border-border bg-background">
      <Container size="xl" className="py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Heading level={4} className="text-xl font-bold text-foreground">
              {companyName}
            </Heading>
            <Text size="sm" color="muted" className="max-w-xs">
              Pioneering the future of digital experience through technical
              excellence and aesthetic precision.
            </Text>
          </div>

          <div className="space-y-4">
            <Heading level={5} className="font-semibold text-foreground">
              Platform
            </Heading>
            <ul className="space-y-3">
              {["Work", "Services", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <Heading level={5} className="font-semibold text-foreground">
              Resources
            </Heading>
            <ul className="space-y-3">
              {["Process", "Contact", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <Heading level={5} className="font-semibold text-foreground">
              Stay Connected
            </Heading>
            <Text size="sm" color="muted">
              Subscribe to our newsletter for insights.
            </Text>
            <div className="flex gap-2">
              <Input type="email" placeholder="Email" className="flex-1" />
              <Button size="icon" variant="default" className="flex-shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Text size="sm" color="muted">
            &copy; 2026 {companyName}. All rights reserved.
          </Text>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
