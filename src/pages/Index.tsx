import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrackingBox from "@/components/TrackingBox";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import { 
  Plane, Ship, Truck, Zap, Shield, Globe, Clock, 
  Award, Users, ArrowRight, CheckCircle 
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-hero-pattern" />
        
        {/* Animated background elements */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Fast & Reliable Shipping
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Ultra Fast Cargo – <br />
                <span className="text-accent">Delivering Speed</span><br />
                Without Compromise
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
                Your trusted partner for international cargo solutions. From Dubai to the world – Air, Sea, and Land freight services with unmatched reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/quote" className="flex items-center gap-2">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/10">
                <div>
                  <p className="text-3xl font-heading font-bold text-accent">15+</p>
                  <p className="text-primary-foreground/60 text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-heading font-bold text-accent">50K+</p>
                  <p className="text-primary-foreground/60 text-sm">Shipments/Year</p>
                </div>
                <div>
                  <p className="text-3xl font-heading font-bold text-accent">150+</p>
                  <p className="text-primary-foreground/60 text-sm">Countries</p>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <TrackingBox />
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Cargo Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive shipping solutions tailored to your needs. From urgent express deliveries to large-scale freight operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Plane className="w-7 h-7" />}
              title="Air Cargo"
              description="Fast and secure air freight services worldwide. Perfect for time-sensitive shipments and high-value goods."
            />
            <ServiceCard
              icon={<Ship className="w-7 h-7" />}
              title="Sea Cargo"
              description="Cost-effective ocean freight for large shipments. FCL and LCL options available for all cargo types."
            />
            <ServiceCard
              icon={<Truck className="w-7 h-7" />}
              title="Land Transport"
              description="Reliable road freight across UAE and GCC. Door-to-door delivery with real-time tracking."
            />
            <ServiceCard
              icon={<Zap className="w-7 h-7" />}
              title="Express Delivery"
              description="Same-day and next-day delivery options. When every minute counts, we deliver."
            />
          </div>
          
          <div className="text-center mt-12">
            <Button variant="accent" size="lg" asChild>
              <Link to="/services" className="flex items-center gap-2">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-accent">Ultra Fast Cargo?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                With over 15 years of experience in the logistics industry, we've built a reputation for reliability, speed, and exceptional customer service. Our global network ensures your cargo reaches its destination safely and on time.
              </p>
              
              <div className="space-y-4">
                {[
                  "Real-time shipment tracking & updates",
                  "Competitive rates with no hidden fees",
                  "24/7 customer support",
                  "Customs clearance assistance",
                  "Insurance coverage options",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="accent" size="lg" className="mt-8" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <FeatureCard
                icon={<Clock className="w-6 h-6" />}
                title="Fast Delivery"
                description="Express shipping options for urgent cargo needs"
              />
              <FeatureCard
                icon={<Shield className="w-6 h-6" />}
                title="Secure Handling"
                description="Your cargo is safe with our trained professionals"
              />
              <FeatureCard
                icon={<Globe className="w-6 h-6" />}
                title="Global Coverage"
                description="UAE, GCC, India, and 150+ countries worldwide"
              />
              <FeatureCard
                icon={<Award className="w-6 h-6" />}
                title="Quality Service"
                description="Award-winning customer support team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Global Coverage
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From Dubai to every corner of the world. We serve major destinations across GCC, India, and beyond.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">UAE & GCC</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Complete coverage across Dubai, Abu Dhabi, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.
              </p>
              <p className="text-accent font-semibold">1-3 Days Delivery</p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">India</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Extensive network covering all major cities including Mumbai, Delhi, Chennai, Bangalore, and more.
              </p>
              <p className="text-accent font-semibold">3-7 Days Delivery</p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Plane className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Worldwide</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Global shipping to 150+ countries across Europe, Americas, Asia, Africa, and Australia.
              </p>
              <p className="text-accent font-semibold">5-14 Days Delivery</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/coverage" className="flex items-center gap-2">
                View Full Coverage Map
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Ship? <span className="text-accent">Get Started Today!</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Request a free quote and discover why thousands of businesses trust Ultra Fast Cargo for their shipping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote" className="flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+971XXXXXXX">Call Us Now</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
