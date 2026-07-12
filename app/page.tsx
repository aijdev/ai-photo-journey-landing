import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppSection } from "./components/AppSection";
import { APPS, RATING, USERS } from "./lib/site";

const stats = [
  { value: `${APPS.length}`, label: "AI apps" },
  { value: USERS, label: "Happy users" },
  { value: `${RATING}★`, label: "Average rating" },
  { value: "iOS", label: "iPhone & iPad" },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="hero-glow" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-20 text-center sm:px-8 sm:pb-24 sm:pt-28">
            <p className="reveal mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-spectrum" />
              A family of {APPS.length} AI creativity apps
            </p>

            <h1 className="reveal mx-auto mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Turn photos and ideas into{" "}
              <span className="text-spectrum">something extraordinary</span>
            </h1>

            <p className="reveal mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
              AI Photo Journey builds beautifully simple iPhone apps that
              enhance, generate, animate, and reimagine your images — no skill,
              no learning curve, results in seconds.
            </p>

            <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#apps"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Explore the apps
              </a>
              <a
                href="#fxai"
                className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
              >
                See what they do
              </a>
            </div>

            {/* App icon row */}
            <div className="reveal mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {APPS.map((a) => (
                <a
                  key={a.slug}
                  href={`#${a.slug}`}
                  aria-label={`Jump to ${a.name}`}
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
              Five apps, one creative mission
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
              Each app does one thing exceptionally well — and together they
              cover the whole journey from a raw photo or a passing idea to a
              polished, share-ready result.
            </p>
          </div>
        </section>

        {/* Per-app showcases */}
        {APPS.map((app, i) => (
          <AppSection key={app.slug} app={app} index={i} />
        ))}

        {/* Closing */}
        <section className="border-t border-border/60 py-24">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Start your <span className="text-spectrum">AI photo journey</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              Every app is free to try on the App Store. Pick the one that fits
              your idea and create something you&apos;ll want to share.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              {APPS.map((a) => (
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

      <Footer />
    </>
  );
}
