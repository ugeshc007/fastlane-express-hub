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
  Truck, Plane, Clock, Shield, Package, MapPin, CheckCircle, ArrowRight, Zap
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import landTransportImage from "@/assets/land-transport-service.jpg";
import expressDeliveryImage from "@/assets/express-delivery-service.jpg";
import airCargoImage from "@/assets/air-cargo-service.jpg";

const qatarCities = [
  "Doha", "Al Wakrah", "Al Khor", "Lusail", "Dukhan", 
  "Mesaieed", "Al Rayyan", "Umm Salal"
];

const services = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Road Freight to Qatar",
    description: "Regular land transport from UAE to Doha and all Qatar cities via Saudi Arabia transit route.",
    delivery: "3-5 Days",
    image: landTransportImage,
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Air Cargo to Doha",
    description: "Express air freight to Hamad International Airport for urgent and time-critical shipments.",
    delivery: "24-48 Hours",
    image: airCargoImage,
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Express Delivery",
    description: "Priority handling with guaranteed delivery times for business-critical cargo.",
    delivery: "1-3 Days",
    image: expressDeliveryImage,
  },
];

const faqs = [
  {
    question: "How long does shipping from UAE to Qatar take?",
    answer: "Air cargo reaches Doha within 24-48 hours. Road freight via Saudi Arabia takes 3-5 days depending on customs clearance times at both borders."
  },
  {
    question: "What is the best way to ship from Dubai to Doha?",
    answer: "For urgent shipments, air cargo is fastest. For cost-effective regular shipments, road freight offers excellent value with reliable transit times."
  },
  {
    question: "Do you handle customs clearance for Qatar?",
    answer: "Yes, we provide complete customs clearance services at both UAE exit and Qatar entry points, including all documentation and duties handling."
  },
  {
    question: "Can you deliver to Qatar Free Zones?",
    answer: "Yes, we deliver to all Qatar Free Zones including Qatar Free Zones Authority areas, with specialized documentation handling."
  },
  {
    question: "What goods can I ship from UAE to Qatar?",
    answer: "We ship commercial goods, personal effects, industrial equipment, spare parts, electronics, textiles, and more. Some restricted items require special permits."
  },
];

const UaeToQatar = () => {
  const { t } = useLanguage();

  const structuredData = [
    generateWebPageSchema({
      name: "Cargo Shipping from UAE to Qatar",
      description: "Reliable cargo shipping from UAE to Qatar. Road freight and air cargo to Doha, Al Wakrah, Lusail and all Qatar cities.",
      url: "/services/uae-to-qatar",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "UAE to Qatar", url: "/services/uae-to-qatar" },
    ]),
    generateFAQSchema(faqs),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "UAE to Qatar Cargo Shipping",
      description: "Professional cargo and logistics services from United Arab Emirates to Qatar including road freight, air cargo, and express delivery.",
      provider: {
        "@type": "Organization",
        name: "Ultra Fast Cargo",
        url: "https://ultrafastcargo.com",
      },
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Qatar" },
      ],
      serviceType: "Cargo Shipping",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="UAE to Qatar Cargo Shipping - Fast Delivery to Doha"
        description="Ship cargo from UAE to Qatar in 1-5 days. Road freight & air cargo to Doha, Al Wakrah, Lusail. Customs clearance included. Get free quote today!"
        keywords="UAE to Qatar cargo, Dubai to Doha shipping, cargo to Qatar, UAE Qatar freight, Dubai Doha delivery, shipping Qatar"
        structuredData={structuredData}
        canonicalPath="/services/uae-to-qatar"
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              UAE → Qatar Route
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Cargo Shipping from <span className="text-accent">UAE to Qatar</span>
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Reliable cargo delivery from Dubai, Abu Dhabi & Sharjah to Doha and all cities across Qatar. Air freight and road transport options available.
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
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">1-5</div>
              <div className="text-muted-foreground">Days Delivery</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">8+</div>
              <div className="text-muted-foreground">Qatar Cities</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Weekly</div>
              <div className="text-muted-foreground">Scheduled Runs</div>
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
              Shipping Services to <span className="text-accent">Qatar</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the right shipping option for your UAE to Qatar cargo needs.
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
              We Deliver to All <span className="text-accent">Qatar Destinations</span>
            </h2>
            <p className="text-muted-foreground">Door-to-door delivery across the State of Qatar</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {qatarCities.map((city) => (
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
                Why Choose <span className="text-accent">Ultra Fast Cargo</span> for Qatar Shipping?
              </h2>
              <div className="space-y-4">
                {[
                  "Regular scheduled departures to Doha",
                  "Efficient Saudi transit corridor handling",
                  "Complete customs clearance at all border points",
                  "Real-time tracking and status updates",
                  "Competitive rates for all cargo sizes",
                  "Dedicated support for Qatar Free Zone deliveries",
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
                <p className="text-sm text-muted-foreground">Complete coverage</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <Package className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">All Cargo Types</h3>
                <p className="text-sm text-muted-foreground">Commercial & personal</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <Clock className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Fast Transit</h3>
                <p className="text-sm text-muted-foreground">Air & road options</p>
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
            Frequently Asked Questions: <span className="text-accent">UAE to Qatar Shipping</span>
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
            Ready to Ship to Qatar?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Get a free quote for your UAE to Qatar shipment today. Reliable service with full customs support.
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

export default UaeToQatar;
