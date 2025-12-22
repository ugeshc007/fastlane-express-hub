import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrackingBox from "@/components/TrackingBox";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOHead, { 
  generateOrganizationSchema, 
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from "@/components/SEOHead";
import { 
  Plane, Ship, Truck, Zap, Shield, Globe, Clock, 
  Award, Users, ArrowRight, CheckCircle 
} from "lucide-react";
import heroImage from "@/assets/hero-cargo.jpg";

// FAQ data for AEO - answers common questions AI search engines look for
const homeFAQs = [
  {
    question: "What shipping services does Ultra Fast Cargo offer?",
    answer: "Ultra Fast Cargo offers comprehensive air cargo, sea freight, land transport, and express delivery services from UAE to GCC countries, India, Pakistan, and 150+ countries worldwide."
  },
  {
    question: "How long does shipping from Dubai to India take?",
    answer: "Air cargo from Dubai to India typically takes 3-7 business days. Express delivery options are available for urgent shipments with faster transit times."
  },
  {
    question: "Does Ultra Fast Cargo offer package tracking?",
    answer: "Yes, Ultra Fast Cargo provides real-time tracking for all shipments. You can track your package using your tracking number on our website or mobile app."
  },
  {
    question: "What are the delivery times to GCC countries?",
    answer: "Delivery to GCC countries (Saudi Arabia, Qatar, Kuwait, Bahrain, Oman) typically takes 1-3 business days via our express and standard shipping options."
  },
  {
    question: "Does Ultra Fast Cargo handle customs clearance?",
    answer: "Yes, we provide complete customs clearance assistance for international shipments, ensuring smooth delivery without delays."
  }
];

const Index = () => {
  const { t, isRTL, language } = useLanguage();

  // Generate structured data for SEO and AEO
  const structuredData = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebPageSchema({
      name: "Ultra Fast Cargo - International Shipping from UAE",
      description: "Premier cargo and logistics company in Dubai offering air, sea, and land freight services to GCC, India, Pakistan, and 150+ countries worldwide.",
      url: "/",
    }),
    generateServiceSchema([
      { name: "Air Cargo", description: "Fast air freight services worldwide with express delivery options", url: "/services/air-cargo" },
      { name: "Sea Freight", description: "Cost-effective ocean freight for large shipments with FCL and LCL options", url: "/services/sea-cargo" },
      { name: "Land Transport", description: "Reliable road freight across UAE and GCC with door-to-door delivery", url: "/services/land-transport" },
      { name: "Express Delivery", description: "Same-day and next-day delivery services within UAE and to GCC", url: "/services/express-delivery" },
    ]),
    generateFAQSchema(homeFAQs),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={language === "ar" ? "شحن دولي من الإمارات" : "International Cargo Shipping from UAE to World"}
        description="Ultra Fast Cargo: Leading cargo company in Dubai offering air, sea & land freight to India, Pakistan, GCC & 150+ countries. Track shipments, get quotes. 15+ years experience."
        keywords="cargo Dubai, shipping UAE, freight forwarding, air cargo India, sea freight GCC, express delivery Pakistan, international shipping Dubai, cargo tracking, logistics UAE"
        structuredData={structuredData}
      />
      <Navbar />
      
      {/* Hero Section - Main landing area with primary keywords */}
      <header className="relative pt-20 overflow-hidden" role="banner">
        <div className="absolute inset-0 bg-primary" />
        <figure 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="Ultra Fast Cargo shipping and logistics operations"
        />
        <div className="absolute inset-0 bg-primary/80" />
        
        {/* Animated background elements */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" aria-hidden="true" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} aria-hidden="true" />
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <article className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" aria-hidden="true" />
                <span>{t("hero.badge")}</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                {t("hero.title1")} <br />
                <span className="text-accent">{t("hero.title2")}</span><br />
                {t("hero.title3")}
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
                {t("hero.subtitle")}
              </p>
              <nav className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`} aria-label="Primary actions">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/quote" className="flex items-center gap-2">
                    {t("hero.cta")}
                    <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/services">{t("hero.ctaServices")}</Link>
                </Button>
              </nav>
              
              {/* Stats - Important for E-E-A-T signals */}
              <aside className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/10" aria-label="Company statistics">
                <div>
                  <p className="text-3xl font-heading font-bold text-accent" aria-label="15 plus years of experience">15+</p>
                  <p className="text-primary-foreground/60 text-sm">{t("hero.yearsExp")}</p>
                </div>
                <div>
                  <p className="text-3xl font-heading font-bold text-accent" aria-label="50 thousand plus shipments annually">50K+</p>
                  <p className="text-primary-foreground/60 text-sm">{t("hero.shipments")}</p>
                </div>
                <div>
                  <p className="text-3xl font-heading font-bold text-accent" aria-label="150 plus countries served">150+</p>
                  <p className="text-primary-foreground/60 text-sm">{t("hero.countries")}</p>
                </div>
              </aside>
            </article>
            
            <aside className="animate-slide-in-right" style={{ animationDelay: "0.2s" }} aria-label="Track your shipment">
              <TrackingBox />
            </aside>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </header>

      {/* Services Section - Core service offerings for AEO */}
      <section className="py-20 lg:py-28 bg-background" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16 animate-slide-up">
            <h2 id="services-heading" className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("services.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </header>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Shipping services">
            <ServiceCard
              icon={<Plane className="w-7 h-7" aria-hidden="true" />}
              title={t("services.air")}
              description={t("services.airDesc")}
            />
            <ServiceCard
              icon={<Ship className="w-7 h-7" aria-hidden="true" />}
              title={t("services.sea")}
              description={t("services.seaDesc")}
            />
            <ServiceCard
              icon={<Truck className="w-7 h-7" aria-hidden="true" />}
              title={t("services.land")}
              description={t("services.landDesc")}
            />
            <ServiceCard
              icon={<Zap className="w-7 h-7" aria-hidden="true" />}
              title={t("services.express")}
              description={t("services.expressDesc")}
            />
          </div>
          
          <nav className="text-center mt-12" aria-label="View all services">
            <Button variant="accent" size="lg" asChild>
              <Link to="/services" className="flex items-center gap-2">
                {t("services.viewAll")}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} aria-hidden="true" />
              </Link>
            </Button>
          </nav>
        </div>
      </section>

      {/* Why Choose Us Section - Trust signals for E-E-A-T */}
      <section className="py-20 lg:py-28 bg-secondary" aria-labelledby="why-choose-heading">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <article>
              <h2 id="why-choose-heading" className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("why.title")} <span className="text-accent">{t("why.titleHighlight")}</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {t("why.subtitle")}
              </p>
              
              <ul className="space-y-4" role="list" aria-label="Benefits of choosing Ultra Fast Cargo">
                {[
                  t("why.feature1"),
                  t("why.feature2"),
                  t("why.feature3"),
                  t("why.feature4"),
                  t("why.feature5"),
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="accent" size="lg" className="mt-8" asChild>
                <Link to="/about">{t("why.learnMore")}</Link>
              </Button>
            </article>
            
            <div className="grid grid-cols-2 gap-6" role="list" aria-label="Key features">
              <FeatureCard
                icon={<Clock className="w-6 h-6" aria-hidden="true" />}
                title={t("why.fastDelivery")}
                description={t("why.fastDeliveryDesc")}
              />
              <FeatureCard
                icon={<Shield className="w-6 h-6" aria-hidden="true" />}
                title={t("why.secureHandling")}
                description={t("why.secureHandlingDesc")}
              />
              <FeatureCard
                icon={<Globe className="w-6 h-6" aria-hidden="true" />}
                title={t("why.globalCoverage")}
                description={t("why.globalCoverageDesc")}
              />
              <FeatureCard
                icon={<Award className="w-6 h-6" aria-hidden="true" />}
                title={t("why.qualityService")}
                description={t("why.qualityServiceDesc")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section - Geographic targeting for local SEO */}
      <section className="py-20 lg:py-28 bg-background" aria-labelledby="coverage-heading">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 id="coverage-heading" className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("coverage.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("coverage.subtitle")}
            </p>
          </header>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Shipping destinations">
            <article className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow" role="listitem">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">{t("coverage.uaeGcc")}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("coverage.uaeGccDesc")}
              </p>
              <p className="text-accent font-semibold"><time>1-3</time> {t("coverage.daysDelivery")}</p>
            </article>
            
            <article className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow" role="listitem">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">{t("coverage.india")}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("coverage.indiaDesc")}
              </p>
              <p className="text-accent font-semibold"><time>3-7</time> {t("coverage.daysDelivery")}</p>
            </article>
            
            <article className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow" role="listitem">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">{t("coverage.pakistan")}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("coverage.pakistanDesc")}
              </p>
              <p className="text-accent font-semibold"><time>3-7</time> {t("coverage.daysDelivery")}</p>
            </article>
            
            <article className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow" role="listitem">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <Plane className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">{t("coverage.worldwide")}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("coverage.worldwideDesc")}
              </p>
              <p className="text-accent font-semibold"><time>5-14</time> {t("coverage.daysDelivery")}</p>
            </article>
          </div>
          
          <nav className="text-center mt-12" aria-label="View coverage details">
            <Button variant="outline" size="lg" asChild>
              <Link to="/coverage" className="flex items-center gap-2">
                {t("coverage.viewMap")}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} aria-hidden="true" />
              </Link>
            </Button>
          </nav>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" aria-hidden="true" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {t("cta.title")} <span className="text-accent">{t("cta.titleHighlight")}</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            {t("cta.subtitle")}
          </p>
          <nav className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`} aria-label="Get started">
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote" className="flex items-center gap-2">
                {t("cta.getQuote")}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+971XXXXXXX" aria-label="Call Ultra Fast Cargo">{t("cta.callNow")}</a>
            </Button>
          </nav>
        </div>
      </section>

      {/* FAQ Section for AEO - Hidden visually but indexable */}
      <section className="sr-only" aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently Asked Questions about Ultra Fast Cargo</h2>
        {homeFAQs.map((faq, index) => (
          <article key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
