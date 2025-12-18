import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
  Globe, MapPin, Plane, Ship, Truck, ArrowRight, CheckCircle
} from "lucide-react";

const regions = [
  {
    name: "UAE",
    countries: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah", "Ras Al Khaimah", "Umm Al Quwain"],
    delivery: "Same Day - 24 Hours",
    icon: <Truck className="w-6 h-6" />,
  },
  {
    name: "GCC Countries",
    countries: ["Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
    delivery: "1-3 Days",
    icon: <Truck className="w-6 h-6" />,
  },
  {
    name: "India",
    countries: ["Mumbai", "Delhi", "Chennai", "Bangalore", "Hyderabad", "Kolkata", "All Major Cities"],
    delivery: "3-7 Days",
    icon: <Plane className="w-6 h-6" />,
  },
  {
    name: "Pakistan",
    countries: ["Karachi", "Lahore", "Islamabad", "Peshawar", "Faisalabad", "Multan", "Rawalpindi", "Quetta", "Sialkot", "Gujranwala"],
    delivery: "3-7 Days",
    icon: <Plane className="w-6 h-6" />,
  },
  {
    name: "Asia Pacific",
    countries: ["China", "Singapore", "Malaysia", "Thailand", "Indonesia", "Philippines", "Vietnam", "Japan", "South Korea"],
    delivery: "5-10 Days",
    icon: <Plane className="w-6 h-6" />,
  },
  {
    name: "Europe",
    countries: ["UK", "Germany", "France", "Italy", "Netherlands", "Spain", "Belgium", "All EU Countries"],
    delivery: "5-10 Days",
    icon: <Plane className="w-6 h-6" />,
  },
  {
    name: "Americas",
    countries: ["USA", "Canada", "Brazil", "Mexico", "Argentina", "Colombia", "Chile"],
    delivery: "7-14 Days",
    icon: <Plane className="w-6 h-6" />,
  },
  {
    name: "Africa",
    countries: ["South Africa", "Kenya", "Nigeria", "Egypt", "Morocco", "Tanzania", "Ethiopia"],
    delivery: "7-14 Days",
    icon: <Ship className="w-6 h-6" />,
  },
  {
    name: "Oceania",
    countries: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"],
    delivery: "10-14 Days",
    icon: <Ship className="w-6 h-6" />,
  },
];

const Coverage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Global <span className="text-accent">Coverage</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              From Dubai to every corner of the world. We serve 150+ countries across all continents with reliable shipping solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Countries" },
              { number: "500+", label: "Cities" },
              { number: "50+", label: "Airlines Partners" },
              { number: "100+", label: "Shipping Lines" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Coverage by Region
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select your destination region to learn about our shipping options and estimated delivery times.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  {region.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{region.name}</h3>
                <div className="inline-flex items-center gap-1 text-sm text-accent font-medium mb-4">
                  <span>{region.delivery}</span>
                </div>
                <div className="space-y-2">
                  {region.countries.slice(0, 5).map((country, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 text-accent shrink-0" />
                      {country}
                    </div>
                  ))}
                  {region.countries.length > 5 && (
                    <p className="text-sm text-muted-foreground">
                      +{region.countries.length - 5} more locations
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Ship With Us <span className="text-accent">Worldwide?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our extensive global network ensures your cargo reaches any destination safely and on time, regardless of where you're shipping.
              </p>
              <div className="space-y-4">
                {[
                  "Real-time tracking for all international shipments",
                  "Door-to-door delivery service worldwide",
                  "Expert customs clearance assistance",
                  "Multiple shipping options (Air, Sea, Land)",
                  "Competitive rates with volume discounts",
                  "24/7 customer support in multiple languages",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground text-center mb-4">
                150+ Countries Covered
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Our network spans across all major shipping lanes, ensuring your cargo has access to the most efficient routes worldwide.
              </p>
              <Button variant="accent" size="lg" className="w-full" asChild>
                <Link to="/quote" className="flex items-center justify-center gap-2">
                  Get International Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Can't Find Your Destination?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Contact us today. If we don't currently serve your destination, we'll find a solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+971XXXXXXX">Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Coverage;
