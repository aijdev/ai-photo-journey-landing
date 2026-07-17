import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { type Locale, prefixedLocales } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/getDictionary";
import { buildMetadata } from "../../../lib/seo";
import { APP_SKELETON } from "../../../lib/site";
import { getAppContent } from "../../../lib/content";
import { AppDetailView } from "../../../views/AppDetailView";

export function generateStaticParams() {
  return prefixedLocales.flatMap((lang) =>
    APP_SKELETON.map((a) => ({ lang, slug: a.slug })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const content = getAppContent(locale)[slug];
  if (!content) return {};
  return buildMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords,
    path: `/apps/${slug}`,
    locale,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!APP_SKELETON.some((a) => a.slug === slug)) notFound();
  return <AppDetailView slug={slug} locale={lang as Locale} />;
}
