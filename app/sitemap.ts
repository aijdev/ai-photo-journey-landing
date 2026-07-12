import type { MetadataRoute } from "next";
import { APPS, SITE_URL } from "./lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...APPS.map((a) => ({
      url: `${SITE_URL}/apps/${a.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...["/about", "/contact", "/privacy"].map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
