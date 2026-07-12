import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { APPS, SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AI Photo Journey builds a family of five AI creativity apps for iPhone and iPad — FxAI, Photix, Videx, SwapTo, and PicAlive. Learn what we believe and why we build beautifully simple AI tools.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `About Us — ${SITE_NAME}`,
    url: `${SITE_URL}/about`,
  },
};

const VALUES: { title: string; body: string }[] = [
  {
    title: "One tap beats ten sliders",
    body: "Powerful AI should feel effortless. Every app in the family is built around the shortest possible path from idea to result — no layers, timelines, prompts to memorize, or manuals to read.",
  },
  {
    title: "Do one thing exceptionally well",
    body: "Instead of a single bloated mega-app, we ship focused apps that each master one creative job — enhancing, generating, animating, swapping — and introduce each other when you need more.",
  },
  {
    title: "Private by design",
    body: "None of our apps require an account, login, or email. You start creating immediately, and your entitlements live on your device — there is no profile to build or password to leak.",
  },
  {
    title: "Emotion is the feature",
    body: "A restored family photo, a grandparent's portrait that smiles again, a selfie that finally looks the way you feel — we build for the gasp, the laugh, and the share.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="hero-glow" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <Breadcrumbs current="About" />
            <h1 className="mt-10 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              We make AI creativity{" "}
              <span className="text-spectrum">effortless</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-lg">
              AI Photo Journey is the team behind a family of five AI apps for
              iPhone and iPad. Together they cover the whole creative journey —
              from a raw photo or a passing idea to a polished, share-ready
              image or video — with no skill required and results in seconds.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Our story
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
            <p>
              Generative AI made things possible that used to require a studio:
              restoring a damaged print, generating original artwork, producing
              a stylized video, placing yourself in a scene you could never
              shoot. But most AI tools were built for professionals and prompt
              engineers — intimidating, complicated, and desktop-first.
            </p>
            <p>
              We started AI Photo Journey to close that gap. Each of our apps
              takes one genuinely magical AI capability and distills it into a
              friendly, tap-driven mobile experience: pick a photo or type an
              idea, tap once, and get a result worth sharing. Millions of
              people now use the family&apos;s apps to enhance, generate,
              animate, and reimagine their images.
            </p>
            <p>
              The apps are free to try, need no account, and are designed to
              introduce each other — so when your restored photo deserves to
              move, or your avatar deserves a video, the right tool is one tap
              away.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-border/60 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What we believe
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {VALUES.map((value) => (
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
              The family
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {APPS.map((app) => (
                <a
                  key={app.slug}
                  href={`/apps/${app.slug}`}
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
              Say hello
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              Questions, feedback, press, or partnerships — we read everything.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/contact"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Contact us
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
      <Footer />
    </>
  );
}
