import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { generateBreadcrumbSchema, generateWebPageSchema } from "@/components/SEOHead";
import { Ship, Clock, Shield, Package, Globe, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import seaCargoImage from "@/assets/sea-cargo-service.jpg";

const features = [
  { icon: <Ship className="w-8 h-8" />, title: "FCL & LCL Shipping", desc: "Full container load and less-than-container load options for all cargo sizes." },
  { icon: <Globe className="w-8 h-8" />, title: "Global Routes", desc: "Sea freight to major ports across Asia, Europe, Africa, and the Americas." },
  { icon: <Shield className="w-8 h-8" />, title: "Cargo Insurance", desc: "Comprehensive marine insurance covering your goods from port to port." },
  { icon: <Package className="w-8 h-8" />, title: "Heavy & Bulk Cargo", desc: "Specialized handling for oversized, heavy, and project cargo shipments." },
];

const SeaCargo = () => {
  const { isRTL } = useLanguage();

  const structuredData = [
    generateWebPageSchema({
      name: "Sea Cargo & Ocean Freight from UAE",
      description: "Cost-effective sea freight services from Dubai and UAE. FCL, LCL shipping to worldwide ports with full customs support.",
      url: "/services/sea-cargo",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Sea Cargo", url: "/services/sea-cargo" },
    ]),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Sea Cargo & Ocean Freight from Dubai – FCL & LCL Shipping"
        description="Affordable sea freight from Dubai & UAE to worldwide ports. FCL, LCL, bulk cargo. Full customs clearance. Get your ocean freight quote now!"
        keywords="sea cargo Dubai, ocean freight UAE, FCL shipping, LCL shipping, sea freight, Dubai port shipping, container shipping"
        structuredData={structuredData}
        canonicalPath="/services/sea-cargo"
      />
      <Navbar />

      {/* Hero */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Ship className="w-4 h-4" />
                {isRTL ? "شحن بحري موثوق" : "Reliable Ocean Freight"}
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                <span className="text-accent">{isRTL ? "الشحن البحري" : "Sea Cargo"}</span>
                {isRTL ? " من الإمارات" : " Services"}
              </h1>
              <p className="text-primary-foreground/90 text-lg mb-8">
                {isRTL
                  ? "حلول شحن بحري اقتصادية من دبي إلى جميع الموانئ العالمية. حاويات كاملة وجزئية."
                  : "Cost-effective ocean freight from Dubai to worldwide ports. FCL and LCL options with full customs support and door-to-port delivery."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/quote">{isRTL ? "احصل على عرض سعر" : "Get Free Quote"}</Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/contact">{isRTL ? "اتصل بنا" : "Contact Us"}</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={seaCargoImage} alt="Sea Cargo Services" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">7-21</div>
              <div className="text-muted-foreground">{isRTL ? "يوم توصيل" : "Days Transit"}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">{isRTL ? "ميناء" : "Ports"}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">FCL/LCL</div>
              <div className="text-muted-foreground">{isRTL ? "خيارات مرنة" : "Flexible Options"}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">{isRTL ? "تخليص جمركي" : "Customs Support"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isRTL ? "خدمات " : "Our "}
              <span className="text-accent">{isRTL ? "الشحن البحري" : "Sea Freight Services"}</span>
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

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {isRTL ? "هل تحتاج شحن بحري؟" : "Need Sea Freight Services?"}
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            {isRTL ? "احصل على عرض سعر مجاني للشحن البحري اليوم" : "Get a free ocean freight quote for your shipment today."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote">{isRTL ? "احصل على عرض سعر" : "Get Free Quote"}</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">{isRTL ? "اتصل بنا" : "Contact Us"}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SeaCargo;
