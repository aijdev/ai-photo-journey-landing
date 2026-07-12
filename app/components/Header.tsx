import Link from "next/link";
import { Logo } from "./Logo";
import { APPS } from "../lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="AI Photo Journey home">
          <Logo />
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-sm text-muted md:flex"
        >
          {APPS.map((a) => (
            <Link
              key={a.slug}
              href={`/apps/${a.slug}`}
              className="transition-colors hover:text-foreground"
            >
              {a.name}
            </Link>
          ))}
          <Link href="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
        </nav>
        <Link
          href="/#apps"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Explore apps
        </Link>
      </div>
    </header>
  );
}
