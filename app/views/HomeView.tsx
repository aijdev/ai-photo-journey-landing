import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AppSection } from "../components/AppSection";
import { getApps } from "../lib/content";
import { RATING, USERS } from "../lib/site";
import { type Locale, localizedPath } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

export function HomeView({ locale }: { locale: Locale }) {
  const apps = getApps(locale);
  const h = getDictionary(locale).home;

  const stats = [
    { value: `${apps.length}`, label: h.stats.apps },
    { value: USERS, label: h.stats.users },
    { value: `${RATING}★`, label: h.stats.rating },
    { value: "iOS", label: h.stats.platform },
  ];

  const appsHref = `${localizedPath("/", locale)}#apps`;
  const firstAppHref = `${localizedPath("/", locale)}#${apps[0].slug}`;

  return (
    <>
      <Header locale={locale} />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="hero-glow" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-20 text-center sm:px-8 sm:pb-24 sm:pt-28">
            <p className="reveal mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-spectrum" />
              {h.badge.replace("{count}", String(apps.length))}
            </p>

            <h1 className="reveal mx-auto mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              {h.heroTitlePre}{" "}
              <span className="text-spectrum">{h.heroTitleAccent}</span>
            </h1>

            <p className="reveal mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
              {h.heroDescription}
            </p>

            <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={appsHref}
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                {h.exploreCta}
              </a>
              <a
                href={firstAppHref}
                className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
              >
                {h.seeWhatTheyDoCta}
              </a>
            </div>

            {/* App icon row */}
            <div className="reveal mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {apps.map((a) => (
                <a
                  key={a.slug}
                  href={`${localizedPath("/", locale)}#${a.slug}`}
                  aria-label={h.jumpToAria.replace("{name}", a.name)}
                  className="group flex flex-col items-center gap-2"
                >
                  <img
                    src={a.logo}
                    alt={`${a.name} app icon`}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-[15px] border border-white/10 shadow-xl transition-transform group-hover:-translate-y-1"
                  />
                  <span className="text-xs text-muted transition-colors group-hover:text-foreground">
                    {a.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="relative z-10 mx-auto max-w-6xl px-5 pb-16 sm:px-8">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface px-6 py-7 text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block text-3xl font-semibold tracking-tight text-spectrum">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Apps intro */}
        <section id="apps" className="scroll-mt-20 pt-10">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {h.appsIntro.title.replace("{count}", String(apps.length))}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
              {h.appsIntro.description}
            </p>
          </div>
        </section>

        {/* Per-app showcases */}
        {apps.map((app, i) => (
          <AppSection key={app.slug} app={app} index={i} locale={locale} />
        ))}

        {/* Closing */}
        <section className="border-t border-border/60 py-24">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {h.closing.titlePre}{" "}
              <span className="text-spectrum">{h.closing.titleAccent}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              {h.closing.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              {apps.map((a) => (
                <a
                  key={a.slug}
                  href={a.appStore}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-2"
                >
                  <img
                    src={a.logo}
                    alt=""
                    width={22}
                    height={22}
                    className="h-5.5 w-5.5 rounded-md"
                  />
                  {a.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
