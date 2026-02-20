/**
 * GA4 Conversion Tracking — Ultra Fast Cargo
 * Fires `conversion_event_engagement` events for Google Ads conversion tracking
 * Also fires `qualify_lead` as secondary event for GA4 reporting
 * GA4 Property: G-KFVDHW2FSB (QRCODE)
 */

type TrackingLabel = string;

const fireEvent = (label: TrackingLabel, method: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    // Primary: Google Ads conversion event
    (window as any).gtag("event", "conversion_event_engagement", {
      event_category: method,
      event_label: label,
      value: 1,
      currency: "AED",
      method,
    });
    // Secondary: qualify_lead for GA4 reporting
    (window as any).gtag("event", "qualify_lead", {
      event_category: method,
      event_label: label,
      value: 1,
      currency: "AED",
      method,
    });
  }
};

export const trackWhatsApp = (label: TrackingLabel = "General") =>
  fireEvent(label, "whatsapp");

export const trackPhone = (label: TrackingLabel = "General") =>
  fireEvent(label, "phone");

export const trackFormSubmit = (label: TrackingLabel = "Quote Form") =>
  fireEvent(label, "form_submit");
