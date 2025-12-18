import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrackingBox from "@/components/TrackingBox";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Plane, Ship, Truck, Zap, Shield, Globe, Clock, 
  Award, Users, ArrowRight, CheckCircle 
} from "lucide-react";
import heroImage from "@/assets/hero-cargo.jpg";

const Index = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        
        {/* Animated background elements */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                {t("hero.badge")}
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                {t("hero.title1")} <br />
                <span className="text-accent">{t("hero.title2")}</span><br />
                {t("hero.title3")}
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
                {t("hero.subtitle")}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/quote" className="flex items-center gap-2">
                    {t("hero.cta")}
                    <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/services">{t("hero.ctaServices")}</Link>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/10">
                <div>
                  <p className="text-3xl font-heading font-bold text-accent">15+</p>
                  <p className="text-primary-foreground/60 text-sm">{t("hero.yearsExp")}</p>
                </div>
                <div>
                  <p className="text-3xl font-heading font-bold text-accent">50K+</p>
                  <p className="text-primary-foreground/60 text-sm">{t("hero.shipments")}</p>
                </div>
                <div>
                  <p className="text-3xl font-heading font-bold text-accent">150+</p>
                  <p className="text-primary-foreground/60 text-sm">{t("hero.countries")}</p>
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
              {t("services.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Plane className="w-7 h-7" />}
              title={t("services.air")}
              description={t("services.airDesc")}
            />
            <ServiceCard
              icon={<Ship className="w-7 h-7" />}
              title={t("services.sea")}
              description={t("services.seaDesc")}
            />
            <ServiceCard
              icon={<Truck className="w-7 h-7" />}
              title={t("services.land")}
              description={t("services.landDesc")}
            />
            <ServiceCard
              icon={<Zap className="w-7 h-7" />}
              title={t("services.express")}
              description={t("services.expressDesc")}
            />
          </div>
          
          <div className="text-center mt-12">
            <Button variant="accent" size="lg" asChild>
              <Link to="/services" className="flex items-center gap-2">
                {t("services.viewAll")}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
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
                {t("why.title")} <span className="text-accent">{t("why.titleHighlight")}</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {t("why.subtitle")}
              </p>
              
              <div className="space-y-4">
                {[
                  t("why.feature1"),
                  t("why.feature2"),
                  t("why.feature3"),
                  t("why.feature4"),
                  t("why.feature5"),
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="accent" size="lg" className="mt-8" asChild>
                <Link to="/about">{t("why.learnMore")}</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <FeatureCard
                icon={<Clock className="w-6 h-6" />}
                title={t("why.fastDelivery")}
                description={t("why.fastDeliveryDesc")}
              />
              <FeatureCard
                icon={<Shield className="w-6 h-6" />}
                title={t("why.secureHandling")}
                description={t("why.secureHandlingDesc")}
              />
              <FeatureCard
                icon={<Globe className="w-6 h-6" />}
                title={t("why.globalCoverage")}
                description={t("why.globalCoverageDesc")}
              />
              <FeatureCard
                icon={<Award className="w-6 h-6" />}
                title={t("why.qualityService")}
                description={t("why.qualityServiceDesc")}
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
              {t("coverage.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("coverage.subtitle")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">{t("coverage.uaeGcc")}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("coverage.uaeGccDesc")}
              </p>
              <p className="text-accent font-semibold">1-3 {t("coverage.daysDelivery")}</p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">{t("coverage.india")}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("coverage.indiaDesc")}
              </p>
              <p className="text-accent font-semibold">3-7 {t("coverage.daysDelivery")}</p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">{t("coverage.pakistan")}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("coverage.pakistanDesc")}
              </p>
              <p className="text-accent font-semibold">3-7 {t("coverage.daysDelivery")}</p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Plane className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">{t("coverage.worldwide")}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("coverage.worldwideDesc")}
              </p>
              <p className="text-accent font-semibold">5-14 {t("coverage.daysDelivery")}</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/coverage" className="flex items-center gap-2">
                {t("coverage.viewMap")}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
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
            {t("cta.title")} <span className="text-accent">{t("cta.titleHighlight")}</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            {t("cta.subtitle")}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote" className="flex items-center gap-2">
                {t("cta.getQuote")}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+971XXXXXXX">{t("cta.callNow")}</a>
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
