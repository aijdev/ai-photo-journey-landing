/**
 * Localized content assembly — zips the non-translatable `APP_SKELETON` (and
 * per-app content skeleton below) from `./site` with the translated strings
 * from the i18n dictionaries into the full, typed structures pages consume.
 */

import type { Locale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";
import { APP_SKELETON, type AppSkeleton } from "./site";

export type AppInfo = AppSkeleton & {
  tagline: string;
  category: string;
  /** Short one-liner used on cards and meta. */
  blurb: string;
  /** Longer paragraph for the app section. */
  description: string;
  /** Headline capabilities to highlight. */
  features: string[];
};

export type FeatureDetail = { title: string; body: string };
export type Step = { title: string; body: string };
export type Faq = { q: string; a: string };
export type DeepLink = { label: string; path: string };

export type AppContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogHeadline: string;
  overview: string[];
  featureDetails: FeatureDetail[];
  howItWorks: Step[];
  useCases: FeatureDetail[];
  faqs: Faq[];
  deepLinks: DeepLink[];
};

export function getApps(locale: Locale): AppInfo[] {
  const c = getDictionary(locale).content.apps;
  return APP_SKELETON.map((skeleton, i) => ({ ...skeleton, ...c[i] }));
}

export function getApp(slug: string, locale: Locale): AppInfo | undefined {
  return getApps(locale).find((a) => a.slug === slug);
}

export function getAppContent(locale: Locale): Record<string, AppContent> {
  const c = getDictionary(locale).content.appDetails;
  const result: Record<string, AppContent> = {};
  APP_SKELETON.forEach((skeleton, i) => {
    result[skeleton.slug] = { slug: skeleton.slug, ...c[i] };
  });
  return result;
}
