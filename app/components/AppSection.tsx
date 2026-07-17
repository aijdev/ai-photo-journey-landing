import Link from "next/link";
import type { AppInfo } from "../lib/content";
import { type Locale, defaultLocale, localizedPath } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <circle cx="10" cy="10" r="10" fill={color} fillOpacity="0.16" />
      <path
        d="M6 10.4l2.6 2.6L14 7.6"
        stroke={color}
        strokeWidth="2"
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

export function AppSection({
  app,
  index,
  locale = defaultLocale,
}: {
  app: AppInfo;
  index: number;
  locale?: Locale;
}) {
  const reversed = index % 2 === 1;
  const gradient = `linear-gradient(135deg, ${app.accent}, ${app.accentTo})`;
  const domainLabel = app.domain.replace(/^https?:\/\//, "");
  const t = getDictionary(locale).common;

  return (
    <section
      id={app.slug}
      aria-labelledby={`${app.slug}-title`}
      className="scroll-mt-20 border-t border-border/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div
          className={`flex flex-col items-center gap-12 lg:gap-16 ${
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Copy */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3.5">
              <img
                src={app.logo}
                alt={`${app.name} app icon`}
                width={56}
                height={56}
                loading="lazy"
                className="h-14 w-14 rounded-[13px] border border-white/10 shadow-lg"
              />
              <div>
                <span
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{ color: app.accent }}
                >
                  {app.category}
                </span>
                <h2
                  id={`${app.slug}-title`}
                  className="text-2xl font-semibold tracking-tight sm:text-3xl"
                >
                  {app.name}
                </h2>
              </div>
            </div>

            <p className="mt-6 text-xl font-medium tracking-tight sm:text-2xl">
              {app.tagline}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              {app.description}
            </p>

            <ul className="mt-7 space-y-3">
              {app.features.map((f) => (
                <li key={f} className="flex gap-3 text-[15px] text-foreground/90">
                  <CheckIcon color={app.accent} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={app.domain}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
                style={{ backgroundImage: gradient }}
              >
                {t.visitCta.replace("{domain}", domainLabel)}
                <ArrowIcon />
              </a>
              <a
                href={app.appStore}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
              >
                <AppStoreIcon />
                {t.appStoreLabel}
              </a>
              <Link
                href={localizedPath(`/apps/${app.slug}`, locale)}
                className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: app.accent }}
              >
                {t.learnMore}
                <ArrowIcon />
              </Link>
            </div>
          </div>

          {/* Screenshots */}
          <div className="w-full lg:w-1/2">
            <div
              className="relative rounded-3xl p-6 sm:p-10"
              style={{
                background: `radial-gradient(120% 120% at 50% 0%, ${app.accent}22 0%, transparent 60%)`,
              }}
            >
              <div className="flex items-end justify-center gap-3 sm:gap-4">
                {app.shots.slice(0, 3).map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${app.name} screenshot ${i + 1}`}
                    width={300}
                    height={650}
                    loading="lazy"
                    className={`shot w-1/3 max-w-[190px] rounded-[18px] border border-white/10 shadow-2xl ${
                      i === 1 ? "translate-y-[-14px] sm:translate-y-[-22px]" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
