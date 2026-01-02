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
  Award, Users, ArrowRight, CheckCircle, FileText, Package, MapPin, Headphones
} from "lucide-react";
import heroImage from "@/assets/hero-cargo.jpg";
import logo from "@/assets/UltrafastCargoY Logo.png";
import cargoTruckShip from "@/assets/cargo-truck-ship.jpg";
import airCargoImage from "@/assets/air-cargo-service.jpg";
import seaCargoImage from "@/assets/sea-cargo-service.jpg";
import landTransportImage from "@/assets/land-transport-service.jpg";
import expressDeliveryImage from "@/assets/express-delivery-service.jpg";
import doorToDoorImage from "@/assets/door-to-door-delivery.jpg";
import realTimeTrackingImage from "@/assets/real-time-tracking.jpg";
import customerSupportImage from "@/assets/customer-support.jpg";
import fastDeliveryImage from "@/assets/fast-delivery.jpg";
import yearsExperienceImage from "@/assets/years-experience.jpg";
import customsClearanceImage from "@/assets/customs-clearance.jpg";
import expressShippingImage from "@/assets/express-shipping.jpg";
import globalNetworkImage from "@/assets/global-network.jpg";

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
        <div className="absolute inset-0 bg-primary/60" />
        
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
              image={airCargoImage}
              title={t("services.air")}
              description={t("services.airDesc")}
            />
            <ServiceCard
              image={seaCargoImage}
              title={t("services.sea")}
              description={t("services.seaDesc")}
            />
            <ServiceCard
              image={landTransportImage}
              title={t("services.land")}
              description={t("services.landDesc")}
            />
            <ServiceCard
              image={expressDeliveryImage}
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

      {/* How It Works - Process Section */}
      <section className="py-20 lg:py-28 bg-primary relative overflow-hidden" aria-labelledby="process-heading">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" aria-hidden="true" />
        <div className="relative container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 id="process-heading" className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {isRTL ? "كيف يعمل" : "How It Works"}
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              {isRTL ? "أربع خطوات بسيطة لتوصيل شحنتك" : "Four simple steps to get your shipment delivered"}
            </p>
          </header>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-1 bg-accent/30" aria-hidden="true">
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent to-accent/30 animate-pulse" />
            </div>
            
            {[
              { 
                step: "01", 
                icon: <FileText className="w-8 h-8" />, 
                title: isRTL ? "طلب عرض سعر" : "Get a Quote", 
                desc: isRTL ? "أخبرنا عن شحنتك واحصل على عرض سعر مجاني" : "Tell us about your shipment and get a free quote" 
              },
              { 
                step: "02", 
                icon: <Package className="w-8 h-8" />, 
                title: isRTL ? "تجهيز الشحنة" : "Pack & Pickup", 
                desc: isRTL ? "نقوم بجمع طردك من موقعك" : "We collect your package from your location" 
              },
              { 
                step: "03", 
                icon: <Truck className="w-8 h-8" />, 
                title: isRTL ? "الشحن" : "Ship", 
                desc: isRTL ? "تتبع شحنتك في الوقت الفعلي" : "Track your shipment in real-time" 
              },
              { 
                step: "04", 
                icon: <MapPin className="w-8 h-8" />, 
                title: isRTL ? "التوصيل" : "Deliver", 
                desc: isRTL ? "تسليم آمن إلى الوجهة" : "Safe delivery to destination" 
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center group">
                <div className="relative z-10 w-24 h-24 bg-card rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="text-accent">{item.icon}</div>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - Icons & Vectors */}
      <section className="py-20 lg:py-28 bg-background" aria-labelledby="features-heading">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 id="features-heading" className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isRTL ? "لماذا تختارنا" : "Why Ship With Us"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isRTL ? "نقدم خدمات شحن متكاملة بأعلى معايير الجودة" : "Complete shipping solutions with the highest quality standards"}
            </p>
          </header>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                image: doorToDoorImage, 
                title: isRTL ? "توصيل من الباب إلى الباب" : "Door-to-Door Delivery", 
                desc: isRTL ? "خدمة استلام وتوصيل مباشرة" : "Direct pickup and delivery service" 
              },
              { 
                image: realTimeTrackingImage, 
                title: isRTL ? "تتبع فوري" : "Real-Time Tracking", 
                desc: isRTL ? "تتبع شحنتك في أي وقت" : "Track your shipment anytime" 
              },
              { 
                image: customerSupportImage, 
                title: isRTL ? "دعم على مدار الساعة" : "24/7 Support", 
                desc: isRTL ? "فريق دعم متاح دائماً" : "Support team always available" 
              },
              { 
                image: fastDeliveryImage, 
                title: isRTL ? "توصيل سريع" : "Fast Delivery", 
                desc: isRTL ? "أوقات توصيل تنافسية" : "Competitive delivery times" 
              },
              { 
                image: yearsExperienceImage, 
                title: isRTL ? "خبرة 15+ سنة" : "15+ Years Experience", 
                desc: isRTL ? "خبرة واسعة في الشحن الدولي" : "Extensive international shipping expertise" 
              },
              { 
                image: customsClearanceImage, 
                title: isRTL ? "تخليص جمركي" : "Customs Clearance", 
                desc: isRTL ? "مساعدة في إجراءات الجمارك" : "Assistance with customs procedures" 
              },
              { 
                image: expressShippingImage, 
                title: isRTL ? "شحن سريع" : "Express Shipping", 
                desc: isRTL ? "خيارات شحن سريعة وعاجلة" : "Fast and urgent shipping options" 
              },
              { 
                image: globalNetworkImage, 
                title: isRTL ? "شبكة عالمية" : "Global Network", 
                desc: isRTL ? "تغطية أكثر من 150 دولة" : "Coverage across 150+ countries" 
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl overflow-hidden border border-border hover:border-accent hover:shadow-lg transition-all group"
              >
                <div className="relative h-36 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden" aria-labelledby="why-choose-heading">
        <div className="container mx-auto px-4">
          {/* Trust Badge */}
          <div className="text-center mb-12">
            <p className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full font-semibold text-lg">
              Trusted by Businesses Worldwide for Fast, Secure Delivery
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <img 
                src={cargoTruckShip} 
                alt="Cargo truck and container ship at port - Professional logistics services" 
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground font-heading font-bold text-2xl">
                  15+ Years of Excellence
                </p>
                <p className="text-primary-foreground/80">
                  Serving 150+ countries worldwide
                </p>
              </div>
            </div>
            
            {/* Content Side */}
            <article className="order-1 lg:order-2">
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
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16" role="list" aria-label="Key features">
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
              <p className="text-muted-foreground text-sm">
                {t("coverage.uaeGccDesc")}
              </p>
            </article>
            
            <article className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow" role="listitem">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">{t("coverage.india")}</h3>
              <p className="text-muted-foreground text-sm">
                {t("coverage.indiaDesc")}
              </p>
            </article>
            
            <article className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow" role="listitem">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">{t("coverage.pakistan")}</h3>
              <p className="text-muted-foreground text-sm">
                {t("coverage.pakistanDesc")}
              </p>
            </article>
            
            <article className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow" role="listitem">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <Plane className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">{t("coverage.worldwide")}</h3>
              <p className="text-muted-foreground text-sm">
                {t("coverage.worldwideDesc")}
              </p>
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
        
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Logo on the left */}
            <div className="hidden lg:flex justify-center items-center">
              <img 
                src={logo} 
                alt="Ultra Fast Cargo Logo" 
                className="w-80 h-auto brightness-0 invert opacity-90"
              />
            </div>
            
            {/* CTA Content on the right */}
            <div className="text-center lg:text-left">
              <h2 id="cta-heading" className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                {t("cta.title")} <span className="text-accent">{t("cta.titleHighlight")}</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mb-10">
                {t("cta.subtitle")}
              </p>
              <nav className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${isRTL ? 'sm:flex-row-reverse' : ''}`} aria-label="Get started">
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
          </div>
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
