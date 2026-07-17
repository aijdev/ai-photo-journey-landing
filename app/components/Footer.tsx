import Link from "next/link";
import { Logo } from "./Logo";
import { SITE_NAME, SUPPORT_EMAIL } from "../lib/site";
import { getApps } from "../lib/content";
import { type Locale, defaultLocale, localizedPath } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

export function Footer({ locale = defaultLocale }: { locale?: Locale }) {
  const year = new Date().getFullYear();
  const apps = getApps(locale);
  const t = getDictionary(locale).common;
  const footer = t.footer;

  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-dim">
              {footer.ourAppsTitle}
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5 text-sm">
              {apps.map((a) => (
                <li key={a.slug}>
                  <a
                    href={a.domain}
                    target="_blank"
                    rel="noopener"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {a.name}
                    <span className="ml-1.5 text-muted-dim">
                      {a.domain.replace(/^https?:\/\//, "")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-dim">
              {footer.companyTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href={`${localizedPath("/", locale)}#apps`}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {footer.allApps}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedPath("/about", locale)}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {footer.about}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedPath("/contact", locale)}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {footer.contact}
                </Link>
              </li>
              <li>
                {/* Privacy is English-only legal content; never locale-prefixed. */}
                <Link
                  href="/privacy"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {footer.privacy}
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {SUPPORT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME}. {footer.rights}
          </p>
          <p>{footer.madeFor}</p>
        </div>
      </div>
    </footer>
  );
}
