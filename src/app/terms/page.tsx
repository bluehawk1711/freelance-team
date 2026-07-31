import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Container, Heading, Text } from "@/components/ui";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for FloatTech. By using our website, you agree to these terms.",
});

const lastUpdated = "July 31, 2026";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Container size="md" className="py-16 sm:py-24">
          <Heading level={1} className="text-foreground mb-2">
            Terms of Service
          </Heading>
          <Text size="sm" color="muted" className="mb-12">
            Last updated: {lastUpdated}
          </Text>

          <div className="space-y-10">
            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                1. Acceptance of Terms
              </Heading>
              <Text color="muted">
                By accessing or using our website, you agree to be bound by
                these Terms of Service. If you do not agree with any part of
                these terms, please do not use our website.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                2. Use of the Website
              </Heading>
              <Text color="muted">
                Our website is provided for informational purposes to showcase
                our services and portfolio. You agree to use the website only
                for lawful purposes and in a way that does not infringe the
                rights of, restrict, or inhibit anyone else&apos;s use of the
                website.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                3. Intellectual Property
              </Heading>
              <Text color="muted">
                All content on this website, including text, graphics, logos,
                images, and design elements, is the property of FloatTech unless
                otherwise stated. You may not reproduce, distribute, or use any
                content without our prior written consent.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                4. No Data Collection
              </Heading>
              <Text color="muted">
                We do not collect any personal data through this website.
                Information you submit through our contact form is used solely
                to respond to your inquiry and is not stored or shared with
                third parties.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                5. Disclaimer of Warranties
              </Heading>
              <Text color="muted">
                This website is provided &quot;as is&quot; without any
                warranties of any kind, either express or implied, including
                but not limited to implied warranties of merchantability,
                fitness for a particular purpose, or non-infringement.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                6. Limitation of Liability
              </Heading>
              <Text color="muted">
                To the fullest extent permitted by law, we shall not be liable
                for any direct, indirect, incidental, consequential, or special
                damages arising out of or in connection with your use of this
                website.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                7. Third-Party Links
              </Heading>
              <Text color="muted">
                Our website may contain links to third-party websites. We are
                not responsible for the content, policies, or practices of any
                third-party websites and accept no liability for them.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                8. Governing Law
              </Heading>
              <Text color="muted">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the jurisdiction in which we are
                registered, without regard to its conflict of law provisions.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                9. Changes to These Terms
              </Heading>
              <Text color="muted">
                We may revise these Terms of Service at any time. The updated
                terms will be posted on this page with a revised effective date.
                Continued use of the website after changes constitutes
                acceptance of the updated terms.
              </Text>
            </section>

            <section className="space-y-3">
              <Heading level={3} className="text-foreground">
                10. Contact Us
              </Heading>
              <Text color="muted">
                If you have any questions about these Terms of Service, please
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
