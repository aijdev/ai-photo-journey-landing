import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { APP_SKELETON as APPS, SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How AI Photo Journey handles privacy — this website collects no personal data and sets no tracking cookies, and every app in the family works without accounts. Find each app's own privacy policy here.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `Privacy — ${SITE_NAME}`,
    url: `${SITE_URL}/privacy`,
  },
};

const SECTIONS: { title: string; body: string }[] = [
  {
    title: "This website",
    body: "ai-photo-journey.com is a static informational site. It has no sign-up forms, sets no tracking cookies, and collects no personal information. If you email us, we use your address only to reply.",
  },
  {
    title: "Our apps",
    body: "Every app in the family is designed to work without accounts — no logins, emails, or passwords. Photos and prompts you submit are processed to generate your result, and each app asks for App Tracking Transparency before any personalized advertising, so you stay in control.",
  },
  {
    title: "Questions",
    body: "Privacy questions about the website or the family in general are welcome anytime — we read everything.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="hero-glow" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <Breadcrumbs current="Privacy" />
            <h1 className="mt-10 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Privacy at <span className="text-spectrum">{SITE_NAME}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-lg">
              The short version: this website collects nothing, and our apps
              are built to need as little of your data as possible.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {section.body}
                </p>
              </div>
            ))}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Per-app privacy policies
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Each app publishes its own detailed privacy policy on its site:
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {APPS.map((app) => {
                  const domainLabel = app.domain.replace(/^https?:\/\//, "");
                  return (
                    <li key={app.slug}>
                      <a
                        href={`${app.domain}/privacy`}
                        target="_blank"
                        rel="noopener"
                        className="text-muted transition-colors hover:text-foreground"
                      >
                        {app.name} — {domainLabel}/privacy
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Reach us anytime at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
