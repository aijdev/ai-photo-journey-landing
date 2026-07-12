# AI Photo Journey — Portfolio Website

The marketing portfolio for **AI Photo Journey**, the company behind a family of
AI creativity apps for iPhone and iPad. Built with Next.js 16 (App Router),
React 19, and Tailwind CSS v4, and exported to static HTML.

Live domain: **ai-photo-journey.com**

## The apps showcased

| App | What it does | Site |
| --- | --- | --- |
| **FxAI** | All-in-one AI photo enhancer (retouch, restore, edit, erase) | fxai.app |
| **Photix** | AI image generation, editing, and avatars | photix.app |
| **Videx** | AI text/photo-to-video generator | videx.app |
| **SwapTo** | AI face swap, avatars, and glam filters | swapto.app |
| **PicAlive** | One-tap photo-to-video animation | picalive.app |

Each app links out to its own domain and its App Store listing.

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static export to out/
pnpm start    # serve the production build
```

## Editing content

All app data — names, taglines, descriptions, features, domains, App Store
links, and accent colors — lives in [`app/lib/site.ts`](app/lib/site.ts). Edit
it there and the page, sitemap, structured data, and OpenGraph image all stay in
sync.

## SEO

- Per-site `title`, `description`, canonical, OpenGraph, and Twitter metadata
  ([`app/layout.tsx`](app/layout.tsx))
- Dynamic OpenGraph/Twitter card ([`app/opengraph-image.tsx`](app/opengraph-image.tsx))
- JSON-LD structured data ([`app/lib/schema.ts`](app/lib/schema.ts)):
  Organization, WebSite, and an ItemList of SoftwareApplication entries — one
  per app, each with its App Store download link and rating
- `robots.ts`, `sitemap.ts`, `manifest.ts`, and a code-generated `icon.svg`
- One `<h1>`, semantic section headings, and descriptive `alt` text throughout

## Deploy

`output: "export"` produces a fully static site in `out/`. The custom domain is
set in [`public/CNAME`](public/CNAME); `SITE_URL` (in `app/lib/site.ts`, override
via `NEXT_PUBLIC_SITE_URL`) drives all canonical/OG/sitemap URLs.

## Design

Apple-quality dark theme with a five-app spectrum gradient (aqua → indigo →
fuchsia → rose → teal), generous whitespace, subtle motion, and full
responsiveness. Dark-only by design.
