import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
              Terms and Conditions
            </h1>
            
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using the services of Ultra Fast Cargo ("Company," "we," "our," or "us"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms apply to all shipments, whether domestic or international.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ultra Fast Cargo provides air cargo, sea freight, land transport, and express delivery services. We act as a freight forwarder and may use third-party carriers, agents, and subcontractors to fulfill shipments. Our services include but are not limited to: pickup, packaging, transportation, customs clearance, and delivery of goods.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">3. Shipping and Delivery</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Delivery Times:</strong> Estimated delivery times are provided as guidelines only and are not guaranteed. Delays may occur due to customs, weather, carrier issues, or other circumstances beyond our control.</li>
                  <li><strong>Delivery Attempts:</strong> We will make reasonable attempts to deliver shipments. If delivery cannot be completed, the shipment may be held at a local facility or returned to the sender.</li>
                  <li><strong>Signature Requirements:</strong> Certain shipments may require a signature upon delivery. If no one is available to sign, a delivery notice will be left.</li>
                  <li><strong>Address Accuracy:</strong> The sender is responsible for providing accurate and complete delivery addresses. Additional charges may apply for address corrections or re-delivery.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">4. Prohibited Items</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The following items are prohibited from shipment:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Illegal drugs and narcotics</li>
                  <li>Weapons, firearms, and ammunition</li>
                  <li>Explosives and flammable materials</li>
                  <li>Hazardous chemicals and radioactive materials</li>
                  <li>Counterfeit goods and pirated materials</li>
                  <li>Currency, negotiable instruments, and precious metals</li>
                  <li>Live animals (except with prior approval)</li>
                  <li>Perishable goods (without proper packaging)</li>
                  <li>Human remains</li>
                  <li>Any items prohibited by local, national, or international law</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">5. Packaging Requirements</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The sender is responsible for properly packaging all items for shipment. Packaging must be adequate to protect contents during normal handling and transportation. We reserve the right to refuse improperly packaged shipments or repackage items at the sender's expense. We are not liable for damage resulting from inadequate packaging.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">6. Customs and Import/Export</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>The sender is responsible for ensuring compliance with all applicable import and export laws and regulations.</li>
                  <li>Accurate customs declarations must be provided for all international shipments.</li>
                  <li>The recipient may be responsible for customs duties, taxes, and clearance fees.</li>
                  <li>We are not responsible for delays or seizure of goods by customs authorities.</li>
                  <li>False or inaccurate declarations may result in penalties, seizure, or legal action.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">7. Insurance and Liability</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Limited Liability:</strong> Our liability for loss or damage is limited to the declared value of the shipment or the maximum liability under applicable conventions (e.g., Warsaw Convention, Montreal Convention, CMR).</li>
                  <li><strong>Insurance:</strong> We recommend purchasing additional shipping insurance for valuable items. Insurance options are available at the time of booking.</li>
                  <li><strong>Exclusions:</strong> We are not liable for indirect, consequential, or special damages, loss of profits, or delays beyond our control.</li>
                  <li><strong>Claims:</strong> Claims for loss or damage must be submitted in writing within 7 days of delivery (or expected delivery for lost shipments).</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">8. Pricing and Payment</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Shipping rates are based on weight, dimensions, destination, and service type.</li>
                  <li>Prices are subject to change without notice.</li>
                  <li>Payment is due at the time of booking unless credit terms have been arranged.</li>
                  <li>Additional charges may apply for fuel surcharges, remote area delivery, customs processing, or other services.</li>
                  <li>Unpaid balances may result in shipment holds or collection actions.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">9. Tracking and Communication</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We provide tracking services for all shipments. Tracking information is updated regularly but may experience delays. We will communicate important shipment updates via email, SMS, or phone as appropriate. The sender and recipient are responsible for monitoring tracking information and responding to delivery notifications.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">10. Cancellation and Refunds</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Shipments may be canceled before pickup for a full refund.</li>
                  <li>Once a shipment has been collected, cancellation fees may apply.</li>
                  <li>Refunds for service failures will be evaluated on a case-by-case basis.</li>
                  <li>No refunds are provided for delays caused by customs or circumstances beyond our control.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">11. Force Majeure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We shall not be liable for any failure or delay in performing our obligations due to circumstances beyond our reasonable control, including but not limited to: natural disasters, war, terrorism, strikes, government actions, epidemics, or disruptions to transportation networks.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">12. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">13. Amendments</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">14. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-secondary rounded-lg p-6 mt-4">
                  <p className="text-foreground font-semibold">Ultra Fast Cargo</p>
                  <p className="text-muted-foreground">Business Bay, Dubai, UAE</p>
                  <p className="text-muted-foreground">Email: legal@ultrafastcargo.com</p>
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

export default Terms;