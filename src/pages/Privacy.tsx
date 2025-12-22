import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ultra Fast Cargo ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cargo and logistics services or visit our website.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, postal address, and identification documents for customs purposes.</li>
                  <li><strong>Shipment Information:</strong> Package details, weight, dimensions, contents description, sender and recipient information.</li>
                  <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through our payment providers).</li>
                  <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and tracking information when you use our website.</li>
                  <li><strong>Communication Data:</strong> Records of your communications with us, including customer service inquiries.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Process and deliver your shipments</li>
                  <li>Provide tracking and status updates</li>
                  <li>Process payments and billing</li>
                  <li>Comply with customs and regulatory requirements</li>
                  <li>Communicate with you about your shipments and our services</li>
                  <li>Improve our services and customer experience</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Delivery Partners:</strong> Airlines, shipping lines, and local delivery services to complete your shipment.</li>
                  <li><strong>Customs Authorities:</strong> Government agencies as required by law for international shipments.</li>
                  <li><strong>Payment Processors:</strong> Secure third-party payment services to process transactions.</li>
                  <li><strong>Service Providers:</strong> IT services, customer support, and other business operations partners.</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government request.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Shipment records are typically retained for 7 years for regulatory compliance.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">8. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can manage your cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">9. International Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As an international cargo company, your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="bg-secondary rounded-lg p-6 mt-4">
                  <p className="text-foreground font-semibold">Ultra Fast Cargo</p>
                  <p className="text-muted-foreground">Business Bay, Dubai, UAE</p>
                  <p className="text-muted-foreground">Email: privacy@ultrafastcargo.com</p>
                  <p className="text-muted-foreground">Phone: +971 XX XXX XXXX</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Privacy;