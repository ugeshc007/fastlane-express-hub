import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { 
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateFAQSchema,
} from "@/components/SEOHead";
import { 
  Truck, Plane, Ship, Clock, Shield, Package, MapPin, CheckCircle, ArrowRight, Zap
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import landTransportImage from "@/assets/land-transport-service.jpg";
import expressDeliveryImage from "@/assets/express-delivery-service.jpg";
import airCargoImage from "@/assets/air-cargo-service.jpg";

const saudiCities = [
  "Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", 
  "Khobar", "Dhahran", "Jubail", "Tabuk", "Abha"
];

const services = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Road Freight to Saudi Arabia",
    description: "Daily departures via land transport from Dubai, Abu Dhabi, and Sharjah to all major Saudi cities.",
    delivery: "2-4 Days",
    image: landTransportImage,
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Air Cargo to KSA",
    description: "Express air freight for urgent shipments to Riyadh, Jeddah, and Dammam airports.",
    delivery: "24-48 Hours",
    image: airCargoImage,
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Express Delivery",
    description: "Priority handling for time-critical shipments with guaranteed delivery times.",
    delivery: "1-2 Days",
    image: expressDeliveryImage,
  },
];

const faqs = [
  {
    question: "How long does cargo shipping from Dubai to Saudi Arabia take?",
    answer: "Road freight from Dubai to Riyadh or Jeddah takes 2-4 days. Air cargo arrives within 24-48 hours. Express delivery is available in 1-2 days for urgent shipments."
  },
  {
    question: "What is the cost of shipping cargo from Dubai to Saudi Arabia?",
    answer: "Shipping rates from Dubai to Saudi Arabia depend on weight, volume, and service type. Road freight (LTL) starts competitively for consolidated loads. Contact us for a free quote tailored to your cargo."
  },
  {
    question: "Can you ship from Dubai to Riyadh, Jeddah, and Dammam?",
    answer: "Yes, we have daily departures from Dubai to all major Saudi cities including Riyadh, Jeddah, Dammam, Khobar, Mecca, Medina, and more remote areas across the Kingdom."
  },
  {
    question: "Do you provide door-to-door cargo delivery to Saudi Arabia?",
    answer: "Yes, we offer complete door-to-door service from your UAE address to any location in Saudi Arabia, including pickup, customs clearance, transit, and final-mile delivery."
  },
  {
    question: "What documents are needed for UAE to Saudi cargo?",
    answer: "You need a commercial invoice, packing list, certificate of origin, and depending on goods type, additional permits. We handle all customs documentation for you."
  },
  {
    question: "Do you handle customs clearance for Saudi Arabia?",
    answer: "Yes, our team manages complete customs clearance including documentation, duties calculation, and coordination with Saudi customs authorities to ensure smooth, delay-free delivery."
  },
];

const UaeToSaudi = () => {
  const { t } = useLanguage();

  const structuredData = [
    generateWebPageSchema({
      name: "Cargo Shipping from UAE to Saudi Arabia",
      description: "Fast and reliable cargo shipping from UAE to Saudi Arabia. Road freight, air cargo, and express delivery to Riyadh, Jeddah, Dammam and all KSA cities.",
      url: "/services/uae-to-saudi",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "UAE to Saudi Arabia", url: "/services/uae-to-saudi" },
    ]),
    generateFAQSchema(faqs),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "UAE to Saudi Arabia Cargo Shipping",
      description: "Professional cargo and logistics services from United Arab Emirates to Saudi Arabia including road freight, air cargo, and express delivery.",
      provider: {
        "@type": "Organization",
        name: "Ultra Fast Cargo",
        url: "https://ultrafastcargo.com",
      },
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
      ],
      serviceType: "Cargo Shipping",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Dubai to Saudi Arabia Cargo Service - Road Freight & Air Cargo to Riyadh, Jeddah"
        description="Fast cargo from Dubai to Saudi Arabia in 1-4 days. Daily road freight & air cargo to Riyadh, Jeddah, Dammam, Mecca. Full customs clearance. Get free quote now!"
        keywords="Dubai to Saudi Arabia cargo, Dubai to Riyadh shipping, cargo to Jeddah, Dubai Saudi freight, Dubai to Dammam delivery, cargo KSA, shipping from UAE to Saudi, UAE Saudi cargo company"
        structuredData={structuredData}
        canonicalPath="/services/uae-to-saudi"
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Dubai → Saudi Arabia Cargo Route
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Dubai to <span className="text-accent">Saudi Arabia Cargo Service</span>
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Trusted cargo shipping from Dubai to Riyadh, Jeddah, Dammam & all KSA cities. Daily road freight, air cargo, and door-to-door express delivery with full customs clearance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/quote">{t("hero.getQuote")}</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">{t("nav.contact")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Key Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">1-4</div>
              <div className="text-muted-foreground">Days Delivery</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Saudi Cities</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Daily</div>
              <div className="text-muted-foreground">Departures</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Customs Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shipping Services to <span className="text-accent">Saudi Arabia</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the service that fits your timeline and budget for UAE to KSA shipments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article key={index} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-accent font-semibold">
                    <Clock className="w-4 h-4" />
                    {service.delivery}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Covered */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              We Deliver to All Major <span className="text-accent">Saudi Cities</span>
            </h2>
            <p className="text-muted-foreground">Door-to-door delivery across the Kingdom of Saudi Arabia</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {saudiCities.map((city) => (
              <span 
                key={city}
                className="bg-card px-5 py-2.5 rounded-full border border-border text-foreground font-medium hover:border-accent transition-colors"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Ship with <span className="text-accent">Ultra Fast Cargo</span> to Saudi Arabia?
              </h2>
              <div className="space-y-4">
                {[
                  "Daily departures from Dubai, Abu Dhabi, and Sharjah",
                  "Complete customs clearance and documentation",
                  "Real-time tracking and delivery updates",
                  "Competitive rates for FCL, LTL, and express",
                  "Experienced team handling Saudi regulations",
                  "24/7 customer support in English and Arabic",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="accent" size="lg" className="mt-8" asChild>
                <Link to="/quote" className="flex items-center gap-2">
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <Shield className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Fully Insured</h3>
                <p className="text-sm text-muted-foreground">All shipments covered</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <Package className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">All Cargo Types</h3>
                <p className="text-sm text-muted-foreground">Commercial & personal</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <Clock className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Fast Transit</h3>
                <p className="text-sm text-muted-foreground">As quick as 24 hours</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <MapPin className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Door-to-Door</h3>
                <p className="text-sm text-muted-foreground">Complete service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions: <span className="text-accent">UAE to Saudi Shipping</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <article key={index} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Ship to Saudi Arabia?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Get a free quote for your UAE to Saudi Arabia shipment today. Fast, reliable, and hassle-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote">{t("hero.getQuote")}</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">{t("nav.contact")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default UaeToSaudi;
