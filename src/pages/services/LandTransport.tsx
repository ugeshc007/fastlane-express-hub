import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { generateBreadcrumbSchema, generateWebPageSchema } from "@/components/SEOHead";
import { Truck, Clock, Shield, MapPin, CheckCircle, ArrowRight, Package } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import landTransportImage from "@/assets/land-transport-service.jpg";

const routes = [
  "UAE to Saudi Arabia", "UAE to Qatar", "UAE to Oman", "UAE to Bahrain", "UAE to Kuwait",
  "Dubai to Riyadh", "Dubai to Doha", "Dubai to Muscat", "Abu Dhabi to Jeddah",
];

const features = [
  { icon: <Truck className="w-8 h-8" />, title: "Daily Departures", desc: "Scheduled road freight across GCC with daily departures from all UAE emirates." },
  { icon: <MapPin className="w-8 h-8" />, title: "Door-to-Door", desc: "Complete pickup and delivery service from your doorstep to the destination." },
  { icon: <Shield className="w-8 h-8" />, title: "GPS Tracked", desc: "Real-time GPS tracking on all trucks for complete visibility of your cargo." },
  { icon: <Package className="w-8 h-8" />, title: "FTL & LTL", desc: "Full truck load and part load options to match your shipment size and budget." },
];

const LandTransport = () => {
  const { isRTL } = useLanguage();

  const structuredData = [
    generateWebPageSchema({
      name: "Land Transport & Road Freight from UAE",
      description: "Reliable road freight and land transport services across UAE and GCC. Daily departures, door-to-door delivery, GPS tracking.",
      url: "/services/land-transport",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Land Transport", url: "/services/land-transport" },
    ]),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Land Transport & Road Freight from UAE – GCC Trucking Services"
        description="Reliable road freight across UAE and GCC. Daily departures to Saudi, Qatar, Oman, Bahrain, Kuwait. FTL, LTL with GPS tracking. Get a free quote!"
        keywords="land transport UAE, road freight Dubai, trucking GCC, cargo by road, Dubai trucking, UAE road freight, GCC logistics"
        structuredData={structuredData}
        canonicalPath="/services/land-transport"
      />
      <Navbar />

      {/* Hero */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Truck className="w-4 h-4" />
                {isRTL ? "نقل بري موثوق" : "Reliable Road Freight"}
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                <span className="text-accent">{isRTL ? "النقل البري" : "Land Transport"}</span>
                {isRTL ? " عبر الخليج" : " & Road Freight"}
              </h1>
              <p className="text-primary-foreground/90 text-lg mb-8">
                {isRTL
                  ? "خدمات نقل بري يومية من الإمارات إلى جميع دول الخليج. توصيل باب لباب مع تتبع GPS."
                  : "Daily road freight from UAE to all GCC countries. Door-to-door delivery with GPS tracking, FTL and LTL options."}
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
              <img src={landTransportImage} alt="Land Transport Services" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">1-4</div>
              <div className="text-muted-foreground">{isRTL ? "أيام توصيل" : "Days Delivery"}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">6</div>
              <div className="text-muted-foreground">{isRTL ? "دول الخليج" : "GCC Countries"}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Daily</div>
              <div className="text-muted-foreground">{isRTL ? "رحلات يومية" : "Departures"}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">GPS</div>
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
              {isRTL ? "مزايا " : "Our "}
              <span className="text-accent">{isRTL ? "النقل البري" : "Land Transport Advantages"}</span>
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

      {/* Routes */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-10">
            {isRTL ? "مساراتنا " : "Our "}
            <span className="text-accent">{isRTL ? "البرية" : "Road Freight Routes"}</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {routes.map((route) => (
              <span key={route} className="bg-card px-5 py-2.5 rounded-full border border-border text-foreground font-medium hover:border-accent transition-colors">
                {route}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {isRTL ? "هل تحتاج نقل بري؟" : "Need Road Freight Services?"}
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            {isRTL ? "احصل على عرض سعر مجاني للنقل البري اليوم" : "Get a free quote for your land transport shipment today."}
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

export default LandTransport;
