import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { trackFormSubmit } from "@/lib/tracking";

const ThankYou = () => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    // Fire conversion event when thank you page loads
    trackFormSubmit("Thank You Page View");

    // Also push to dataLayer for GTM
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "conversion_event_engagement",
        event_category: "form_submit",
        event_label: "Thank You Page",
        value: 1,
        currency: "AED",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              {isRTL ? "شكراً لك!" : "Thank You!"}
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              {isRTL
                ? "تم إرسال طلبك بنجاح. سيتواصل معك فريقنا في أقرب وقت ممكن."
                : "Your request has been submitted successfully. Our team will get back to you as soon as possible."}
            </p>

            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                {isRTL ? "ماذا بعد؟" : "What happens next?"}
              </h2>
              <div className="space-y-4 text-start">
                {[
                  isRTL ? "سيراجع فريقنا طلبك خلال 30 دقيقة" : "Our team will review your request within 30 minutes",
                  isRTL ? "ستحصل على عرض سعر مخصص" : "You'll receive a customized quote",
                  isRTL ? "سنرتب الاستلام والشحن" : "We'll arrange pickup and shipping",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <a href="https://wa.me/971568962512" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  {isRTL ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+971551417563" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {isRTL ? "اتصل بنا" : "Call Us"}
                </a>
              </Button>
            </div>

            <div className="mt-8">
              <Link to="/" className="text-accent hover:underline inline-flex items-center gap-1">
                {isRTL ? "العودة للرئيسية" : "Back to Home"} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ThankYou;
