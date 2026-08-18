"use client";

import { useEffect } from "react";
import {
  getCampaignParameters,
  NEWSLETTER_SIGNUP_CONTEXT_KEY,
  trackAnalyticsEvent,
} from "@/lib/analytics";

function getTrackingParameters(element: HTMLElement) {
  const anchor = element instanceof HTMLAnchorElement ? element : element.closest<HTMLAnchorElement>("a");

  return {
    cta_location: element.dataset.analyticsLocation,
    company_slug: element.dataset.analyticsCompanySlug,
    job_id: element.dataset.analyticsJobId,
    link_url: anchor?.href,
  };
}

export default function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const trackedElement = event.target.closest<HTMLElement>("[data-analytics-event]");
      const eventName = trackedElement?.dataset.analyticsEvent;
      if (!trackedElement || !eventName) return;

      trackAnalyticsEvent(eventName, getTrackingParameters(trackedElement));
    };

    const handleSubmit = (event: SubmitEvent) => {
      if (!(event.target instanceof HTMLFormElement)) return;

      const container = event.target.closest<HTMLElement>("[data-newsletter-form]");
      if (!container) return;

      const context = {
        signup_origin_path: window.location.pathname,
        signup_origin_location: container.dataset.analyticsLocation ?? "unknown",
        company_slug: container.dataset.analyticsCompanySlug,
        ...getCampaignParameters(),
      };

      trackAnalyticsEvent("newsletter_form_submit", context);

      try {
        window.localStorage.setItem(NEWSLETTER_SIGNUP_CONTEXT_KEY, JSON.stringify(context));
      } catch {
        // Analytics must never block the Kit form when storage is unavailable.
      }
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("submit", handleSubmit, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("submit", handleSubmit, true);
    };
  }, []);

  return null;
}
