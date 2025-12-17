import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
  Plane, Ship, Truck, Zap, ArrowRight, CheckCircle
} from "lucide-react";

const services = [
  {
    id: "air-cargo",
    icon: <Plane className="w-10 h-10" />,
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
    icon: <Ship className="w-10 h-10" />,
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
    icon: <Truck className="w-10 h-10" />,
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
    icon: <Zap className="w-10 h-10" />,
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

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Comprehensive cargo and logistics solutions tailored to your needs. From express deliveries to large-scale freight operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
                    {service.icon}
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                    Delivery: {service.deliveryTime}
                  </div>
                  <Button variant="accent" size="lg" asChild>
                    <Link to={service.link} className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
                <div className={`bg-card rounded-2xl p-8 border border-border ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-6">Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Contact us today and our logistics experts will create a tailored shipping solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote" className="flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
