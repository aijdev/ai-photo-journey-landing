import type { MetadataRoute } from "next";
import { APP_SKELETON, SITE_URL } from "./lib/site";
import { alternatesFor, locales, localizedUrl } from "./i18n/config";

export const dynamic = "force-static";

type Route = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

export default function sitemap(): MetadataRoute.Sitemap {
  // Marketing routes are localized into every locale with reciprocal hreflang
  // alternates so search engines index each language and connect the set.
  const marketingRoutes: Route[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    ...APP_SKELETON.map((a) => ({
      path: `/apps/${a.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    { path: "/about", priority: 0.5, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  ];

  // Privacy is legal content and stays English-only.
  const legalRoutes: Route[] = [
    { path: "/privacy", priority: 0.4, changeFrequency: "yearly" },
  ];

  const localizedEntries: MetadataRoute.Sitemap = marketingRoutes.flatMap(
    (route) => {
      const languages = alternatesFor(route.path);
      return locales.map((locale) => ({
        url: localizedUrl(route.path, locale),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages },
      }));
    },
  );

  const legalEntries: MetadataRoute.Sitemap = legalRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...localizedEntries, ...legalEntries];
}
