import Link from "next/link";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SITE_NAME } from "../lib/site";
import { getApps } from "../lib/content";
import { type Locale, defaultLocale, localizedPath } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

export function Header({ locale = defaultLocale }: { locale?: Locale }) {
  const apps = getApps(locale);
  const t = getDictionary(locale).common;
  const homeAria = t.homeAria.replace("{name}", SITE_NAME);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href={localizedPath("/", locale)} aria-label={homeAria}>
          <Logo />
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-sm text-muted md:flex"
        >
          {apps.map((a) => (
            <Link
              key={a.slug}
              href={localizedPath(`/apps/${a.slug}`, locale)}
              className="transition-colors hover:text-foreground"
            >
              {a.name}
            </Link>
          ))}
          <Link
            href={localizedPath("/about", locale)}
            className="transition-colors hover:text-foreground"
          >
            {t.nav.about}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} label={t.languageLabel} />
          <Link
            href={`${localizedPath("/", locale)}#apps`}
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t.nav.exploreApps}
          </Link>
        </div>
      </div>
    </header>
  );
}
