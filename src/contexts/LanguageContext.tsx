import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.coverage": "Coverage",
    "nav.contact": "Contact",
    "nav.track": "Track Shipment",
    "nav.quote": "Get Quote",
    
    // Services
    "services.air": "Air Cargo",
    "services.sea": "Sea Cargo",
    "services.land": "Land Transport",
    "services.express": "Express Delivery",
    
    // Hero
    "hero.title": "Fast & Reliable Cargo Services",
    "hero.subtitle": "Your trusted partner for global logistics solutions",
    "hero.cta": "Get Started",
    
    // Tracking
    "tracking.title": "Track Your Shipment",
    "tracking.placeholder": "Enter tracking number",
    "tracking.button": "Track",
    
    // Quote
    "quote.title": "Get a Free Quote",
    "quote.name": "Full Name",
    "quote.email": "Email Address",
    "quote.phone": "Phone Number",
    "quote.origin": "Origin City",
    "quote.destination": "Destination City",
    "quote.weight": "Package Weight (kg)",
    "quote.service": "Service Type",
    "quote.message": "Additional Details",
    "quote.submit": "Request Quote",
    
    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with our team",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Working Hours",
    "contact.send": "Send Message",
    
    // Footer
    "footer.about": "About Us",
    "footer.services": "Our Services",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact Us",
    "footer.rights": "All rights reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    
    // Common
    "common.learnMore": "Learn More",
    "common.readMore": "Read More",
    "common.submit": "Submit",
    "common.loading": "Loading...",
    "common.success": "Success!",
    "common.error": "Error",
  },
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.coverage": "التغطية",
    "nav.contact": "اتصل بنا",
    "nav.track": "تتبع الشحنة",
    "nav.quote": "طلب عرض سعر",
    
    // Services
    "services.air": "الشحن الجوي",
    "services.sea": "الشحن البحري",
    "services.land": "النقل البري",
    "services.express": "التوصيل السريع",
    
    // Hero
    "hero.title": "خدمات شحن سريعة وموثوقة",
    "hero.subtitle": "شريكك الموثوق لحلول الخدمات اللوجستية العالمية",
    "hero.cta": "ابدأ الآن",
    
    // Tracking
    "tracking.title": "تتبع شحنتك",
    "tracking.placeholder": "أدخل رقم التتبع",
    "tracking.button": "تتبع",
    
    // Quote
    "quote.title": "احصل على عرض سعر مجاني",
    "quote.name": "الاسم الكامل",
    "quote.email": "البريد الإلكتروني",
    "quote.phone": "رقم الهاتف",
    "quote.origin": "مدينة المصدر",
    "quote.destination": "مدينة الوجهة",
    "quote.weight": "وزن الطرد (كجم)",
    "quote.service": "نوع الخدمة",
    "quote.message": "تفاصيل إضافية",
    "quote.submit": "طلب عرض سعر",
    
    // Contact
    "contact.title": "اتصل بنا",
    "contact.subtitle": "تواصل مع فريقنا",
    "contact.address": "العنوان",
    "contact.phone": "الهاتف",
    "contact.email": "البريد الإلكتروني",
    "contact.hours": "ساعات العمل",
    "contact.send": "إرسال الرسالة",
    
    // Footer
    "footer.about": "من نحن",
    "footer.services": "خدماتنا",
    "footer.quickLinks": "روابط سريعة",
    "footer.contact": "اتصل بنا",
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    
    // Common
    "common.learnMore": "اعرف المزيد",
    "common.readMore": "اقرأ المزيد",
    "common.submit": "إرسال",
    "common.loading": "جاري التحميل...",
    "common.success": "تم بنجاح!",
    "common.error": "خطأ",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  const isRTL = language === "ar";

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
