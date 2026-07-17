import type { Metadata } from "next";
import { buildMetadata } from "./lib/seo";
import { getDictionary } from "./i18n/getDictionary";
import { HomeView } from "./views/HomeView";

export const metadata: Metadata = buildMetadata({
  ...getDictionary("en").meta.home,
  path: "/",
  locale: "en",
  absoluteTitle: true,
});

export default function Home() {
  return <HomeView locale="en" />;
}
