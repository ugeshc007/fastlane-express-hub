import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { 
  generateOrganizationSchema, 
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from "@/components/SEOHead";
import { 
  Target, Eye, Users, Award, Globe, CheckCircle, ArrowRight
} from "lucide-react";
import cargoImage from "@/assets/cargo-truck-ship.jpg";

const About = () => {
  const structuredData = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      name: "About Ultra Fast Cargo - Leading UAE Logistics Company",
      description: "Learn about Ultra Fast Cargo, Dubai's trusted cargo company since 2009. 15+ years experience, 50K+ annual shipments, serving 150+ countries.",
      url: "/about",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "About Us", url: "/about" },
    ]),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Us - UAE's Trusted Cargo & Logistics Company Since 2009"
        description="Ultra Fast Cargo: Dubai-based logistics company with 15+ years experience. 50K+ annual shipments to 150+ countries. Trusted by 5000+ businesses for air, sea & land freight."
        keywords="about Ultra Fast Cargo, cargo company Dubai, logistics UAE history, freight forwarding company, shipping company about us"
        structuredData={structuredData}
      />
      <Navbar />
      
      {/* Hero Section with Cargo Image */}
      <header className="relative pt-32 pb-20 overflow-hidden" role="banner">
        <div className="absolute inset-0">
          <img 
            src={cargoImage} 
            alt="Cargo truck and container ship at port - Ultra Fast Cargo logistics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="absolute inset-0 bg-hero-pattern opacity-50" aria-hidden="true" />
        <div className="relative container mx-auto px-4">
          <nav className="text-sm text-primary-foreground/60 mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 justify-center" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" itemProp="item" className="hover:text-accent"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-accent">About Us</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About <span className="text-accent">Ultra Fast Cargo</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-4">
              Your trusted partner in global logistics since 2009. We deliver excellence across UAE, GCC, India, and worldwide.
            </p>
            <p className="text-accent font-semibold text-xl md:text-2xl">
              Trusted by Businesses Worldwide for Fast, Secure Delivery.
            </p>
          </div>
        </div>
      </header>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Founded in Dubai in 2009, Ultra Fast Cargo began with a simple mission: to provide fast, reliable, and affordable shipping solutions for businesses and individuals across the UAE and beyond.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Over the years, we've grown from a small local operation to a full-fledged international logistics company, serving customers in over 150 countries. Our success is built on our commitment to customer satisfaction and our relentless pursuit of excellence.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, we're proud to be one of the leading cargo companies in the UAE, known for our speed, reliability, and exceptional customer service.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <p className="text-4xl font-heading font-bold text-accent mb-2">15+</p>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <p className="text-4xl font-heading font-bold text-accent mb-2">50K+</p>
                <p className="text-muted-foreground">Annual Shipments</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <p className="text-4xl font-heading font-bold text-accent mb-2">150+</p>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <p className="text-4xl font-heading font-bold text-accent mb-2">5K+</p>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class cargo and logistics solutions that exceed customer expectations. We strive to deliver speed, reliability, and value in every shipment, helping businesses grow and individuals connect with loved ones around the world.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and preferred cargo company in the Middle East, known for innovation, reliability, and customer-centric services. We aim to set new standards in the logistics industry through technology and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <CheckCircle className="w-6 h-6" />, title: "Reliability", desc: "We deliver on our promises, every single time" },
              { icon: <Globe className="w-6 h-6" />, title: "Global Reach", desc: "Connecting businesses across 150+ countries" },
              { icon: <Users className="w-6 h-6" />, title: "Customer First", desc: "Your satisfaction is our top priority" },
              { icon: <Award className="w-6 h-6" />, title: "Excellence", desc: "Committed to the highest quality standards" },
            ].map((value, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 text-accent-foreground">
                  {value.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who trust Ultra Fast Cargo for their shipping needs.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
