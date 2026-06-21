import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from "lucide-react";
import { trackWhatsApp, trackPhone } from "@/lib/tracking";

const WHATSAPP_NUMBER = "971568962512";
const PHONE_NUMBER = "971551417563";

const Contact = () => {
  const { t, isRTL } = useLanguage();

  const prefilled = isRTL
    ? "مرحباً، أود التواصل معكم بخصوص خدمات الشحن.\n• الاسم:\n• رقم الهاتف:\n• الموضوع:\n• الرسالة:"
    : "Hello, I would like to get in touch about your shipping services.\n• Name:\n• Phone:\n• Subject:\n• Message:";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prefilled)}`;

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
                      {isRTL 
                        ? "مكتب رقم M08، الطابق الميزانين" 
                        : "Office No M08, Mezzanine Floor"}<br />
                      {isRTL 
                        ? "مبنى برج نهر فيوز، دبي، الإمارات"
                        : "Burj-Nahar Views Building, Dubai, UAE"}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("contact.phone")}</h3>
                    <a href={`tel:+${PHONE_NUMBER}`} onClick={() => trackPhone("Contact Page")} className="text-muted-foreground text-sm hover:text-accent transition-colors">
                      +971 55 141 7563
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
                   <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp("Contact Page")}>
                    {t("contact.startChat")}
                  </a>
                </Button>
              </div>
            </div>

            {/* Direct Contact CTA */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm text-center h-full flex flex-col justify-center">
                <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-[#25D366]" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {isRTL ? "تواصل معنا مباشرة" : "Contact Us Directly"}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  {isRTL
                    ? "نحن متاحون على واتساب للرد الفوري على استفساراتك. اضغط الزر أدناه للبدء."
                    : "We are available on WhatsApp for instant replies to your inquiries. Tap the button below to get started."}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <Button variant="whatsapp" size="xl" asChild>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsApp("Contact Page CTA")}
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      {isRTL ? "ابدأ المحادثة على واتساب" : "Chat on WhatsApp"}
                    </a>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <a
                      href={`tel:+${PHONE_NUMBER}`}
                      onClick={() => trackPhone("Contact Page CTA")}
                      className="flex items-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      {isRTL ? "اتصل بنا" : "Call Us"}
                    </a>
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    {isRTL ? "رد سريع" : "Fast Response"}
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    {isRTL ? "دعم على مدار الساعة" : "24/7 Support"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted">
        <div className="h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5847123456789!2d55.3088!3d25.2697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ccfa6c82b27%3A0x2b55bb8a9b4f0b5c!2sBurj%20Nahar!5e0!3m2!1sen!2sae!4v1705000000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ultra Fast Cargo - Burj Nahar Views Building, Dubai"
          />
        </div>
        <div className="flex justify-center py-6">
          <a
            href="https://maps.app.goo.gl/vyqFx9J7wcn4Xkpb9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
          >
            <MapPin className="w-5 h-5" />
            {t("contact.getDirections")}
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
