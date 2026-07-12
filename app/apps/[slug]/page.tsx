import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { APPS, SITE_NAME, SITE_URL } from "../../lib/site";
import { APP_CONTENT } from "../../lib/appContent";
import { appSchema, breadcrumbSchema, faqSchema } from "../../lib/schema";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return APPS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = APPS.find((a) => a.slug === slug);
  const content = APP_CONTENT[slug];
  if (!app || !content) return {};
  const path = `/apps/${app.slug}`;
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: content.metaTitle,
      description: content.metaDescription,
      url: `${SITE_URL}${path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
    },
  };
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 10h10m0 0l-4-4m4 4l-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 12.54c-.02-2.06 1.68-3.05 1.76-3.1-0.96-1.4-2.45-1.6-2.98-1.62-1.27-.13-2.48.75-3.12.75-.64 0-1.64-.73-2.7-.71-1.39.02-2.67.81-3.38 2.05-1.44 2.5-.37 6.2 1.03 8.23.69.99 1.51 2.11 2.58 2.07 1.03-.04 1.43-.67 2.68-.67 1.25 0 1.6.67 2.7.65 1.11-.02 1.82-1.01 2.5-2.01.79-1.15 1.11-2.27 1.13-2.33-.02-.01-2.17-.83-2.19-3.28zM15.02 6.3c.57-.69.95-1.65.85-2.6-.82.03-1.81.54-2.4 1.23-.53.61-.99 1.59-.86 2.52.91.07 1.84-.46 2.41-1.15z" />
    </svg>
  );
}

/**
 * Deep links into each app's own marketing site. Linking to inner pages (not
 * just the homepage) passes hub authority to the pages that rank and convert.
 */
const DEEP_LINKS: Record<string, { label: string; path: string }[]> = {
  fxai: [
    { label: "All features", path: "/features" },
    { label: "Photo Restore", path: "/features/restore" },
    { label: "Restoration guide", path: "/restoration-guide" },
    { label: "FAQ", path: "/faq" },
  ],
  photix: [
    { label: "All features", path: "/features" },
    { label: "AI Image Generator", path: "/features/ai-image-generator" },
    { label: "Avatar ideas", path: "/avatar-ideas" },
    { label: "FAQ", path: "/faq" },
  ],
  videx: [
    { label: "All features", path: "/features" },
    { label: "AI Video Generator", path: "/features/ai-video-generator" },
    { label: "Video ideas", path: "/video-ideas" },
    { label: "FAQ", path: "/faq" },
  ],
  swapto: [
    { label: "All features", path: "/features" },
    { label: "AI Face Swap", path: "/features/ai-face-swap" },
    { label: "Face swap ideas", path: "/face-swap-ideas" },
    { label: "FAQ", path: "/faq" },
  ],
  picalive: [
    { label: "All features", path: "/features" },
    { label: "How it works", path: "/how-it-works" },
    { label: "Animation ideas", path: "/animation-ideas" },
    { label: "FAQ", path: "/faq" },
  ],
};

export default async function AppPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const app = APPS.find((a) => a.slug === slug);
  const content = APP_CONTENT[slug];
  if (!app || !content) notFound();

  const gradient = `linear-gradient(135deg, ${app.accent}, ${app.accentTo})`;
  const domainLabel = app.domain.replace(/^https?:\/\//, "");
  const related = APPS.filter((a) => a.slug !== app.slug);

  const jsonLd = [
    appSchema(app, content.metaDescription),
    breadcrumbSchema(app),
    faqSchema(content.faqs),
  ];

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden="true"
            style={{
              background: `radial-gradient(48rem 30rem at 20% -10%, ${app.accent}26 0%, transparent 60%)`,
            }}
          />
          <div className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <Breadcrumbs current={app.name} />

            <div className="mt-10 flex flex-col items-start gap-12 lg:flex-row lg:items-center">
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4">
                  <img
                    src={app.logo}
                    alt={`${app.name} app icon`}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-[15px] border border-white/10 shadow-lg"
                  />
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: app.accent }}
                  >
                    {app.category}
                  </span>
                </div>

                <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  {app.name} — {app.tagline}
                </h1>
                <p className="mt-5 text-[15px] leading-relaxed text-muted">
                  {content.overview[0]}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={app.appStore}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
                    style={{ backgroundImage: gradient }}
                  >
                    <AppStoreIcon />
                    Download on the App Store
                  </a>
                  <a
                    href={app.domain}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
                  >
                    Visit {domainLabel}
                    <ArrowIcon />
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex items-end justify-center gap-3 sm:gap-4">
                  {app.shots.slice(0, 3).map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${app.name} screenshot ${i + 1}`}
                      width={300}
                      height={650}
                      className={`w-1/3 max-w-[190px] rounded-[18px] border border-white/10 shadow-2xl ${
                        i === 1 ? "translate-y-[-16px]" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What is {app.name}?
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
            {content.overview.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-border/60 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Features
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {content.featureDetails.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <span
                    className="block h-1 w-10 rounded-full"
                    style={{ backgroundImage: gradient }}
                  />
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-border/60 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              How {app.name} works
            </h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {content.howItWorks.map((s, i) => (
                <li
                  key={s.title}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{ backgroundImage: gradient }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Use cases */}
        <section className="border-t border-border/60 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What you can do with {app.name}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {content.useCases.map((u) => (
                <div key={u.title} className="flex gap-4">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundImage: gradient }}
                  />
                  <div>
                    <h3 className="font-semibold tracking-tight">{u.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                      {u.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border/60 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {app.name} FAQ
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface">
              {content.faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                    {f.q}
                    <span
                      className="text-muted-dim transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Deep links into the app's own site */}
        <section className="border-t border-border/60 py-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Explore {app.name} in depth
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
              The full story lives on {domainLabel} — feature deep-dives,
              guides, and answers to every question.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {(DEEP_LINKS[app.slug] ?? []).map((link) => (
                <a
                  key={link.path}
                  href={`${app.domain}${link.path}`}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
                >
                  {link.label}
                  <ArrowIcon />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/60 py-16">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Try {app.name} today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              {app.blurb} Free to download on the App Store.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={app.appStore}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
                style={{ backgroundImage: gradient }}
              >
                <AppStoreIcon />
                Download on the App Store
              </a>
              <a
                href={app.domain}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:bg-surface-2"
              >
                Visit {domainLabel}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* Related apps — internal linking */}
        <section className="border-t border-border/60 py-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="text-xl font-semibold tracking-tight">
              More {SITE_NAME} apps
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/apps/${a.slug}`}
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:bg-surface-2"
                >
                  <img
                    src={a.logo}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-[11px] border border-white/10"
                  />
                  <span>
                    <span className="block font-semibold tracking-tight">
                      {a.name}
                    </span>
                    <span className="block text-xs text-muted">
                      {a.category}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
