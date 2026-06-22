import { trackWhatsApp, trackPhone } from "@/lib/tracking";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Clock, CheckCircle, MapPin, Truck, Plane, Package, Star, ArrowRight, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead, { generateBreadcrumbSchema, generateWebPageSchema, generateFAQSchema } from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroCargo from "@/assets/hero-cargo.jpg";
import airCargoImage from "@/assets/air-cargo-service.jpg";
import landTransportImage from "@/assets/land-transport-service.jpg";
import expressDeliveryImage from "@/assets/express-delivery-service.jpg";
import customsClearanceImage from "@/assets/customs-clearance.jpg";

const PHONE = "+971551417563";
const WHATSAPP_MSG = encodeURIComponent("Hello! I need a quote for Dubai to Saudi Arabia cargo. Please send me your rates.");
const WHATSAPP_URL = `https://wa.me/971551417563?text=${WHATSAPP_MSG}`;
const PHONE_URL = `tel:${PHONE}`;

const trackWhatsAppClick = () => trackWhatsApp("Dubai to Saudi Cargo");
const trackPhoneClick = () => trackPhone("Dubai to Saudi Cargo");

const faqs = [
  {
    question: "How long does cargo shipping from Dubai to Saudi Arabia take?",
    answer: "Road freight from Dubai to Riyadh takes 3–4 days. Express door-to-door delivery is available in 2 days for urgent shipments. Contact us for air cargo timelines.",
  },
  {
    question: "What is the price for shipping cargo from Dubai to Saudi Arabia?",
    answer: "Shipping rates depend on cargo weight, volume, and service type. Full container loads (FCL) and part loads (LCL) are available at competitive rates. Contact us for your exact quote based on weight and volume.",
  },
  {
    question: "Do you handle customs clearance for Dubai to Saudi cargo?",
    answer: "Yes. We handle 100% of customs documentation, Saudi Customs (ZATCA) clearance, COO certificates, and all required Saudi import permits — so you don't need to worry about paperwork.",
  },
  {
    question: "Do you offer door-to-door delivery from Dubai to Saudi Arabia?",
    answer: "Yes. We collect from your location in Dubai (or anywhere in UAE) and deliver to any address in Saudi Arabia including Riyadh, Jeddah, Dammam, Mecca, Medina, Khobar, Tabuk, and all major cities.",
  },
  {
    question: "What types of cargo can I ship from Dubai to Saudi Arabia?",
    answer: "We ship commercial goods, electronics, furniture, personal effects, spare parts, industrial equipment, food products (with permits), and more. Hazardous or restricted goods require prior approval — contact us to discuss your specific cargo.",
  },
  {
    question: "Do I need an import permit to ship to Saudi Arabia?",
    answer: "Some goods require special import permits for Saudi Arabia. Our team will advise you on documentation requirements based on your cargo type and handle all regulatory compliance on your behalf.",
  },
  {
    question: "Do you offer sea freight from Dubai to Saudi Arabia?",
    answer: "Yes. We offer FCL (20ft/40ft container) and LCL (groupage) sea freight from Jebel Ali Port, Dubai to Jeddah Islamic Port, King Abdulaziz Port (Dammam) and King Abdullah Port. Typical transit is 5–10 days port-to-port depending on the destination.",
  },
  {
    question: "What's the difference between road, sea and air cargo Dubai to Saudi Arabia?",
    answer: "Road freight (3–4 days) is the best balance of speed and price for most shipments via the Al Batha and Al Ghuwaifat borders. Sea freight (5–10 days) is the cheapest option for heavy and bulk cargo via Jebel Ali to Jeddah/Dammam. Air freight (24–48 hours) is fastest and best for urgent, high-value or perishable goods via DXB/DWC to Riyadh, Jeddah and Dammam airports.",
  },
];

const pricingOptions = [
  {
    icon: <Truck className="w-7 h-7" />,
    label: "Road Freight",
    time: "3–4 Days",
    price: "Competitive Rates",
    desc: "Best for bulk & heavy shipments to Saudi",
    image: landTransportImage,
    badge: "Most Popular",
  },
  {
    icon: <Plane className="w-7 h-7" />,
    label: "Air Cargo",
    time: "Fast Delivery",
    price: "Contact for Quote",
    desc: "Urgent & time-critical cargo to Riyadh/Jeddah",
    image: airCargoImage,
    badge: "Fastest",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    label: "Express Delivery",
    time: "2 Days",
    price: "Premium Rates",
    desc: "Priority door-to-door across Saudi Arabia",
    image: expressDeliveryImage,
    badge: "Premium",
  },
];

const saudiCities = [
  "Riyadh", "Jeddah", "Dammam", "Mecca", "Medina", "Khobar", "Jubail",
  "Tabuk", "Abha", "Taif", "Yanbu", "Najran", "Hail", "Khamis Mushait",
];

const structuredData = [
  generateWebPageSchema({
    name: "Dubai to Saudi Arabia Cargo Service – Fast & Affordable",
    description: "Cargo shipping from Dubai to Saudi Arabia. Road freight & air cargo. Door-to-door + full Saudi customs clearance included.",
    url: "/dubai-to-saudi-cargo",
  }),
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Dubai to Saudi Arabia Cargo", url: "/dubai-to-saudi-cargo" },
  ]),
  generateFAQSchema(faqs),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dubai to Saudi Arabia Cargo Shipping",
    description: "Professional cargo shipping from Dubai to Saudi Arabia including air freight, road transport, and express door-to-door delivery to Riyadh, Jeddah, Dammam and all Saudi cities.",
    provider: {
      "@type": "Organization",
      name: "Ultra Fast Cargo",
      telephone: "+971551417563",
      url: "https://ultrafastcargo.com",
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Riyadh" },
      { "@type": "City", name: "Jeddah" },
      { "@type": "Country", name: "Saudi Arabia" },
    ],
    serviceType: "Cargo Shipping",
  },
];

const DubaiToSaudiCargo = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Dubai to Saudi Arabia Cargo by Road, Sea & Air"
        description="Dubai to Saudi Arabia cargo by road, sea & air freight. Door-to-door to Riyadh, Jeddah, Dammam & all KSA with Saudi customs clearance. WhatsApp now."
        keywords="Dubai to Saudi Arabia cargo, Dubai to Saudi road cargo, Dubai to Saudi sea cargo, Dubai to Saudi air cargo, road freight Dubai to Saudi Arabia, sea freight Dubai to Saudi Arabia, air freight Dubai to Saudi Arabia, cargo Dubai to Riyadh, cargo Dubai to Jeddah, cargo Dubai to Dammam, truck cargo Dubai to Saudi, door to door cargo Dubai to Saudi, shipping Dubai to Saudi Arabia, freight forwarder Dubai to Saudi, شحن من دبي إلى السعودية, شحن بري دبي السعودية, شحن بحري دبي السعودية, شحن جوي دبي السعودية"
        structuredData={structuredData}
        canonicalPath="/dubai-to-saudi-cargo"
      />
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO — Above the fold. Conversion focus.
      ═══════════════════════════════════════════ */}
      <header
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(220 60% 15%) 100%)",
        }}
      >
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src={heroCargo}
            alt="Dubai to Saudi Arabia cargo shipping"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>

        {/* Urgency banner */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-accent text-accent-foreground text-center py-2 text-sm font-bold tracking-wide">
          🚚 Next departure to Saudi Arabia: <span className="underline">TOMORROW</span> — Book now to secure your slot!
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Headline + CTAs */}
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4" />
                Dubai → Saudi Arabia • Direct Route
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
                Dubai to Saudi Arabia<br />
                <span className="text-accent">Cargo Services</span><br />
                <span className="text-3xl md:text-4xl font-medium text-primary-foreground/90">Fast & Affordable</span>
              </h1>

              <p className="text-primary-foreground/80 text-lg md:text-xl mb-3">
                Air, Land & Door-to-Door Cargo to Riyadh, Jeddah & All KSA
              </p>
              <p className="text-primary-foreground/70 text-base mb-8">
                ✅ Road freight &nbsp;|&nbsp;
                ✅ Air cargo &nbsp;|&nbsp;
                ✅ Saudi customs handled
              </p>

              {/* ⭐ PRIMARY CTA — WhatsApp */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppClick}
                  className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg px-8 py-5 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                >
                  <MessageCircle className="w-6 h-6 flex-shrink-0" />
                  <div className="text-left">
                    <div>WhatsApp Us Now</div>
                    <div className="text-sm font-normal opacity-90">Get Quote in 5 Minutes</div>
                  </div>
                </a>

                <a
                  href={PHONE_URL}
                  onClick={trackPhoneClick}
                  className="flex items-center justify-center gap-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 border-2 border-primary-foreground/30 text-primary-foreground font-bold text-lg px-8 py-5 rounded-2xl transition-all duration-200 w-full sm:w-auto"
                >
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <div className="text-left">
                    <div>Call Us Now</div>
                    <div className="text-sm font-normal opacity-90">+971 55 141 7563</div>
                  </div>
                </a>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 text-primary-foreground/70 text-sm">
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-accent" /> Free Quote</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-accent" /> No Hidden Fees</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-accent" /> Saudi Customs Handled</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-accent" /> Real-time Tracking</span>
              </div>
            </div>

            {/* Right: Quick stats card */}
            <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-3xl p-8">
              <h2 className="text-primary-foreground font-heading text-xl font-bold mb-6 text-center">
                Delivery Options at a Glance
              </h2>
              <div className="space-y-4">
                {[
                  { mode: "🚛 Road Freight", time: "3–4 Days", price: "Competitive Rates", color: "text-green-400" },
                  { mode: "✈️ Air Cargo", time: "Fast Delivery", price: "Contact for Quote", color: "text-accent" },
                  { mode: "⚡ Express", time: "2 Days", price: "Premium Rates", color: "text-yellow-400" },
                ].map((opt) => (
                  <div key={opt.mode} className="flex items-center justify-between bg-primary-foreground/10 rounded-xl px-4 py-3">
                    <div>
                      <div className="text-primary-foreground font-semibold">{opt.mode}</div>
                      <div className="text-primary-foreground/85 text-sm">{opt.time}</div>
                    </div>
                    <div className={`font-bold text-lg ${opt.color}`}>{opt.price}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-center">
                <p className="text-primary-foreground/85 text-sm mb-3">Average response time: <strong className="text-accent">under 5 minutes</strong></p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppClick}
                  className="block w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl transition-colors text-center"
                >
                  💬 Get My Free Quote Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════
          SOCIAL PROOF STRIP
      ═══════════════════════════════════════════ */}
      <section className="bg-accent py-4 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-accent-foreground font-semibold text-sm">
            <span className="flex items-center gap-2"><Star className="w-4 h-4 fill-current" /> 1000+ Shipments to Saudi Arabia</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> 100% Saudi Customs Cleared</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Daily Departures</span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Fully Insured Cargo</span>
            <span className="flex items-center gap-2"><Star className="w-4 h-4 fill-current" /> 4.9★ Customer Rating</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRICING SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shipping Options & <span className="text-accent">Pricing</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transparent rates from Dubai to Saudi Arabia — no surprises, no hidden charges
            </p>
          </div>

          <p className="text-muted-foreground text-xs text-center mb-4">WhatsApp us for your exact quote based on weight, volume and cargo type.</p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingOptions.map((opt) => (
              <div
                key={opt.label}
                className="relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full z-10">
                  {opt.badge}
                </div>
                <div className="h-44 overflow-hidden">
                  <img src={opt.image} alt={opt.label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 h-44 bg-gradient-to-t from-card/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                      {opt.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground text-lg">{opt.label}</h3>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Clock className="w-3 h-3" /> {opt.time}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{opt.desc}</p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="text-2xl font-bold text-accent">{opt.price}</span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={trackWhatsAppClick}
                      className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" /> Quote Me
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA bar */}
          <div className="bg-primary rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-primary-foreground text-center md:text-left">
              <p className="font-bold text-xl mb-1">Not sure which option fits your cargo?</p>
              <p className="text-primary-foreground/70">Tell us what you're shipping — we'll find you the best rate in minutes.</p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a
                href={PHONE_URL}
                onClick={trackPhoneClick}
                className="flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground font-bold px-6 py-3 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CITIES COVERED
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            We Deliver to <span className="text-accent">All Saudi Arabia Cities</span>
          </h2>
          <p className="text-muted-foreground mb-8">Door-to-door from any UAE location to any Saudi address</p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {saudiCities.map((city) => (
              <span
                key={city}
                className="bg-card px-5 py-2.5 rounded-full border border-border text-foreground font-medium hover:border-accent hover:text-accent transition-colors"
              >
                📍 {city}
              </span>
            ))}
          </div>
          {/* Mid-page WhatsApp CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppClick}
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-xl hover:scale-105 transition-all duration-200"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp for Instant Quote — +971 55 141 7563
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY US
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Dubai Businesses Choose <span className="text-accent">Ultra Fast Cargo</span> for Saudi Arabia
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Full Saudi Customs Clearance", desc: "We handle ZATCA compliance, Saudi import permits, COO certificates, and all border formalities." },
                  { title: "Daily Departures to KSA", desc: "Regular road freight convoys leave every day to Riyadh, Jeddah, Dammam, and across Saudi Arabia." },
                  { title: "Real-Time Tracking", desc: "Track your cargo from Dubai to any Saudi city with live status updates via WhatsApp." },
                  { title: "Competitive Transparent Rates", desc: "Rates quoted upfront with no hidden fees. Contact us for your tailored quote." },
                  { title: "Saudi Route Specialists", desc: "Our team knows KSA regulations inside out — zero delays, zero surprises at the border." },
                  { title: "Fully Insured Cargo", desc: "All shipments covered from pickup in Dubai to final delivery at your Saudi address." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <img
                src={customsClearanceImage}
                alt="Customs clearance Dubai to Saudi Arabia"
                className="w-full rounded-2xl object-cover h-64"
              />
              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 text-center">
                <p className="text-foreground font-bold text-xl mb-2">Ready to ship to Saudi Arabia?</p>
                <p className="text-muted-foreground mb-4">Message us — we respond in under 5 minutes during business hours.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackWhatsAppClick}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" /> WhatsApp Now
                  </a>
                  <a
                    href={PHONE_URL}
                    onClick={trackPhoneClick}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" /> +971 55 141 7563
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CUSTOMER REVIEWS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-accent">Customers Say</span>
            </h2>
            <p className="text-muted-foreground text-lg">Trusted by businesses shipping from Dubai to Saudi Arabia</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Khalid Al-Otaibi", role: "Procurement Manager, Riyadh", quote: "Ultra Fast Cargo handles all our Dubai to Riyadh shipments. Their road freight is reliable, affordable, and customs is always sorted. Best in the business!", rating: 5 },
              { name: "Sara Al-Dosari", role: "E-commerce Business Owner, Jeddah", quote: "I ship products from Dubai to Jeddah weekly. Their express service gets everything there in 2 days. Customer support on WhatsApp is excellent.", rating: 5 },
              { name: "Imran Malik", role: "Operations Head, Dammam", quote: "We switched to Ultra Fast Cargo last year for our Dubai-Dammam route. Zero delays, transparent pricing, and they handle all ZATCA paperwork. Highly recommended!", rating: 5 },
            ].map((review, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-muted-foreground text-sm">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ — AEO & Answer Engine Optimization
      ═══════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════
          SEO CONTENT — Road / Sea / Air breakdown
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <header className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dubai to Saudi Arabia Cargo by <span className="text-accent">Road, Sea & Air</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Three trusted freight modes from the UAE to every city in the Kingdom — Riyadh, Jeddah, Dammam, Mecca, Medina, Khobar, Tabuk and beyond.
            </p>
          </header>

          <article className="prose prose-lg max-w-none mb-12">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">🚛 Road Cargo Dubai to Saudi Arabia</h3>
            <p className="text-muted-foreground mb-4">
              Our <strong>road freight from Dubai to Saudi Arabia</strong> is the most popular service for businesses and individuals shipping commercial goods, furniture, electronics and personal effects. Trucks depart daily from Dubai and cross into KSA through the <strong>Al Ghuwaifat–Al Batha border</strong>, delivering door-to-door to <strong>Riyadh in 3 days, Dammam in 2 days, and Jeddah in 4 days</strong>. We offer Full Truck Load (FTL), Less than Truck Load (LTL / part load) and refrigerated trucks for temperature-controlled cargo. Pricing is per CBM, per kg or per truck — whichever is cheaper for your shipment.
            </p>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-3 mt-8">🚢 Sea Cargo Dubai to Saudi Arabia</h3>
            <p className="text-muted-foreground mb-4">
              For heavy, bulky or large-volume shipments, <strong>sea freight from Dubai to Saudi Arabia</strong> is the most cost-effective option. We dispatch <strong>FCL (20ft and 40ft containers)</strong> and <strong>LCL (groupage)</strong> sailings from <strong>Jebel Ali Port, Dubai</strong> to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li><strong>Jeddah Islamic Port</strong> — transit 5–7 days, ideal for western Saudi Arabia (Jeddah, Mecca, Medina, Taif, Yanbu).</li>
              <li><strong>King Abdulaziz Port, Dammam</strong> — transit 3–5 days, best for eastern Saudi Arabia (Dammam, Khobar, Jubail, Riyadh).</li>
              <li><strong>King Abdullah Port (KAEC)</strong> — transit 5–7 days, modern alternative for western KSA imports.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Sea freight Dubai to Saudi includes full ZATCA customs clearance, port handling, last-mile trucking and delivery to your warehouse or address anywhere in the Kingdom.
            </p>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-3 mt-8">✈️ Air Cargo Dubai to Saudi Arabia</h3>
            <p className="text-muted-foreground mb-4">
              When speed matters, <strong>air freight from Dubai to Saudi Arabia</strong> delivers in <strong>24–48 hours</strong>. We fly cargo daily from <strong>Dubai International Airport (DXB)</strong> and <strong>Al Maktoum International (DWC)</strong> to <strong>King Khalid Airport (Riyadh / RUH)</strong>, <strong>King Abdulaziz Airport (Jeddah / JED)</strong> and <strong>King Fahd Airport (Dammam / DMM)</strong>. Air cargo is ideal for high-value electronics, spare parts, medical supplies, perishables and time-critical shipments. We handle airway bills (AWB), Saudi Customs (ZATCA) clearance, COO and last-mile delivery to your final address.
            </p>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-3 mt-8">🛂 Saudi Customs Clearance — We Handle It All</h3>
            <p className="text-muted-foreground mb-4">
              Every Dubai to KSA shipment includes complete <strong>Saudi Customs (ZATCA) clearance</strong>: commercial invoice attestation, packing list, Certificate of Origin (COO), SASO / SABER conformity certificates where applicable, and all Saudi import permits. Our in-house clearing agents at Al Batha, Jeddah Port, Dammam Port and the airports mean zero border delays for our customers.
            </p>
          </article>

          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
            <p className="text-foreground font-bold text-2xl mb-3">Get a quote for road, sea or air cargo Dubai to Saudi Arabia</p>
            <p className="text-muted-foreground mb-6">Tell us your weight, volume and destination city — we'll send the best rate in 5 minutes.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-xl hover:scale-105 transition-all duration-200"
            >
              <MessageCircle className="w-6 h-6" /> WhatsApp +971 55 141 7563
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ — AEO & Answer Engine Optimization
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-center mb-10">Dubai to Saudi Arabia Cargo Shipping</p>
          <div className="max-w-3xl mx-auto space-y-5">
            {faqs.map((faq, i) => (
              <article key={i} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOTTOM CTA — Last chance to convert
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ship from Dubai to Saudi Arabia Today
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-3">
            Road freight in 3–4 days • Express in 2 days • Competitive rates
          </p>
          <p className="text-primary-foreground/85 mb-10">
            Full Saudi customs clearance • Door-to-door • No hidden charges
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xl px-10 py-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-200"
            >
              <MessageCircle className="w-7 h-7" />
              <div className="text-left">
                <div>WhatsApp for Instant Quote</div>
                <div className="text-sm font-normal opacity-90">+971 55 141 7563</div>
              </div>
            </a>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/quote" className="flex items-center gap-2">
                Online Quote Form <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky bottom WhatsApp bar (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#25D366] py-4 px-6 flex items-center justify-between shadow-2xl">
        <div className="text-white">
          <p className="font-bold text-sm">Dubai → Saudi Arabia Cargo</p>
          <p className="text-white/80 text-xs">Get quote in 5 min</p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          className="flex items-center gap-2 bg-white text-[#25D366] font-bold px-5 py-3 rounded-xl text-sm"
        >
          <MessageCircle className="w-5 h-5" /> WhatsApp Now
        </a>
      </div>
    </div>
  );
};

export default DubaiToSaudiCargo;
