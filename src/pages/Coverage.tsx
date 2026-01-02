import { useState } from "react";
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
  Globe, MapPin, Plane, Ship, Truck, ArrowRight, CheckCircle, ChevronDown, ChevronUp
} from "lucide-react";
import regionUae from "@/assets/region-uae.jpg";
import regionGcc from "@/assets/region-gcc.jpg";
import regionIndia from "@/assets/region-india.jpg";
import regionPakistan from "@/assets/region-pakistan.jpg";
import regionAsia from "@/assets/region-asia.jpg";
import regionEurope from "@/assets/region-europe.jpg";
import regionAmericas from "@/assets/region-americas.jpg";
import regionAfrica from "@/assets/region-africa.jpg";
import regionOceania from "@/assets/region-oceania.jpg";

const regions = [
  {
    name: "UAE",
    countries: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah", "Ras Al Khaimah", "Umm Al Quwain"],
    delivery: "Same Day - 24 Hours",
    image: regionUae,
  },
  {
    name: "GCC Countries",
    countries: ["Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
    delivery: "1-3 Days",
    image: regionGcc,
  },
  {
    name: "India",
    countries: ["Mumbai", "Delhi", "Chennai", "Bangalore", "Hyderabad", "Kolkata", "All Major Cities"],
    delivery: "3-7 Days",
    image: regionIndia,
  },
  {
    name: "Pakistan",
    countries: ["Karachi", "Lahore", "Islamabad", "Peshawar", "Faisalabad", "Multan", "Rawalpindi", "Quetta", "Sialkot", "Gujranwala"],
    delivery: "3-7 Days",
    image: regionPakistan,
  },
  {
    name: "Asia Pacific",
    countries: ["China", "Singapore", "Malaysia", "Thailand", "Indonesia", "Philippines", "Vietnam", "Japan", "South Korea"],
    delivery: "5-10 Days",
    image: regionAsia,
  },
  {
    name: "Europe",
    countries: ["UK", "Germany", "France", "Italy", "Netherlands", "Spain", "Belgium", "All EU Countries"],
    delivery: "5-10 Days",
    image: regionEurope,
  },
  {
    name: "Americas",
    countries: ["USA", "Canada", "Brazil", "Mexico", "Argentina", "Colombia", "Chile"],
    delivery: "7-14 Days",
    image: regionAmericas,
  },
  {
    name: "Africa",
    countries: ["South Africa", "Kenya", "Nigeria", "Egypt", "Morocco", "Tanzania", "Ethiopia"],
    delivery: "7-14 Days",
    image: regionAfrica,
  },
  {
    name: "Oceania",
    countries: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"],
    delivery: "10-14 Days",
    image: regionOceania,
  },
];

// FAQs for AEO - Coverage specific
const coverageFAQs = [
  {
    question: "Which countries does Ultra Fast Cargo ship to from UAE?",
    answer: "Ultra Fast Cargo ships to 150+ countries worldwide including all GCC countries (Saudi Arabia, Qatar, Kuwait, Bahrain, Oman), India, Pakistan, Europe, USA, UK, Australia, and more."
  },
  {
    question: "How long does shipping from Dubai to Saudi Arabia take?",
    answer: "Shipping from Dubai to Saudi Arabia typically takes 1-3 business days via our land transport or express delivery services."
  },
  {
    question: "Can I ship cargo from Dubai to Pakistan?",
    answer: "Yes, we offer regular cargo services from Dubai to all major cities in Pakistan including Karachi, Lahore, Islamabad, Peshawar, and more. Delivery takes 3-7 business days."
  },
  {
    question: "What are the shipping times to India from UAE?",
    answer: "Air cargo from UAE to India takes 3-7 business days. We deliver to all major Indian cities including Mumbai, Delhi, Chennai, Bangalore, Hyderabad, and Kolkata."
  }
];

// Region Card Component with expandable locations
const RegionCard = ({ region }: { region: typeof regions[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleCountries = isExpanded ? region.countries : region.countries.slice(0, 2);
  const hasMore = region.countries.length > 2;

  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={region.image} 
          alt={region.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-heading font-bold text-xl text-white drop-shadow-lg">{region.name}</h3>
          <div className="inline-flex items-center gap-1 text-sm text-accent font-semibold drop-shadow-md">
            <span>{region.delivery}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-2">
          {visibleCountries.map((country, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-3 h-3 text-accent shrink-0" />
              {country}
            </div>
          ))}
          {hasMore && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-sm text-accent font-medium hover:text-accent/80 transition-colors mt-2"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  +{region.countries.length - 2} more locations
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Coverage = () => {
  const structuredData = [
    generateWebPageSchema({
      name: "Shipping Coverage - UAE to 150+ Countries Worldwide",
      description: "Ultra Fast Cargo shipping coverage from Dubai to GCC, India, Pakistan, Europe, USA, and 150+ countries. Check delivery times and destinations.",
      url: "/coverage",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Coverage", url: "/coverage" },
    ]),
    generateFAQSchema(coverageFAQs),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Global Shipping Coverage - UAE to 150+ Countries"
        description="Ship from Dubai to GCC, India, Pakistan, Europe, USA & 150+ countries. Check delivery times: UAE same-day, GCC 1-3 days, India/Pakistan 3-7 days. Free quotes available."
        keywords="shipping from Dubai, cargo to India, freight to Pakistan, UAE to GCC shipping, international cargo coverage, worldwide freight delivery"
        structuredData={structuredData}
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 bg-primary overflow-hidden" role="banner">
        <div className="absolute inset-0 bg-hero-pattern" aria-hidden="true" />
        <div className="relative container mx-auto px-4">
          <nav className="text-sm text-primary-foreground/60 mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 justify-center" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" itemProp="item" className="hover:text-accent"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-accent">Coverage</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Global <span className="text-accent">Shipping Coverage</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              From Dubai to every corner of the world. We serve 150+ countries across all continents with reliable shipping solutions.
            </p>
          </div>
        </div>
      </header>

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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <RegionCard key={index} region={region} />
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

      {/* FAQ Section for AEO */}
      <section className="py-16 bg-secondary" aria-labelledby="coverage-faq-heading">
        <div className="container mx-auto px-4">
          <h2 id="coverage-faq-heading" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Shipping Coverage FAQ
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {coverageFAQs.map((faq, index) => (
              <article key={index} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Coverage;
