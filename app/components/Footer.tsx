import Link from "next/link";
import { Logo } from "./Logo";
import { APPS, SITE_NAME, SUPPORT_EMAIL } from "../lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A family of AI creativity apps that turn photos and ideas into
              something extraordinary — built for iPhone and iPad.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-dim">
              Our apps
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5 text-sm">
              {APPS.map((a) => (
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
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#apps"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  All apps
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  Privacy
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
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <p>Made for iPhone &amp; iPad.</p>
        </div>
      </div>
    </footer>
  );
}
