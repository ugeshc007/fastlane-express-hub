import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/UltrafastCargoY Logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { t, isRTL } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { 
      name: t("nav.services"), 
      href: "/services",
      subLinks: [
        { name: t("services.air"), href: "/services/air-cargo" },
        { name: t("services.sea"), href: "/services/sea-cargo" },
        { name: t("services.land"), href: "/services/land-transport" },
        { name: t("services.express"), href: "/services/express-delivery" },
      ]
    },
    { name: t("nav.coverage"), href: "/coverage" },
    { name: t("nav.track"), href: "/track" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Ultra Fast Cargo - International Shipping from UAE" 
              className="h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.subLinks ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={link.href}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        isActive(link.href) 
                          ? "text-accent bg-accent/10" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {servicesOpen && (
                      <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} pt-2 animate-fade-in`}>
                        <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.href}
                              to={subLink.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      isActive(link.href) 
                        ? "text-accent bg-accent/10" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+971XXXXXXX" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {isRTL ? "اتصل بنا" : "Call Us"}
              </a>
            </Button>
            <Button variant="navPrimary" size="sm" asChild>
              <Link to="/quote">{t("nav.quote")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    to={link.href}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive(link.href) 
                        ? "text-accent bg-accent/10" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className={`${isRTL ? 'mr-4' : 'ml-4'} mt-1 space-y-1`}>
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          to={subLink.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <LanguageSwitcher />
                <Button variant="outline" asChild>
                  <a href="tel:+971XXXXXXX" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    {isRTL ? "اتصل بنا" : "Call Us"}
                  </a>
                </Button>
                <Button variant="navPrimary" asChild>
                  <Link to="/quote" onClick={() => setIsOpen(false)}>{t("nav.quote")}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
