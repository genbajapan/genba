export type AnalyticsParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, parameters?: AnalyticsParameters) => void;
    dataLayer?: unknown[];
  }
}

export const NEWSLETTER_SIGNUP_CONTEXT_KEY = "genba:newsletter-signup-context";

export function getCampaignParameters() {
  if (typeof window === "undefined") return {};

  const search = new URLSearchParams(window.location.search);
  return Object.fromEntries(
    ["utm_source", "utm_medium", "utm_campaign", "utm_content"]
      .map((key) => [key, search.get(key)] as const)
      .filter((entry): entry is [string, string] => Boolean(entry[1])),
  );
}

export function trackAnalyticsEvent(eventName: string, parameters: AnalyticsParameters = {}) {
  if (typeof window === "undefined") return;

  if (!window.gtag) {
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = (command, queuedEventName, queuedParameters) => {
      window.dataLayer?.push([command, queuedEventName, queuedParameters]);
    };
  }

  window.gtag("event", eventName, {
    page_path: window.location.pathname,
    ...getCampaignParameters(),
    ...parameters,
  });
}
