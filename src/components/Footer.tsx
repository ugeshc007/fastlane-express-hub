import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/UltrafastCargoY Logo.png";
const Footer = () => {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.coverage"), href: "/coverage" },
    { name: t("nav.track"), href: "/track" },
    { name: t("nav.quote"), href: "/quote" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const serviceLinks = [
    { name: t("services.air"), href: "/services/air-cargo" },
    { name: t("services.sea"), href: "/services/sea-cargo" },
    { name: t("services.land"), href: "/services/land-transport" },
    { name: t("services.express"), href: "/services/express-delivery" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Ultra Fast Cargo - International Shipping from UAE" 
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {isRTL 
                ? "نقدم السرعة دون تنازلات. شريكك الموثوق لحلول الشحن الجوي والبحري والبري عبر الإمارات ودول الخليج والهند والعالم."
                : "Delivering speed without compromise. Your trusted partner for air, sea, and land cargo solutions across UAE, GCC, India, and worldwide."
              }
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg">{t("footer.services")}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className={`w-5 h-5 text-accent shrink-0 mt-0.5 ${isRTL ? 'order-last' : ''}`} />
                <span className="text-primary-foreground/70 text-sm">
                  {isRTL ? "بزنس باي، دبي، الإمارات" : "Business Bay, Dubai, UAE"}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className={`w-5 h-5 text-accent shrink-0 ${isRTL ? 'order-last' : ''}`} />
                <a href="tel:+971XXXXXXX" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  +971 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className={`w-5 h-5 text-accent shrink-0 ${isRTL ? 'order-last' : ''}`} />
                <a href="mailto:info@ultrafastcargo.com" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  info@ultrafastcargo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Ultra Fast Cargo. {t("footer.rights")}.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-primary-foreground/50 hover:text-accent transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="text-primary-foreground/50 hover:text-accent transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
