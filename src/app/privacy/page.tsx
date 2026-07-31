import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Container, Heading, Text } from "@/components/ui";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for FloatTech. We do not collect, store, or share any personal data.",
});

const lastUpdated = "July 31, 2026";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <Container size="md" className="py-16 sm:py-24">
          <Heading level={1} className="text-foreground mb-2">
            Privacy Policy
          </Heading>
          <Text size="sm" color="muted" className="mb-12">
            Last updated: {lastUpdated}
          </Text>

          <div className="space-y-10">
            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                1. Introduction
              </Heading>
              <Text color="muted">
                We are committed to protecting your privacy. This Privacy Policy
                explains how we handle information when you visit our website or
                contact us. In short: we do not collect, store, or share any
                personal data.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                2. Information We Collect
              </Heading>
              <Text color="muted">
                We do not collect any personal data. We do not use cookies for
                tracking, do not run analytics scripts, and do not maintain user
                accounts, profiles, or databases of visitors.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                3. Contact Form
              </Heading>
              <Text color="muted">
                When you use our contact form, the information you provide
                (such as your name, email address, and message) is sent directly
                to us via email for the sole purpose of responding to your
                inquiry. We do not store this information on our servers, do not
                add it to any mailing list, and do not share it with third
                parties.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                4. Local Storage
              </Heading>
              <Text color="muted">
                Your browser may store a preference (such as light or dark
                theme) locally on your device. This data never leaves your
                browser and is not accessible to us.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                5. Third-Party Links
              </Heading>
              <Text color="muted">
                Our website may contain links to external websites, including
                social media profiles. We are not responsible for the privacy
                practices of those websites, and we encourage you to review
                their privacy policies.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                6. Your Rights
              </Heading>
              <Text color="muted">
                Because we do not collect any personal data, there is nothing to
                access, correct, or delete. If you have questions about this
                policy, please contact us using the details on our website.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                7. Changes to This Policy
              </Heading>
              <Text color="muted">
                We may update this Privacy Policy from time to time. Any changes
                will be reflected on this page with an updated revision date.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                8. Contact Us
              </Heading>
              <Text color="muted">
                If you have any questions about this Privacy Policy, please
                contact us through the contact form on our website or via the
                contact details provided on the website.
              </Text>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
