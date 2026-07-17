import type { Metadata } from "next";
import { SITE_NAME } from "./site";
import { type Locale, alternatesFor, localizedUrl, ogLocaleMap } from "../i18n/config";

type BuildMetadataInput = {
  title: string;
  description: string;
  /** Root-relative path (e.g. "/about"). Localized + used for canonical/OG. */
  path: string;
  locale: Locale;
  keywords?: string[];
  /**
   * Marketing pages get reciprocal hreflang alternates. Legal pages (privacy,
   * English only) set this false so they advertise a single English canonical.
   */
  alternates?: boolean;
  /**
   * When true, use `title` verbatim instead of the root layout's "%s — AI
   * Photo Journey" template. The home page's title already includes the site
   * name, so it must bypass the template to avoid "X — AI Photo Journey — AI
   * Photo Journey".
   */
  absoluteTitle?: boolean;
};

/**
 * Produces a consistent Metadata object for a page: a self-referencing
 * localized canonical, reciprocal hreflang alternates (incl. x-default), and
 * an OpenGraph block with og:locale + alternates.
 */
export function buildMetadata({
  title,
  description,
  path,
  locale,
  keywords,
  alternates = true,
  absoluteTitle,
}: BuildMetadataInput): Metadata {
  const url = localizedUrl(path, locale);
  const languages = alternates ? alternatesFor(path) : undefined;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      locale: ogLocaleMap[locale],
      alternateLocale: Object.values(ogLocaleMap).filter(
        (l) => l !== ogLocaleMap[locale],
      ),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
