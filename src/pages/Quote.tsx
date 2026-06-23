import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, Phone, CheckCircle, Clock, ShieldCheck, Zap } from "lucide-react";
import { trackWhatsApp, trackPhone } from "@/lib/tracking";

const WHATSAPP_NUMBER = "971551417563";
const PHONE_NUMBER = "971551417563";

const Quote = () => {
  const { t, isRTL } = useLanguage();

  const prefilled = isRTL
    ? "مرحباً، أود الحصول على عرض سعر للشحن. تفاصيل الشحنة:\n• المنشأ:\n• الوجهة:\n• نوع الخدمة (جوي/بحري/بري/سريع):\n• الوزن/الأبعاد:\n• نوع البضاعة:"
    : "Hello, I'd like to request a shipping quote. Shipment details:\n• Origin:\n• Destination:\n• Service Type (Air/Sea/Land/Express):\n• Weight/Dimensions:\n• Cargo Type:";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prefilled)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {isRTL ? (
                <>احصل على <span className="text-accent">عرض سعر فوري</span></>
              ) : (
                <>Get an <span className="text-accent">Instant Quote</span></>
              )}
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              {isRTL
                ? "تواصل معنا مباشرة عبر واتساب للحصول على أسرع رد وأفضل الأسعار."
                : "Chat with us directly on WhatsApp for the fastest reply and best rates."}
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm text-center">
              <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-[#25D366]" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                {isRTL ? "تحدث معنا على واتساب" : "Talk to us on WhatsApp"}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {isRTL
                  ? "شارك تفاصيل شحنتك مباشرة مع فريقنا واحصل على عرض سعر مخصص خلال دقائق."
                  : "Share your shipment details directly with our team and receive a customized quote within minutes."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button variant="whatsapp" size="xl" asChild>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsApp("Quote Page CTA")}
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {isRTL ? "ابدأ المحادثة على واتساب" : "Chat on WhatsApp"}
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a
                    href={`tel:+${PHONE_NUMBER}`}
                    onClick={() => trackPhone("Quote Page CTA")}
                    className="flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    {isRTL ? "اتصل بنا" : "Call Us"}
                  </a>
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 text-start">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/40">
                  <Zap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {isRTL ? "رد سريع" : "Fast Response"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {isRTL ? "خلال دقائق" : "Within minutes"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/40">
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {isRTL ? "بدون رسوم خفية" : "No Hidden Fees"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {isRTL ? "أسعار شفافة" : "Transparent pricing"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/40">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {isRTL ? "متاحون 24/7" : "Available 24/7"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {isRTL ? "دعم مستمر" : "Always here to help"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  {isRTL ? "جميع الوجهات حول العالم" : "All worldwide destinations"}
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  {isRTL ? "جوي • بحري • بري • سريع" : "Air • Sea • Land • Express"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Quote;
