import type { Metadata } from "next";
import { buildMetadata } from "../../lib/seo";
import { APP_SKELETON } from "../../lib/site";
import { getAppContent } from "../../lib/content";
import { AppDetailView } from "../../views/AppDetailView";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return APP_SKELETON.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getAppContent("en")[slug];
  if (!content) return {};
  return buildMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords,
    path: `/apps/${slug}`,
    locale: "en",
  });
}

export default async function AppPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  return <AppDetailView slug={slug} locale="en" />;
}
