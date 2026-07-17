import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { getApps } from "../lib/content";
import { SUPPORT_EMAIL } from "../lib/site";
import { type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

export function ContactView({ locale }: { locale: Locale }) {
  const apps = getApps(locale);
  const p = getDictionary(locale).contactPage;
  const common = getDictionary(locale).common;

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="hero-glow" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <Breadcrumbs current={common.footer.contact} locale={locale} />
            <h1 className="mt-10 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {p.header.titlePre}{" "}
              <span className="text-spectrum">{p.header.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-lg">
              {p.header.intro}
            </p>
          </div>
        </section>

        {/* General */}
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {p.general.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            {p.general.description}
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            {SUPPORT_EMAIL}
          </a>
        </section>

        {/* Per-app support */}
        <section className="border-t border-border/60 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {p.appSupport.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
              {p.appSupport.description}
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {apps.map((app) => {
                const domainLabel = app.domain.replace(/^https?:\/\//, "");
                return (
                  <div
                    key={app.slug}
                    className="rounded-2xl border border-border bg-surface p-6"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={app.logo}
                        alt={`${app.name} app icon`}
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-xl border border-white/10"
                      />
                      <h3 className="font-semibold tracking-tight">
                        {app.name}
                      </h3>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm">
                      <li>
                        <a
                          href={`mailto:support@${domainLabel}`}
                          className="text-muted transition-colors hover:text-foreground"
                        >
                          support@{domainLabel}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`${app.domain}/contact`}
                          target="_blank"
                          rel="noopener"
                          className="text-muted transition-colors hover:text-foreground"
                        >
                          {domainLabel}/contact
                        </a>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
