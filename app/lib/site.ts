/**
 * Single source of truth for the AI Photo Journey portfolio site.
 *
 * `SITE_URL` drives canonical URLs, the sitemap, robots, and absolute
 * OpenGraph image URLs, so it must be correct in production. The custom
 * domain also lives in `public/CNAME`.
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

export type AppInfo = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  /** Short one-liner used on cards and meta. */
  blurb: string;
  /** Longer paragraph for the app section. */
  description: string;
  /** Headline capabilities to highlight. */
  features: string[];
  domain: string;
  appStore: string;
  /** Accent hue used for the app's gradient (CSS color). */
  accent: string;
  accentTo: string;
  logo: string;
  shots: string[];
};

export const APPS: AppInfo[] = [
  {
    slug: "fxai",
    name: "FxAI",
    tagline: "Your All-In-One AI Photo Enhancer",
    category: "AI Photo Enhancement",
    blurb:
      "Retouch, restore, edit, and erase — studio-grade photo enhancement in one tap.",
    description:
      "FxAI bundles what used to take a retoucher, a photo restorer, a generative editor, and an object-removal tool into one dead-simple app. Add a photo, tap once, and see the improvement through a before/after slider — no layers, masks, or skill required.",
    features: [
      "Retouch portraits at Natural, Enhanced, or Studio strength",
      "Restore old photos — unblur, repair, and colorize",
      "Edit by describing the change in plain language",
      "Erase unwanted objects with a brush",
    ],
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
    tagline: "Create Anything You Imagine",
    category: "AI Image Generation",
    blurb:
      "Turn words and selfies into original AI artwork, edits, and themed avatars.",
    description:
      "Photix is a pocket-sized creative studio where your imagination is the only input. Describe an idea to generate original art, modify a photo just by saying what to change, or transform a selfie into a superhero, Renaissance noble, or fashion-editorial avatar — all with curated styles and zero learning curve.",
    features: [
      "AI Generate — text-to-image with 10 curated art styles",
      "AI Edit — conversational, iterative photo editing",
      "AI Avatar — themed portraits from a single selfie",
      "Enhance-prompt and reference photos for more control",
    ],
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
    tagline: "The AI Video Generator",
    category: "AI Video Generation",
    blurb:
      "Turn an idea or a photo into a short, cinematic AI video — no camera or crew.",
    description:
      "Videx collapses the entire video pipeline into a single prompt-and-tap experience. Describe a scene, optionally add a reference photo, pick a style like Cinematic, Anime, or Cyberpunk, and watch your idea become a looping, share-ready clip in minutes.",
    features: [
      "Text-to-video and photo-to-video generation",
      "10 one-tap style recipes for consistent aesthetics",
      "Live queue and progress with transparent wait times",
      "Save and share clean, watermark-free video with PRO",
    ],
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
    tagline: "Perfect AI Selfies in One Tap",
    category: "AI Face Swap",
    blurb:
      "Face swap into hundreds of scenes, become any avatar, and try on glam filters.",
    description:
      "SwapTo is an AI selfie studio in your pocket. Place your face into hundreds of professionally styled scenes, reinvent yourself across dozens of creative avatars, or try on dramatic makeup and hairstyles — automatic face detection means you just pick a photo and it works.",
    features: [
      "AI Swap — 310 curated, gender-aware templates",
      "AI Avatar — 42 themes from fantasy to business headshots",
      "AI Filters — 29 makeup and hairstyle looks",
      "Automatic face detection and cropping",
    ],
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
    tagline: "Bring Your Photos to Life",
    category: "AI Photo Animation",
    blurb:
      "Turn any still photo into a realistic, moving video — one tap, no skill.",
    description:
      "PicAlive turns a frozen moment into a living one. Pick a photo, tap Make Alive, and moments later faces, hair, water, and foliage move naturally as if the moment had been filmed. It's the simplest, most emotional way to relive a memory and share it.",
    features: [
      "One-tap photo-to-video animation",
      "Realistic, natural motion — no prompts or settings",
      "History to replay, regenerate, and manage clips",
      "Save and share clean video with PRO",
    ],
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
