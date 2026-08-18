"use client";

import { useEffect } from "react";
import {
  type AnalyticsParameters,
  NEWSLETTER_SIGNUP_CONTEXT_KEY,
  trackAnalyticsEvent,
} from "@/lib/analytics";

const SESSION_DEDUPE_KEY = "genba:newsletter-signup-tracked";

export default function NewsletterSignupEvent() {
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(SESSION_DEDUPE_KEY)) return;
    } catch {
      // Continue without deduplication when session storage is unavailable.
    }

    let signupContext: AnalyticsParameters = {};

    try {
      const storedContext = window.localStorage.getItem(NEWSLETTER_SIGNUP_CONTEXT_KEY);
      if (storedContext) signupContext = JSON.parse(storedContext) as AnalyticsParameters;
      window.localStorage.removeItem(NEWSLETTER_SIGNUP_CONTEXT_KEY);
    } catch {
      // The completion event remains useful without the original form context.
    }

    trackAnalyticsEvent("newsletter_signup", {
      method: "double_opt_in_email",
      ...signupContext,
    });

    try {
      window.sessionStorage.setItem(SESSION_DEDUPE_KEY, "1");
    } catch {
      // Tracking has already completed, so storage failure is safe to ignore.
    }
  }, []);

  return null;
}
