import Link from "next/link";
import { type Locale, defaultLocale, localizedPath } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

export function Breadcrumbs({
  current,
  locale = defaultLocale,
}: {
  current: string;
  locale?: Locale;
}) {
  const home = getDictionary(locale).common.breadcrumbHome;
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link
            href={localizedPath("/", locale)}
            className="transition-colors hover:text-foreground"
          >
            {home}
          </Link>
        </li>
        <li aria-hidden="true" className="text-muted-dim">
          /
        </li>
        <li aria-current="page" className="text-foreground">
          {current}
        </li>
      </ol>
    </nav>
  );
}
