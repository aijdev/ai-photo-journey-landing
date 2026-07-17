import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { getApps } from "../lib/content";
import { SUPPORT_EMAIL } from "../lib/site";
import { type Locale, localizedPath } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

export function AboutView({ locale }: { locale: Locale }) {
  const apps = getApps(locale);
  const p = getDictionary(locale).aboutPage;
  const common = getDictionary(locale).common;

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="hero-glow" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <Breadcrumbs current={common.nav.about} locale={locale} />
            <h1 className="mt-10 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {p.header.titlePre}{" "}
              <span className="text-spectrum">{p.header.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-lg">
              {p.header.intro}
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {p.story.heading}
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
            {p.story.paragraphs.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-border/60 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {p.values.heading}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {p.values.items.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <h3 className="text-lg font-semibold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {value.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The apps */}
        <section className="border-t border-border/60 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {p.family.heading}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {apps.map((app) => (
                <a
                  key={app.slug}
                  href={localizedPath(`/apps/${app.slug}`, locale)}
                  className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:bg-surface-2"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={app.logo}
                      alt={`${app.name} app icon`}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-xl border border-white/10"
                    />
                    <div>
                      <h3 className="font-semibold tracking-tight">
                        {app.name}
                      </h3>
                      <span
                        className="text-xs font-medium"
                        style={{ color: app.accent }}
                      >
                        {app.category}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {app.blurb}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-t border-border/60 py-16">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {p.sayHello.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              {p.sayHello.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={localizedPath("/contact", locale)}
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                {p.sayHello.contactCta}
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:bg-surface-2"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
