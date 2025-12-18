import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  MapPin, Phone, Mail, Clock, Send, MessageCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("contact.successTitle"),
      description: t("contact.successDesc"),
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t("contact.title").split(" ")[0]} <span className="text-accent">{t("contact.title").split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  {t("contact.getInTouch")}
                </h2>
                <p className="text-muted-foreground">
                  {t("contact.getInTouchDesc")}
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("contact.office")}</h3>
                    <p className="text-muted-foreground text-sm">
                      {isRTL ? "بزنس باي، دبي" : "Business Bay, Dubai"}<br />
                      {isRTL ? "الإمارات العربية المتحدة" : "United Arab Emirates"}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("contact.phone")}</h3>
                    <a href="tel:+971XXXXXXX" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                      +971 XX XXX XXXX
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("contact.email")}</h3>
                    <a href="mailto:info@ultrafastcargo.com" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                      info@ultrafastcargo.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("contact.hours")}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t("contact.hoursValue")}<br />
                      {t("contact.hoursClosed")}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp CTA */}
              <div className="bg-[#25D366]/10 rounded-2xl p-6 border border-[#25D366]/20">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  <h3 className="font-semibold text-foreground">{t("contact.whatsapp")}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {t("contact.whatsappDesc")}
                </p>
                <Button variant="whatsapp" className="w-full" asChild>
                  <a href="https://wa.me/+971XXXXXXX" target="_blank" rel="noopener noreferrer">
                    {t("contact.startChat")}
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  {t("contact.sendMessage")}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("quote.name")}</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={isRTL ? "محمد أحمد" : "John Doe"}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("quote.email")}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("quote.phone")}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+971 XX XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">{t("contact.subject")}</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder={t("contact.subjectPlaceholder")}
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("contact.messagePlaceholder")}
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
                    <Send className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t("contact.send")}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178509416652!2d55.26080391500894!3d25.185305583895665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d10000000f%3A0xf73e7f16c9a2a7e0!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ultra Fast Cargo Location"
        />
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
