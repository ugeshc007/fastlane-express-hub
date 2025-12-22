import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product" | "service";
  structuredData?: object | object[];
  noIndex?: boolean;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage = "https://ultrafastcargo.com/og-image.jpg",
  ogType = "website",
  structuredData,
  noIndex = false,
}: SEOHeadProps) => {
  const location = useLocation();
  const { language } = useLanguage();
  const baseUrl = "https://ultrafastcargo.com";
  const fullUrl = `${baseUrl}${canonicalPath || location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = `${title} | Ultra Fast Cargo`;

    // Update meta tags
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);
    updateMeta("robots", noIndex ? "noindex,nofollow" : "index,follow");

    // Open Graph
    updateMeta("og:title", `${title} | Ultra Fast Cargo`, true);
    updateMeta("og:description", description, true);
    updateMeta("og:url", fullUrl, true);
    updateMeta("og:type", ogType, true);
    updateMeta("og:image", ogImage, true);
    updateMeta("og:locale", language === "ar" ? "ar_AE" : "en_US", true);
    updateMeta("og:site_name", "Ultra Fast Cargo", true);

    // Twitter
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", `${title} | Ultra Fast Cargo`);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", ogImage);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // Alternate language links for AEO
    const updateAlternate = (hreflang: string, href: string) => {
      let link = document.querySelector(`link[hreflang="${hreflang}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };
    updateAlternate("en", `${baseUrl}${location.pathname}`);
    updateAlternate("ar", `${baseUrl}${location.pathname}?lang=ar`);
    updateAlternate("x-default", `${baseUrl}${location.pathname}`);

    // Structured Data (JSON-LD)
    const existingScripts = document.querySelectorAll('script[data-seo="structured-data"]');
    existingScripts.forEach((script) => script.remove());

    if (structuredData) {
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      dataArray.forEach((data) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo", "structured-data");
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }

    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll('script[data-seo="structured-data"]');
      scripts.forEach((script) => script.remove());
    };
  }, [title, description, keywords, fullUrl, ogImage, ogType, structuredData, noIndex, language, location.pathname]);

  return null;
};

// Pre-built structured data generators for AEO
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ultra Fast Cargo",
  alternateName: "UFC Cargo",
  url: "https://ultrafastcargo.com",
  logo: "https://ultrafastcargo.com/logo.png",
  description: "International cargo and logistics company based in UAE offering air, sea, and land freight services worldwide.",
  foundingDate: "2009",
  foundingLocation: "Dubai, UAE",
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Pakistan" },
    { "@type": "GeoShape", name: "Worldwide" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971-XXX-XXXX",
      contactType: "customer service",
      availableLanguage: ["English", "Arabic", "Hindi", "Urdu"],
      areaServed: "AE",
    },
  ],
  sameAs: [
    "https://www.facebook.com/ultrafastcargo",
    "https://www.instagram.com/ultrafastcargo",
    "https://www.linkedin.com/company/ultrafastcargo",
    "https://twitter.com/ultrafastcargo",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Quoz Industrial Area",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "XXXXX",
    addressCountry: "AE",
  },
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ultrafastcargo.com/#localbusiness",
  name: "Ultra Fast Cargo Dubai",
  image: "https://ultrafastcargo.com/office.jpg",
  telephone: "+971-XXX-XXXX",
  email: "info@ultrafastcargo.com",
  url: "https://ultrafastcargo.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Quoz Industrial Area",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "XXXXX",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.2048,
    longitude: 55.2708,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1250",
  },
});

export const generateServiceSchema = (services: Array<{name: string; description: string; url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Cargo and Logistics Services",
  provider: {
    "@type": "Organization",
    name: "Ultra Fast Cargo",
    url: "https://ultrafastcargo.com",
  },
  areaServed: {
    "@type": "GeoShape",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Shipping Services",
    itemListElement: services.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: service.url,
      },
    })),
  },
});

export const generateFAQSchema = (faqs: Array<{question: string; answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const generateBreadcrumbSchema = (items: Array<{name: string; url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://ultrafastcargo.com${item.url}`,
  })),
});

export const generateWebPageSchema = (page: {
  name: string;
  description: string;
  url: string;
  dateModified?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: page.name,
  description: page.description,
  url: `https://ultrafastcargo.com${page.url}`,
  dateModified: page.dateModified || new Date().toISOString(),
  inLanguage: ["en-US", "ar-AE"],
  isPartOf: {
    "@type": "WebSite",
    name: "Ultra Fast Cargo",
    url: "https://ultrafastcargo.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Ultra Fast Cargo",
    logo: {
      "@type": "ImageObject",
      url: "https://ultrafastcargo.com/logo.png",
    },
  },
});

export const generateHowToSchema = (steps: Array<{name: string; text: string}>) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Ship with Ultra Fast Cargo",
  description: "Step-by-step guide to shipping your cargo with Ultra Fast Cargo from UAE to anywhere in the world.",
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
});

export default SEOHead;
