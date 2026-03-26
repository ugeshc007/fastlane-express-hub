import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { generateBreadcrumbSchema, generateWebPageSchema } from "@/components/SEOHead";
import { Zap, Clock, Shield, Package, CheckCircle, ArrowRight, Truck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import expressImage from "@/assets/express-delivery-service.jpg";
import fastDeliveryImage from "@/assets/fast-delivery.jpg";

const features = [
  { icon: <Zap className="w-8 h-8" />, title: "Same-Day Delivery", desc: "Urgent shipments delivered within hours across UAE and to neighboring countries." },
  { icon: <Clock className="w-8 h-8" />, title: "Next-Day to GCC", desc: "Guaranteed next-day delivery to Saudi Arabia, Qatar, Oman, Bahrain, and Kuwait." },
  { icon: <Shield className="w-8 h-8" />, title: "Priority Handling", desc: "Your cargo gets priority loading, customs clearance, and dedicated tracking." },
  { icon: <Truck className="w-8 h-8" />, title: "Dedicated Vehicles", desc: "Exclusive vehicle assignment for time-critical and high-value shipments." },
];

const ExpressDelivery = () => {
  const { isRTL } = useLanguage();

  const structuredData = [
    generateWebPageSchema({
      name: "Express Delivery & Same-Day Cargo from UAE",
      description: "Same-day and next-day express delivery from Dubai and UAE. Priority handling, dedicated vehicles, guaranteed delivery times.",
      url: "/services/express-delivery",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Express Delivery", url: "/services/express-delivery" },
    ]),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Express Delivery & Same-Day Cargo from Dubai – Urgent Shipping"
        description="Same-day and next-day express cargo from Dubai. Priority handling, dedicated vehicles, guaranteed delivery to GCC. Get your express quote now!"
        keywords="express delivery Dubai, same day cargo, urgent shipping UAE, next day delivery GCC, express freight, fast cargo Dubai"
        structuredData={structuredData}
        canonicalPath="/services/express-delivery"
      />
      <Navbar />

      {/* Hero */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                {isRTL ? "توصيل سريع" : "Express Shipping"}
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                <span className="text-accent">{isRTL ? "التوصيل السريع" : "Express Delivery"}</span>
                {isRTL ? " من الإمارات" : " Services"}
              </h1>
              <p className="text-primary-foreground/90 text-lg mb-8">
                {isRTL
                  ? "توصيل في نفس اليوم واليوم التالي من دبي. أولوية في المناولة، مركبات مخصصة، وتوقيت مضمون."
                  : "Same-day and next-day delivery from Dubai. Priority handling, dedicated vehicles, and guaranteed delivery times across UAE and GCC."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/quote">{isRTL ? "احصل على عرض سعر" : "Get Express Quote"}</Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/contact">{isRTL ? "اتصل بنا" : "Contact Us"}</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={expressImage} alt="Express Delivery Services" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">4hrs</div>
              <div className="text-muted-foreground">{isRTL ? "داخل الإمارات" : "Within UAE"}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24hrs</div>
              <div className="text-muted-foreground">{isRTL ? "إلى دول الخليج" : "To GCC"}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">{isRTL ? "متاح دائماً" : "Available"}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">{isRTL ? "ضمان التوصيل" : "Guaranteed"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isRTL ? "لماذا التوصيل " : "Why Choose "}
              <span className="text-accent">{isRTL ? "السريع معنا؟" : "Express?"}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                  {f.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to use */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            {isRTL ? "متى تحتاج " : "When You Need "}
            <span className="text-accent">{isRTL ? "التوصيل السريع" : "Express Delivery"}</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              isRTL ? "قطع غيار عاجلة للمصانع والمعدات" : "Urgent spare parts for factories and equipment",
              isRTL ? "مستندات ووثائق حساسة للوقت" : "Time-sensitive documents and contracts",
              isRTL ? "عينات تجارية لمعارض ومؤتمرات" : "Commercial samples for exhibitions and trade shows",
              isRTL ? "منتجات طبية وأدوية" : "Medical supplies and pharmaceuticals",
              isRTL ? "شحنات تجارة إلكترونية مستعجلة" : "Urgent e-commerce shipments",
              isRTL ? "أي شحنة تحتاج توصيل فوري" : "Any shipment requiring immediate delivery",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {isRTL ? "شحنتك عاجلة؟" : "Urgent Shipment?"}
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            {isRTL ? "اتصل الآن واحصل على عرض سعر فوري للتوصيل السريع" : "Call now or get an instant express delivery quote. We're available 24/7."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote">{isRTL ? "عرض سعر فوري" : "Get Express Quote"}</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+971551417563">{isRTL ? "اتصل الآن" : "Call Now"}</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ExpressDelivery;
