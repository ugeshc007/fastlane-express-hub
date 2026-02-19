/**
 * GA4 Conversion Tracking — Ultra Fast Cargo
 * Fires `qualify_lead` events imported by Google Ads as UFC(web) qualify_lead
 * GA4 Property: G-KFVDHW2FSB (QRCODE)
 */

type TrackingLabel = string;

const fireEvent = (label: TrackingLabel, method: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
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
