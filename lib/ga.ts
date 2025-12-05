// Lightweight GA4 helper (client-side)
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

const canTrack = () =>
  typeof window !== "undefined" && Boolean(measurementId) && typeof window.gtag === "function";

export const trackPageView = (url: string) => {
  if (!canTrack()) return;
  window.gtag?.("event", "page_view", {
    page_path: url,
    send_to: measurementId,
  });
};

export const trackCTA = (ctaLocation: string) => {
  if (!canTrack()) return;
  window.gtag?.("event", "estimate_cta_click", {
    cta_location: ctaLocation,
    page_path: window.location.pathname,
    send_to: measurementId,
  });
};

export const trackCall = (ctaLocation: string) => {
  if (!canTrack()) return;
  window.gtag?.("event", "call_click", {
    cta_location: ctaLocation,
    page_path: window.location.pathname,
    send_to: measurementId,
  });
};

export const trackFormStart = (formId: string) => {
  if (!canTrack()) return;
  window.gtag?.("event", "form_start", {
    form_id: formId,
    page_path: window.location.pathname,
    send_to: measurementId,
  });
};

export const trackFormSubmit = (formId: string, status: "submitted" | "failed") => {
  if (!canTrack()) return;
  window.gtag?.("event", "form_submit", {
    form_id: formId,
    lead_status: status,
    page_path: window.location.pathname,
    send_to: measurementId,
  });
};

export const isGAEnabled = Boolean(measurementId);

export const trackTestimonialSlide = (direction: "next" | "prev", index: number) => {
  if (!canTrack()) return;
  window.gtag?.("event", "testimonial_slide", {
    direction,
    index,
    page_path: window.location.pathname,
    send_to: measurementId,
  });
};
