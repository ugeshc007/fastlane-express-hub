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
    "nav.callUs": "Call Us",
    
    // Services
    "services.air": "Air Cargo",
    "services.sea": "Sea Cargo",
    "services.land": "Land Transport",
    "services.express": "Express Delivery",
    "services.title": "Our Cargo Services",
    "services.subtitle": "Comprehensive shipping solutions tailored to your needs. From urgent express deliveries to large-scale freight operations.",
    "services.airDesc": "Fast and secure air freight services worldwide. Perfect for time-sensitive shipments and high-value goods.",
    "services.seaDesc": "Cost-effective ocean freight for large shipments. FCL and LCL options available for all cargo types.",
    "services.landDesc": "Reliable road freight across UAE and GCC. Door-to-door delivery with real-time tracking.",
    "services.expressDesc": "Same-day and next-day delivery options. When every minute counts, we deliver.",
    "services.viewAll": "View All Services",
    
    // Hero
    "hero.badge": "Fast & Reliable Shipping",
    "hero.title1": "Ultra Fast Cargo –",
    "hero.title2": "Delivering Speed",
    "hero.title3": "Without Compromise",
    "hero.subtitle": "Your trusted partner for international cargo solutions. From Dubai to the world – Air, Sea, and Land freight services with unmatched reliability.",
    "hero.cta": "Get a Free Quote",
    "hero.ctaServices": "Our Services",
    "hero.yearsExp": "Years Experience",
    "hero.shipments": "Shipments/Year",
    "hero.countries": "Countries",
    
    // Tracking
    "tracking.title": "Track Your Shipment",
    "tracking.subtitle": "Enter your tracking number to get real-time updates on your cargo.",
    "tracking.placeholder": "Enter tracking number (e.g., UFC123456789)",
    "tracking.button": "Track",
    "tracking.tracking": "Tracking...",
    "tracking.number": "Tracking Number",
    "tracking.status": "Status",
    "tracking.inTransit": "In Transit",
    "tracking.origin": "Origin",
    "tracking.destination": "Destination",
    "tracking.estDelivery": "Est. Delivery",
    "tracking.weightType": "Weight / Type",
    "tracking.timeline": "Shipment Timeline",
    "tracking.emptyTitle": "Track Your Package",
    "tracking.emptySubtitle": "Enter your tracking number above to see the current status of your shipment.",
    "tracking.demo": "(demo)",
    
    // Quote Form
    "quote.title": "Get a Free Quote",
    "quote.subtitle": "Fill out the form below and receive a detailed shipping quote within 2 hours. No hidden fees, transparent pricing.",
    "quote.contactInfo": "Contact Information",
    "quote.shipmentDetails": "Shipment Details",
    "quote.originDest": "Origin & Destination",
    "quote.cargoSpecs": "Cargo Specifications",
    "quote.name": "Full Name",
    "quote.company": "Company Name",
    "quote.email": "Email Address",
    "quote.phone": "Phone Number",
    "quote.serviceType": "Service Type",
    "quote.cargoType": "Cargo Type",
    "quote.selectService": "Select service",
    "quote.selectCargo": "Select cargo type",
    "quote.generalCargo": "General Cargo",
    "quote.fragile": "Fragile Items",
    "quote.perishable": "Perishable Goods",
    "quote.hazardous": "Hazardous Materials",
    "quote.vehicles": "Vehicles",
    "quote.other": "Other",
    "quote.originLabel": "Origin",
    "quote.destLabel": "Destination",
    "quote.country": "Country",
    "quote.city": "City",
    "quote.weight": "Approximate Weight (kg)",
    "quote.dimensions": "Dimensions (L x W x H cm)",
    "quote.additionalDetails": "Additional Details",
    "quote.additionalPlaceholder": "Tell us more about your shipment requirements, special handling instructions, or any questions...",
    "quote.submit": "Request Free Quote",
    "quote.response2hrs": "Response within 2 hours",
    "quote.noHiddenFees": "No hidden fees",
    "quote.free100": "100% Free",
    "quote.successTitle": "Quote Request Submitted!",
    "quote.successDesc": "Our team will contact you within 2 hours with a detailed quote.",
    
    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Have questions? We're here to help. Reach out to our team and we'll respond within 24 hours.",
    "contact.getInTouch": "Get in Touch",
    "contact.getInTouchDesc": "Our friendly team is always ready to assist you with your shipping needs.",
    "contact.office": "Our Office",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Working Hours",
    "contact.hoursValue": "Sunday - Thursday: 9AM - 6PM",
    "contact.hoursClosed": "Friday - Saturday: Closed",
    "contact.whatsapp": "Chat on WhatsApp",
    "contact.whatsappDesc": "Get instant support via WhatsApp. We're available 24/7 for urgent inquiries.",
    "contact.startChat": "Start Chat",
    "contact.sendMessage": "Send Us a Message",
    "contact.subject": "Subject",
    "contact.subjectPlaceholder": "How can we help?",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell us about your shipping needs...",
    "contact.send": "Send Message",
    "contact.successTitle": "Message Sent!",
    "contact.successDesc": "We'll get back to you within 24 hours.",
    
    // Why Choose Us
    "why.title": "Why Choose",
    "why.titleHighlight": "Ultra Fast Cargo?",
    "why.subtitle": "With over 15 years of experience in the logistics industry, we've built a reputation for reliability, speed, and exceptional customer service. Our global network ensures your cargo reaches its destination safely and on time.",
    "why.feature1": "Real-time shipment tracking & updates",
    "why.feature2": "Competitive rates with no hidden fees",
    "why.feature3": "24/7 customer support",
    "why.feature4": "Customs clearance assistance",
    "why.feature5": "Insurance coverage options",
    "why.learnMore": "Learn More About Us",
    "why.fastDelivery": "Fast Delivery",
    "why.fastDeliveryDesc": "Express shipping options for urgent cargo needs",
    "why.secureHandling": "Secure Handling",
    "why.secureHandlingDesc": "Your cargo is safe with our trained professionals",
    "why.globalCoverage": "Global Coverage",
    "why.globalCoverageDesc": "UAE, GCC, India, and 150+ countries worldwide",
    "why.qualityService": "Quality Service",
    "why.qualityServiceDesc": "Award-winning customer support team",
    
    // Coverage Section
    "coverage.title": "Our Global Coverage",
    "coverage.subtitle": "From Dubai to every corner of the world. We serve major destinations across GCC, India, and beyond.",
    "coverage.uaeGcc": "UAE & GCC",
    "coverage.uaeGccDesc": "Complete coverage across Dubai, Abu Dhabi, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.",
    "coverage.india": "INDIA",
    "coverage.indiaDesc": "Extensive network covering all major cities including Mumbai, Delhi, Chennai, Bangalore, and more.",
    "coverage.pakistan": "PAKISTAN",
    "coverage.pakistanDesc": "Comprehensive service to Karachi, Lahore, Islamabad, Peshawar, Faisalabad, and all major cities.",
    "coverage.worldwide": "WORLDWIDE",
    "coverage.worldwideDesc": "Global shipping to 150+ countries across Europe, Americas, Asia, Africa, and Australia.",
    "coverage.daysDelivery": "Days Delivery",
    "coverage.viewMap": "View Full Coverage Map",
    
    // CTA Section
    "cta.title": "Ready to Ship?",
    "cta.titleHighlight": "Get Started Today!",
    "cta.subtitle": "Request a free quote and discover why thousands of businesses trust Ultra Fast Cargo for their shipping needs.",
    "cta.getQuote": "Get Free Quote",
    "cta.callNow": "Call Us Now",
    
    // Footer
    "footer.about": "About Us",
    "footer.aboutDesc": "Delivering speed without compromise. Your trusted partner for air, sea, and land cargo solutions across UAE, GCC, India, and worldwide.",
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
    "common.address": "Business Bay, Dubai, UAE",
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
    "nav.callUs": "اتصل بنا",
    
    // Services
    "services.air": "الشحن الجوي",
    "services.sea": "الشحن البحري",
    "services.land": "النقل البري",
    "services.express": "التوصيل السريع",
    "services.title": "خدمات الشحن لدينا",
    "services.subtitle": "حلول شحن شاملة مصممة لتلبية احتياجاتك. من التوصيلات السريعة العاجلة إلى عمليات الشحن واسعة النطاق.",
    "services.airDesc": "خدمات شحن جوي سريعة وآمنة في جميع أنحاء العالم. مثالية للشحنات الحساسة للوقت والبضائع عالية القيمة.",
    "services.seaDesc": "شحن بحري اقتصادي للشحنات الكبيرة. خيارات حاويات كاملة وجزئية متاحة لجميع أنواع البضائع.",
    "services.landDesc": "شحن بري موثوق عبر الإمارات ودول الخليج. توصيل من الباب إلى الباب مع تتبع مباشر.",
    "services.expressDesc": "خيارات التوصيل في نفس اليوم واليوم التالي. عندما تكون كل دقيقة مهمة، نقوم بالتوصيل.",
    "services.viewAll": "عرض جميع الخدمات",
    
    // Hero
    "hero.badge": "شحن سريع وموثوق",
    "hero.title1": "ألترا فاست كارجو –",
    "hero.title2": "نوفر السرعة",
    "hero.title3": "دون تنازلات",
    "hero.subtitle": "شريكك الموثوق لحلول الشحن الدولي. من دبي إلى العالم – خدمات الشحن الجوي والبحري والبري بموثوقية لا مثيل لها.",
    "hero.cta": "احصل على عرض سعر مجاني",
    "hero.ctaServices": "خدماتنا",
    "hero.yearsExp": "سنوات خبرة",
    "hero.shipments": "شحنة/سنة",
    "hero.countries": "دولة",
    
    // Tracking
    "tracking.title": "تتبع شحنتك",
    "tracking.subtitle": "أدخل رقم التتبع للحصول على تحديثات فورية عن شحنتك.",
    "tracking.placeholder": "أدخل رقم التتبع (مثال: UFC123456789)",
    "tracking.button": "تتبع",
    "tracking.tracking": "جاري التتبع...",
    "tracking.number": "رقم التتبع",
    "tracking.status": "الحالة",
    "tracking.inTransit": "قيد النقل",
    "tracking.origin": "المصدر",
    "tracking.destination": "الوجهة",
    "tracking.estDelivery": "التسليم المتوقع",
    "tracking.weightType": "الوزن / النوع",
    "tracking.timeline": "الجدول الزمني للشحنة",
    "tracking.emptyTitle": "تتبع طردك",
    "tracking.emptySubtitle": "أدخل رقم التتبع أعلاه لمعرفة الحالة الحالية لشحنتك.",
    "tracking.demo": "(تجريبي)",
    
    // Quote Form
    "quote.title": "احصل على عرض سعر مجاني",
    "quote.subtitle": "املأ النموذج أدناه واحصل على عرض سعر مفصل خلال ساعتين. بدون رسوم خفية، أسعار شفافة.",
    "quote.contactInfo": "معلومات الاتصال",
    "quote.shipmentDetails": "تفاصيل الشحنة",
    "quote.originDest": "المصدر والوجهة",
    "quote.cargoSpecs": "مواصفات البضاعة",
    "quote.name": "الاسم الكامل",
    "quote.company": "اسم الشركة",
    "quote.email": "البريد الإلكتروني",
    "quote.phone": "رقم الهاتف",
    "quote.serviceType": "نوع الخدمة",
    "quote.cargoType": "نوع البضاعة",
    "quote.selectService": "اختر الخدمة",
    "quote.selectCargo": "اختر نوع البضاعة",
    "quote.generalCargo": "بضائع عامة",
    "quote.fragile": "مواد قابلة للكسر",
    "quote.perishable": "بضائع قابلة للتلف",
    "quote.hazardous": "مواد خطرة",
    "quote.vehicles": "مركبات",
    "quote.other": "أخرى",
    "quote.originLabel": "المصدر",
    "quote.destLabel": "الوجهة",
    "quote.country": "الدولة",
    "quote.city": "المدينة",
    "quote.weight": "الوزن التقريبي (كجم)",
    "quote.dimensions": "الأبعاد (الطول × العرض × الارتفاع سم)",
    "quote.additionalDetails": "تفاصيل إضافية",
    "quote.additionalPlaceholder": "أخبرنا المزيد عن متطلبات شحنتك، تعليمات المناولة الخاصة، أو أي أسئلة...",
    "quote.submit": "طلب عرض سعر مجاني",
    "quote.response2hrs": "الرد خلال ساعتين",
    "quote.noHiddenFees": "بدون رسوم خفية",
    "quote.free100": "مجاني 100%",
    "quote.successTitle": "تم إرسال طلب العرض!",
    "quote.successDesc": "سيتواصل فريقنا معك خلال ساعتين مع عرض سعر مفصل.",
    
    // Contact Page
    "contact.title": "اتصل بنا",
    "contact.subtitle": "هل لديك أسئلة؟ نحن هنا للمساعدة. تواصل مع فريقنا وسنرد خلال 24 ساعة.",
    "contact.getInTouch": "تواصل معنا",
    "contact.getInTouchDesc": "فريقنا الودود جاهز دائماً لمساعدتك في احتياجات الشحن الخاصة بك.",
    "contact.office": "مكتبنا",
    "contact.phone": "الهاتف",
    "contact.email": "البريد الإلكتروني",
    "contact.hours": "ساعات العمل",
    "contact.hoursValue": "الأحد - الخميس: 9 صباحاً - 6 مساءً",
    "contact.hoursClosed": "الجمعة - السبت: مغلق",
    "contact.whatsapp": "تحدث عبر واتساب",
    "contact.whatsappDesc": "احصل على دعم فوري عبر واتساب. نحن متاحون 24/7 للاستفسارات العاجلة.",
    "contact.startChat": "ابدأ المحادثة",
    "contact.sendMessage": "أرسل لنا رسالة",
    "contact.subject": "الموضوع",
    "contact.subjectPlaceholder": "كيف يمكننا مساعدتك؟",
    "contact.message": "الرسالة",
    "contact.messagePlaceholder": "أخبرنا عن احتياجات الشحن الخاصة بك...",
    "contact.send": "إرسال الرسالة",
    "contact.successTitle": "تم إرسال الرسالة!",
    "contact.successDesc": "سنتواصل معك خلال 24 ساعة.",
    
    // Why Choose Us
    "why.title": "لماذا تختار",
    "why.titleHighlight": "ألترا فاست كارجو؟",
    "why.subtitle": "مع أكثر من 15 عاماً من الخبرة في صناعة الخدمات اللوجستية، بنينا سمعة للموثوقية والسرعة وخدمة العملاء الاستثنائية. شبكتنا العالمية تضمن وصول بضائعك إلى وجهتها بأمان وفي الوقت المحدد.",
    "why.feature1": "تتبع الشحنات والتحديثات في الوقت الفعلي",
    "why.feature2": "أسعار تنافسية بدون رسوم خفية",
    "why.feature3": "دعم العملاء 24/7",
    "why.feature4": "المساعدة في التخليص الجمركي",
    "why.feature5": "خيارات التغطية التأمينية",
    "why.learnMore": "اعرف المزيد عنا",
    "why.fastDelivery": "توصيل سريع",
    "why.fastDeliveryDesc": "خيارات شحن سريعة لاحتياجات الشحن العاجلة",
    "why.secureHandling": "مناولة آمنة",
    "why.secureHandlingDesc": "بضائعك آمنة مع متخصصينا المدربين",
    "why.globalCoverage": "تغطية عالمية",
    "why.globalCoverageDesc": "الإمارات، الخليج، الهند، وأكثر من 150 دولة",
    "why.qualityService": "خدمة عالية الجودة",
    "why.qualityServiceDesc": "فريق دعم عملاء حائز على جوائز",
    
    // Coverage Section
    "coverage.title": "تغطيتنا العالمية",
    "coverage.subtitle": "من دبي إلى كل ركن في العالم. نخدم الوجهات الرئيسية عبر الخليج والهند وما وراءها.",
    "coverage.uaeGcc": "الإمارات والخليج",
    "coverage.uaeGccDesc": "تغطية كاملة عبر دبي، أبوظبي، السعودية، قطر، الكويت، البحرين، وعُمان.",
    "coverage.india": "الهند",
    "coverage.indiaDesc": "شبكة واسعة تغطي جميع المدن الرئيسية بما في ذلك مومباي، دلهي، تشيناي، بنغالور، وغيرها.",
    "coverage.pakistan": "باكستان",
    "coverage.pakistanDesc": "خدمة شاملة إلى كراتشي، لاهور، إسلام آباد، بيشاور، فيصل آباد، وجميع المدن الرئيسية.",
    "coverage.worldwide": "جميع أنحاء العالم",
    "coverage.worldwideDesc": "شحن عالمي إلى أكثر من 150 دولة عبر أوروبا والأمريكتين وآسيا وأفريقيا وأستراليا.",
    "coverage.daysDelivery": "أيام للتوصيل",
    "coverage.viewMap": "عرض خريطة التغطية الكاملة",
    
    // CTA Section
    "cta.title": "جاهز للشحن؟",
    "cta.titleHighlight": "ابدأ اليوم!",
    "cta.subtitle": "اطلب عرض سعر مجاني واكتشف لماذا تثق آلاف الشركات في ألترا فاست كارجو لاحتياجات الشحن الخاصة بهم.",
    "cta.getQuote": "احصل على عرض سعر مجاني",
    "cta.callNow": "اتصل بنا الآن",
    
    // Footer
    "footer.about": "من نحن",
    "footer.aboutDesc": "نقدم السرعة دون تنازلات. شريكك الموثوق لحلول الشحن الجوي والبحري والبري عبر الإمارات ودول الخليج والهند والعالم.",
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
    "common.address": "بزنس باي، دبي، الإمارات",
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
