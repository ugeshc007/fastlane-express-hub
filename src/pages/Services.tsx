import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { 
  generateServiceSchema, 
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateFAQSchema,
} from "@/components/SEOHead";
import { 
  Plane, Ship, Truck, Zap, ArrowRight, CheckCircle
} from "lucide-react";

const services = [
  {
    id: "air-cargo",
    icon: <Plane className="w-10 h-10" aria-hidden="true" />,
    title: "Air Cargo",
    description: "Fast and secure air freight services worldwide. Perfect for time-sensitive shipments and high-value goods.",
    features: [
      "Express air freight for urgent shipments",
      "Door-to-door delivery service",
      "Real-time tracking and updates",
      "Customs clearance assistance",
      "Temperature-controlled options",
      "Dangerous goods handling",
    ],
    deliveryTime: "1-5 Days",
    link: "/services/air-cargo",
  },
  {
    id: "sea-cargo",
    icon: <Ship className="w-10 h-10" aria-hidden="true" />,
    title: "Sea Cargo",
    description: "Cost-effective ocean freight for large shipments. FCL and LCL options available for all cargo types.",
    features: [
      "Full Container Load (FCL)",
      "Less Container Load (LCL)",
      "Competitive shipping rates",
      "Global port coverage",
      "Break-bulk cargo handling",
      "Project cargo solutions",
    ],
    deliveryTime: "15-45 Days",
    link: "/services/sea-cargo",
  },
  {
    id: "land-transport",
    icon: <Truck className="w-10 h-10" aria-hidden="true" />,
    title: "Land Transport",
    description: "Reliable road freight across UAE and GCC. Door-to-door delivery with real-time tracking.",
    features: [
      "Full Truck Load (FTL)",
      "Less Truck Load (LTL)",
      "Cross-border transportation",
      "Same-day local delivery",
      "Refrigerated transport",
      "Heavy equipment transport",
    ],
    deliveryTime: "1-7 Days",
    link: "/services/land-transport",
  },
  {
    id: "express-delivery",
    icon: <Zap className="w-10 h-10" aria-hidden="true" />,
    title: "Express Delivery",
    description: "Same-day and next-day delivery options. When every minute counts, we deliver.",
    features: [
      "Same-day delivery within UAE",
      "Next-day delivery to GCC",
      "Priority handling & processing",
      "24/7 pickup service",
      "SMS & email notifications",
      "Proof of delivery",
    ],
    deliveryTime: "Same Day - 24 Hours",
    link: "/services/express-delivery",
  },
];

const serviceFAQs = [
  {
    question: "What is the difference between FCL and LCL shipping?",
    answer: "FCL (Full Container Load) means you rent the entire container. LCL (Less Container Load) means your cargo shares container space, which is more cost-effective for smaller volumes."
  },
  {
    question: "How fast is express delivery from Dubai?",
    answer: "Our express delivery offers same-day within UAE and next-day to GCC. International express takes 1-5 business days."
  },
  {
    question: "Does Ultra Fast Cargo handle dangerous goods?",
    answer: "Yes, we are certified to handle dangerous goods (DG) shipments via air cargo with special handling and documentation."
  },
];

const Services = () => {
  const structuredData = [
    generateWebPageSchema({
      name: "Shipping Services - Air, Sea, Land & Express",
      description: "Comprehensive cargo shipping services from UAE including air freight, sea cargo, land transport and express delivery.",
      url: "/services",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
    ]),
    generateServiceSchema(services.map(s => ({ name: s.title, description: s.description, url: s.link }))),
    generateFAQSchema(serviceFAQs),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cargo Shipping Services - Air, Sea, Land & Express Delivery"
        description="Ultra Fast Cargo offers air freight, sea cargo, land transport & express delivery from UAE to GCC, India, Pakistan & worldwide. FCL, LCL, same-day options."
        keywords="air cargo UAE, sea freight Dubai, land transport GCC, express delivery, FCL LCL shipping"
        structuredData={structuredData}
      />
      <Navbar />
      
      <header className="relative pt-32 pb-20 bg-primary overflow-hidden" role="banner">
        <div className="absolute inset-0 bg-hero-pattern" aria-hidden="true" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our <span className="text-accent">Shipping Services</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Comprehensive cargo and logistics solutions tailored to your needs.
            </p>
          </div>
        </div>
      </header>

      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <article key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center`} itemScope itemType="https://schema.org/Service">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">{service.icon}</div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4" itemProp="name">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6" itemProp="description">{service.description}</p>
                  <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                    Delivery: <time>{service.deliveryTime}</time>
                  </div>
                  <Button variant="accent" size="lg" asChild>
                    <Link to={service.link} className="flex items-center gap-2">Learn More<ArrowRight className="w-5 h-5" /></Link>
                  </Button>
                </div>
                <aside className={`bg-card rounded-2xl p-8 border border-border ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-6">Key Features</h3>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              </article>
            ))}
          </div>
        </div>
      </main>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {serviceFAQs.map((faq, index) => (
              <article key={index} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Need a Custom Solution?</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">Contact us for a tailored shipping solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild><Link to="/quote">Get Free Quote</Link></Button>
            <Button variant="heroOutline" size="xl" asChild><Link to="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
