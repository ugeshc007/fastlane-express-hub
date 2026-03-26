import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { generateBreadcrumbSchema, generateWebPageSchema } from "@/components/SEOHead";
import { Plane, Clock, Shield, Package, CheckCircle, ArrowRight, Globe, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import airCargoImage from "@/assets/air-cargo-service.jpg";
import expressShippingImage from "@/assets/express-shipping.jpg";
import globalNetworkImage from "@/assets/global-network.jpg";

const features = [
  { icon: <Zap className="w-8 h-8" />, title: "Express Air Freight", desc: "24-48 hour delivery for urgent shipments to any destination worldwide." },
  { icon: <Globe className="w-8 h-8" />, title: "Global Coverage", desc: "Air cargo services to 150+ countries through our partner airline network." },
  { icon: <Shield className="w-8 h-8" />, title: "Secure Handling", desc: "Temperature-controlled and high-value cargo handled with utmost care." },
  { icon: <Package className="w-8 h-8" />, title: "All Cargo Types", desc: "From documents to heavy machinery — we ship it all by air." },
];

const AirCargo = () => {
  const { isRTL } = useLanguage();

  const structuredData = [
    generateWebPageSchema({
      name: "Air Cargo Services from UAE",
      description: "Fast and reliable air freight services from Dubai and UAE to worldwide destinations. Express, standard, and charter air cargo solutions.",
      url: "/services/air-cargo",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Air Cargo", url: "/services/air-cargo" },
    ]),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Air Cargo Services from Dubai & UAE – Express Air Freight Worldwide"
        description="Fast air cargo from Dubai to worldwide destinations. Express 24-48hr delivery, secure handling, competitive rates. Get a free air freight quote today!"
        keywords="air cargo Dubai, air freight UAE, express air shipping, international air cargo, Dubai air freight, cargo by air"
        structuredData={structuredData}
        canonicalPath="/services/air-cargo"
      />
      <Navbar />

      {/* Hero */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Plane className="w-4 h-4" />
                {isRTL ? "شحن جوي سريع" : "Express Air Freight"}
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                {isRTL ? "خدمات " : ""}
                <span className="text-accent">{isRTL ? "الشحن الجوي" : "Air Cargo"}</span>
                {isRTL ? " من الإمارات" : " Services"}
              </h1>
              <p className="text-primary-foreground/90 text-lg mb-8">
                {isRTL
                  ? "شحن جوي سريع وآمن من دبي والإمارات إلى جميع أنحاء العالم. خيارات سريعة وقياسية وتشارتر."
                  : "Fast and secure air freight from Dubai and UAE to worldwide destinations. Express, standard, and charter options available."}
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
              <img src={airCargoImage} alt="Air Cargo Services" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24-48</div>
              <div className="text-muted-foreground">{isRTL ? "ساعة توصيل" : "Hours Delivery"}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">150+</div>
              <div className="text-muted-foreground">{isRTL ? "دولة" : "Countries"}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Daily</div>
              <div className="text-muted-foreground">{isRTL ? "رحلات يومية" : "Flights"}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">{isRTL ? "تتبع مباشر" : "Live Tracking"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isRTL ? "لماذا " : "Why Choose Our "}
              <span className="text-accent">{isRTL ? "الشحن الجوي معنا؟" : "Air Cargo?"}</span>
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

      {/* How It Works */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            {isRTL ? "كيف يعمل " : "How Our "}
            <span className="text-accent">{isRTL ? "الشحن الجوي" : "Air Cargo Works"}</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: isRTL ? "طلب عرض سعر" : "Request a Quote", desc: isRTL ? "أرسل تفاصيل شحنتك" : "Share your shipment details" },
              { step: "2", title: isRTL ? "الاستلام" : "Pickup", desc: isRTL ? "نستلم من موقعك" : "We collect from your location" },
              { step: "3", title: isRTL ? "الشحن" : "Ship", desc: isRTL ? "شحن جوي آمن" : "Secure air transit" },
              { step: "4", title: isRTL ? "التوصيل" : "Deliver", desc: isRTL ? "توصيل باب لباب" : "Door-to-door delivery" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {isRTL ? "هل تحتاج شحن جوي؟" : "Need Air Cargo Services?"}
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            {isRTL ? "احصل على عرض سعر مجاني اليوم" : "Get a free quote for your air freight shipment today."}
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

export default AirCargo;
