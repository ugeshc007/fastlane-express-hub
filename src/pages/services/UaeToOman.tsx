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

const omanCities = [
  "Muscat", "Salalah", "Sohar", "Nizwa", "Sur", 
  "Ibri", "Seeb", "Barka", "Rustaq", "Khasab"
];

const services = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Road Freight to Oman",
    description: "Daily land transport from Dubai and Abu Dhabi to Muscat, Sohar, and all Oman cities via direct border crossing.",
    delivery: "1-3 Days",
    image: landTransportImage,
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Air Cargo to Muscat",
    description: "Express air freight to Muscat International Airport for urgent and high-value shipments.",
    delivery: "Same Day - 24 Hours",
    image: airCargoImage,
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Express Delivery",
    description: "Same-day and next-day delivery options for time-critical cargo to Oman.",
    delivery: "Same Day - 48 Hours",
    image: expressDeliveryImage,
  },
];

const faqs = [
  {
    question: "How long does shipping from UAE to Oman take?",
    answer: "Road freight from Dubai to Muscat typically takes 1-2 days. Air cargo arrives same day or within 24 hours. Salalah and southern regions may take 2-3 days by road."
  },
  {
    question: "What is the fastest way to ship from Dubai to Muscat?",
    answer: "Air cargo is the fastest option, with same-day delivery possible for shipments booked before noon. Express road freight takes about 8-12 hours."
  },
  {
    question: "Do you deliver to Salalah from UAE?",
    answer: "Yes, we provide regular scheduled services to Salalah and all southern Oman cities. Road freight takes 2-3 days, while air cargo arrives within 24-48 hours."
  },
  {
    question: "What documents are needed for UAE to Oman shipping?",
    answer: "Commercial shipments require a commercial invoice, packing list, and certificate of origin. Personal effects need an ID copy. We handle all customs documentation."
  },
  {
    question: "Can you ship cars and vehicles to Oman?",
    answer: "Yes, we provide vehicle transport services from UAE to Oman including cars, motorcycles, and heavy equipment with proper transit documentation."
  },
];

const UaeToOman = () => {
  const { t } = useLanguage();

  const structuredData = [
    generateWebPageSchema({
      name: "Cargo Shipping from UAE to Oman",
      description: "Fast cargo shipping from UAE to Oman. Same-day delivery to Muscat, road freight to Sohar, Salalah and all Oman cities.",
      url: "/services/uae-to-oman",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "UAE to Oman", url: "/services/uae-to-oman" },
    ]),
    generateFAQSchema(faqs),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "UAE to Oman Cargo Shipping",
      description: "Professional cargo and logistics services from United Arab Emirates to Oman including road freight, air cargo, and same-day express delivery.",
      provider: {
        "@type": "Organization",
        name: "Ultra Fast Cargo",
        url: "https://ultrafastcargo.com",
      },
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Oman" },
      ],
      serviceType: "Cargo Shipping",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="UAE to Oman Cargo Shipping - Same Day Delivery to Muscat"
        description="Ship cargo from UAE to Oman in 1-3 days. Same-day delivery to Muscat, road freight to Sohar, Salalah. Customs clearance included. Get free quote!"
        keywords="UAE to Oman cargo, Dubai to Muscat shipping, cargo to Oman, UAE Oman freight, Dubai Salalah delivery, shipping Oman"
        structuredData={structuredData}
        canonicalPath="/services/uae-to-oman"
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              UAE → Oman Route
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Cargo Shipping from <span className="text-accent">UAE to Oman</span>
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Fast and reliable cargo delivery from Dubai, Abu Dhabi & Sharjah to Muscat, Sohar, Salalah and all cities across the Sultanate of Oman.
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
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">1-3</div>
              <div className="text-muted-foreground">Days Delivery</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Oman Cities</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Daily</div>
              <div className="text-muted-foreground">Departures</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Same Day</div>
              <div className="text-muted-foreground">Express Option</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shipping Services to <span className="text-accent">Oman</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Multiple shipping options for your UAE to Oman cargo needs.
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
              We Deliver to All <span className="text-accent">Oman Destinations</span>
            </h2>
            <p className="text-muted-foreground">Door-to-door delivery across the Sultanate of Oman</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {omanCities.map((city) => (
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
                Why Choose <span className="text-accent">Ultra Fast Cargo</span> for Oman Shipping?
              </h2>
              <div className="space-y-4">
                {[
                  "Daily departures from all UAE emirates to Oman",
                  "Same-day delivery available to Muscat",
                  "Direct border crossing with fast customs clearance",
                  "Real-time tracking and delivery notifications",
                  "Competitive rates for all shipment sizes",
                  "Vehicle and heavy equipment transport capability",
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
                <p className="text-sm text-muted-foreground">Including vehicles</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <Clock className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Same-Day Option</h3>
                <p className="text-sm text-muted-foreground">To Muscat area</p>
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
            Frequently Asked Questions: <span className="text-accent">UAE to Oman Shipping</span>
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
            Ready to Ship to Oman?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Get a free quote for your UAE to Oman shipment today. Fast, reliable, door-to-door service.
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

export default UaeToOman;
