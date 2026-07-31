"use client";

import Link from "next/link";
import { Container, Text, Heading } from "@/components/ui";
import { useAppSelector } from "@/redux/hooks";
import { siteConfig } from "@/config/site";
import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  FacebookIcon,
} from "@/components/ui/brand-icons";

const socialLinks = [
  { name: "Instagram", url: siteConfig.social.instagram, Icon: InstagramIcon },
  { name: "LinkedIn", url: siteConfig.social.linkedin, Icon: LinkedinIcon },
  { name: "Twitter", url: siteConfig.social.twitter, Icon: TwitterIcon },
  { name: "GitHub", url: siteConfig.social.github, Icon: GithubIcon },
  { name: "Facebook", url: siteConfig.social.facebook, Icon: FacebookIcon },
].filter((link): link is typeof link & { url: string } => Boolean(link.url));

const platformLinks = [
  { label: "Work", href: "/#portfolio" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
];

const resourceLinks = [
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

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
              {platformLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
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
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
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
              Follow us on social media for updates.
            </Text>
            {socialLinks.length > 0 ? (
              <div className="flex gap-3">
                {socialLinks.map(({ name, url, Icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex items-center justify-center w-10 h-10 rounded-xl border border-border hover:bg-muted transition-colors"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </a>
                ))}
              </div>
            ) : null}
            {siteConfig.contact.email ? (
              <Text size="sm" color="muted">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </Text>
            ) : null}
          </div>
        </div>

        <div className="border-t border-border my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Text size="sm" color="muted">
            &copy; 2026 {companyName}. All rights reserved.
          </Text>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
