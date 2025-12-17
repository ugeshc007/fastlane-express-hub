import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Package, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    subLinks: [
      { name: "Air Cargo", href: "/services/air-cargo" },
      { name: "Sea Cargo", href: "/services/sea-cargo" },
      { name: "Land Transport", href: "/services/land-transport" },
      { name: "Express Delivery", href: "/services/express-delivery" },
    ]
  },
  { name: "Coverage", href: "/coverage" },
  { name: "Track Shipment", href: "/track" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Package className="w-6 h-6 text-accent-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-foreground leading-tight">Ultra Fast</span>
              <span className="text-xs text-accent font-semibold tracking-wider uppercase">Cargo</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
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
                      <div className="absolute top-full left-0 pt-2 animate-fade-in">
                        <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
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
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+971XXXXXXX" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </Button>
            <Button variant="navPrimary" size="sm" asChild>
              <Link to="/quote">Get Quote</Link>
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
                <div key={link.name}>
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
                    <div className="ml-4 mt-1 space-y-1">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
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
                <Button variant="outline" asChild>
                  <a href="tel:+971XXXXXXX" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </Button>
                <Button variant="navPrimary" asChild>
                  <Link to="/quote" onClick={() => setIsOpen(false)}>Get Quote</Link>
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
