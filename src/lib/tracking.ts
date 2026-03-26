/**
 * GA4 + Meta Pixel Conversion Tracking — Ultra Fast Cargo
 * Fires GA4 events for Google Ads + Meta Pixel Lead events for Facebook Ads
 * GA4 Property: G-KFVDHW2FSB | Meta Pixel: 2022932401962768
 */

type TrackingLabel = string;

const fireFbq = (eventName: string, data: Record<string, string>) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", eventName, data);
  }
};

const fireEvent = (label: TrackingLabel, method: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "conversion_event_engagement", {
      event_category: method,
      event_label: label,
      value: 1,
      currency: "AED",
      method,
    });
    (window as any).gtag("event", "qualify_lead", {
      event_category: method,
      event_label: label,
      value: 1,
      currency: "AED",
      method,
    });
  }

  // Meta Pixel: fire Lead event
  fireFbq("Lead", {
    content_name: label,
    content_category: method,
    currency: "AED",
    value: "1",
  });
};

export const trackWhatsApp = (label: TrackingLabel = "General") =>
  fireEvent(label, "whatsapp");

export const trackPhone = (label: TrackingLabel = "General") =>
  fireEvent(label, "phone");

export const trackFormSubmit = (label: TrackingLabel = "Quote Form") =>
  fireEvent(label, "form_submit");
