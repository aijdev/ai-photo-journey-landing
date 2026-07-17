/**
 * Single source of truth for the AI Photo Journey portfolio site.
 *
 * `SITE_URL` drives canonical URLs, the sitemap, robots, and absolute
 * OpenGraph image URLs, so it must be correct in production. The custom
 * domain also lives in `public/CNAME`.
 *
 * This module holds only NON-translatable data (URLs, brand names, accent
 * colors, image paths). Translatable app copy (tagline, category, blurb,
 * description, features) lives in the i18n dictionaries and is zipped in by
 * `getApps(locale)` in `./content`.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://ai-photo-journey.com";

export const SITE_NAME = "AI Photo Journey";
export const SITE_TAGLINE = "A family of AI creativity apps";
export const SITE_DESCRIPTION =
  "AI Photo Journey builds a family of AI-powered iOS apps that turn photos and ideas into something extraordinary — enhance, generate, animate, face-swap, and create in seconds. Meet FxAI, Photix, Videx, SwapTo, and PicAlive.";

export const SUPPORT_EMAIL = "hello@ai-photo-journey.com";
export const TWITTER_HANDLE = "@aiphotojourney";
export const RATING = "4.8";
export const USERS = "2M+";

export type AppSkeleton = {
  slug: string;
  name: string;
  domain: string;
  appStore: string;
  accent: string;
  accentTo: string;
  logo: string;
  shots: string[];
};

/** Order defines the zip order with dictionary `content.apps` / `content.appDetails`. */
export const APP_SKELETON: AppSkeleton[] = [
  {
    slug: "fxai",
    name: "FxAI",
    domain: "https://fxai.app",
    appStore:
      "https://apps.apple.com/us/app/ai-photo-enhancer-fxai/id6752206851",
    accent: "#22d3ee",
    accentTo: "#6366f1",
    logo: "/apps/fxai/logo.jpg",
    shots: ["/apps/fxai/shot-0.jpg", "/apps/fxai/shot-1.jpg", "/apps/fxai/shot-2.jpg"],
  },
  {
    slug: "photix",
    name: "Photix",
    domain: "https://photix.app",
    appStore:
      "https://apps.apple.com/us/app/image-generator-photix/id6745130814",
    accent: "#d946ef",
    accentTo: "#8b5cf6",
    logo: "/apps/photix/logo.jpg",
    shots: [
      "/apps/photix/shot-0.jpg",
      "/apps/photix/shot-1.jpg",
      "/apps/photix/shot-2.jpg",
    ],
  },
  {
    slug: "videx",
    name: "Videx",
    domain: "https://videx.app",
    appStore:
      "https://apps.apple.com/us/app/ai-video-generator-videx/id6757314863",
    accent: "#fb7185",
    accentTo: "#f43f5e",
    logo: "/apps/videx/logo.jpg",
    shots: ["/apps/videx/shot-0.jpg", "/apps/videx/shot-1.jpg", "/apps/videx/shot-2.jpg"],
  },
  {
    slug: "swapto",
    name: "SwapTo",
    domain: "https://swapto.app",
    appStore: "https://apps.apple.com/us/app/face-swap-swapto/id6745184949",
    accent: "#a78bfa",
    accentTo: "#7c3aed",
    logo: "/apps/swapto/logo.jpg",
    shots: [
      "/apps/swapto/shot-0.jpg",
      "/apps/swapto/shot-1.jpg",
      "/apps/swapto/shot-2.jpg",
    ],
  },
  {
    slug: "picalive",
    name: "PicAlive",
    domain: "https://picalive.app",
    appStore:
      "https://apps.apple.com/us/app/image-to-video-picalive/id6757533997",
    accent: "#2dd4bf",
    accentTo: "#0d9488",
    logo: "/apps/picalive/logo.jpg",
    shots: [
      "/apps/picalive/shot-0.jpg",
      "/apps/picalive/shot-1.jpg",
      "/apps/picalive/shot-2.jpg",
    ],
  },
];
