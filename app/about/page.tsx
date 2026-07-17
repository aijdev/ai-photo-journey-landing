import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { AboutView } from "../views/AboutView";

export const metadata: Metadata = buildMetadata({
  ...getDictionary("en").meta.about,
  path: "/about",
  locale: "en",
});

export default function AboutPage() {
  return <AboutView locale="en" />;
}
