/**
 * Structured data (JSON-LD) for rich results in search engines.
 * Site-wide schema is emitted in the root layout; per-app schema is emitted on
 * each `/apps/[slug]` detail page (and its localized `/[lang]/apps/[slug]`).
 */
import { APP_SKELETON, RATING, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./site";
import { getApps, type AppInfo, type Faq } from "./content";
import {
  type Locale,
  defaultLocale,
  hreflangMap,
  localizedUrl,
} from "../i18n/config";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description: SITE_DESCRIPTION,
    sameAs: APP_SKELETON.map((a) => a.domain),
  };
}

export function websiteSchema(locale: Locale = defaultLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: hreflangMap[locale],
  };
}

/** An ItemList of every app, each modeled as a SoftwareApplication. */
export function appsListSchema(locale: Locale = defaultLocale) {
  const apps = getApps(locale);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} apps`,
    itemListElement: apps.map((app, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        name: app.name,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "iOS",
        description: app.blurb,
        url: app.domain,
        downloadUrl: app.appStore,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: RATING,
          ratingCount: 1250,
          bestRating: "5",
        },
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
    })),
  };
}

/** A single app modeled as a SoftwareApplication, for its detail page. */
export function appSchema(
  app: AppInfo,
  description: string,
  locale: Locale = defaultLocale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "iOS",
    description,
    inLanguage: hreflangMap[locale],
    url: localizedUrl(`/apps/${app.slug}`, locale),
    sameAs: app.domain,
    downloadUrl: app.appStore,
    screenshot: app.shots.map((s) => `${SITE_URL}${s}`),
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING,
      ratingCount: 1250,
      bestRating: "5",
    },
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

/** Breadcrumb trail: Home › app name. */
export function breadcrumbSchema(app: AppInfo, locale: Locale = defaultLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: localizedUrl("/", locale) },
      {
        "@type": "ListItem",
        position: 2,
        name: app.name,
        item: localizedUrl(`/apps/${app.slug}`, locale),
      },
    ],
  };
}

/** FAQPage schema from an app's question/answer pairs. */
export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
