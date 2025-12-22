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
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Ultra Fast Cargo - International Shipping from UAE" 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/70 text-xs leading-relaxed">
              {isRTL 
                ? "نقدم السرعة دون تنازلات. شريكك الموثوق لحلول الشحن الجوي والبحري والبري عبر الإمارات ودول الخليج والهند والعالم."
                : "Delivering speed without compromise. Your trusted partner for air, sea, and land cargo solutions across UAE, GCC, India, and worldwide."
              }
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 rounded-md bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-md bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-md bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-md bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm">{t("footer.quickLinks")}</h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-xs">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm">{t("footer.services")}</h4>
            <ul className="space-y-1.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-xs">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm">{t("footer.contact")}</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className={`w-4 h-4 text-accent shrink-0 mt-0.5 ${isRTL ? 'order-last' : ''}`} />
                <span className="text-primary-foreground/70 text-xs">
                  {isRTL ? "بزنس باي، دبي، الإمارات" : "Business Bay, Dubai, UAE"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className={`w-4 h-4 text-accent shrink-0 ${isRTL ? 'order-last' : ''}`} />
                <a href="tel:+971XXXXXXX" className="text-primary-foreground/70 hover:text-accent transition-colors text-xs">
                  +971 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className={`w-4 h-4 text-accent shrink-0 ${isRTL ? 'order-last' : ''}`} />
                <a href="mailto:info@ultrafastcargo.com" className="text-primary-foreground/70 hover:text-accent transition-colors text-xs">
                  info@ultrafastcargo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-primary-foreground/50 text-xs">
            © {new Date().getFullYear()} Ultra Fast Cargo. {t("footer.rights")}.
          </p>
          <div className="flex gap-4 text-xs">
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
