/**
 * Long-form, unique content for each app's dedicated page. Kept separate from
 * `site.ts` (which holds the compact card/nav data) so the detail pages can be
 * rich and SEO-deep without bloating the home page's data.
 *
 * Every string here is written to be original and specific to the app — search
 * engines reward unique, substantive copy, and each page cross-links to the
 * others for internal-link equity.
 */

export type FeatureDetail = { title: string; body: string };
export type Step = { title: string; body: string };
export type Faq = { q: string; a: string };

export type AppContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Short phrase after "AI Photo Journey ·" in the OG card. */
  ogHeadline: string;
  overview: string[];
  featureDetails: FeatureDetail[];
  howItWorks: Step[];
  useCases: FeatureDetail[];
  faqs: Faq[];
};

export const APP_CONTENT: Record<string, AppContent> = {
  fxai: {
    slug: "fxai",
    metaTitle: "FxAI — All-In-One AI Photo Enhancer for iPhone & iPad",
    metaDescription:
      "Retouch portraits, restore old photos, edit by describing changes, and erase objects. FxAI is the all-in-one AI photo enhancer for iPhone and iPad — one tap, no skill, results in seconds.",
    keywords: [
      "AI photo enhancer",
      "photo retouch app",
      "restore old photos",
      "unblur photo",
      "colorize photo",
      "AI photo editor iPhone",
      "remove objects from photo",
      "FxAI",
    ],
    ogHeadline: "All-In-One AI Photo Enhancer",
    overview: [
      "FxAI is an all-in-one AI photo enhancer for iPhone and iPad that turns an ordinary photo into a polished, professional-looking image in a single tap. It brings together four studio-grade tools — Retouch, Restore, Edit, and Erase — behind one friendly, consistent interface, so you never have to learn layers, masks, or complicated sliders.",
      "Every result opens in a draggable before/after slider, making each improvement instantly and visibly obvious. Add a photo, tap a button, and get a great result in about ten seconds — then save it to your library or share it anywhere. It's the breadth of a full desktop editing suite, distilled into one dead-simple app.",
    ],
    featureDetails: [
      {
        title: "Retouch — AI portrait enhancement",
        body: "Smooth skin, balance lighting, and add natural polish to any selfie or portrait. Choose from three strengths — Natural for a subtle touch-up, Enhanced for a noticeable lift, or Studio for a dramatic, magazine-shoot finish.",
      },
      {
        title: "Restore — old & damaged photo repair",
        body: "Bring old memories back to life. Unblur sharpens soft or shaky shots into HD clarity, Restore repairs degraded and damaged prints, and Colorize adds realistic color to black-and-white images.",
      },
      {
        title: "Edit — generative editing by description",
        body: "Change a photo just by describing what you want — 'add a red hat' or 'change the background to a beach.' Attach reference images, refine the result step by step, and generate alternate variants until it's exactly right.",
      },
      {
        title: "Erase — object & blemish removal",
        body: "Brush over an unwanted object, person, or blemish and let AI seamlessly fill the gap. Undo and revert freely until the shot looks the way you always wanted it to.",
      },
    ],
    howItWorks: [
      {
        title: "Add a photo",
        body: "Tap to pick any image from your library. FxAI scales it to Full-HD for fast, consistent processing.",
      },
      {
        title: "Pick a tool and options",
        body: "Choose Retouch, Restore, Edit, or Erase, then set a strength, choose a mode, or type a prompt.",
      },
      {
        title: "Let AI work",
        body: "A short progress overlay appears — most results are ready in about ten seconds.",
      },
      {
        title: "Compare, save & share",
        body: "Review the improvement in the before/after slider, then save to Photos or share anywhere.",
      },
    ],
    useCases: [
      {
        title: "Everyday selfies & portraits",
        body: "Polish every photo before you post it, with flattering, studio-quality results in seconds.",
      },
      {
        title: "Restoring family memories",
        body: "Unblur, repair, and colorize old or damaged family pictures to relive them in full clarity.",
      },
      {
        title: "Quick creative edits",
        body: "Swap backgrounds, add elements, or remove photobombers without ever opening Photoshop.",
      },
      {
        title: "Content for social",
        body: "Produce a fast, repeatable, professional look across all of your posts and stories.",
      },
    ],
    faqs: [
      {
        q: "Is FxAI free to use?",
        a: "Yes — FxAI is free to download and try on the App Store. A Pro subscription unlocks unlimited, ad-free, watermark-free results with priority processing.",
      },
      {
        q: "Do I need any editing skills?",
        a: "No. Every tool is a single button — add a photo, tap once, and get a professional result. There are no layers, masks, or manual controls to learn.",
      },
      {
        q: "How long does an enhancement take?",
        a: "Most results finish in roughly ten seconds, with an on-screen countdown while the AI works.",
      },
      {
        q: "Which devices are supported?",
        a: "FxAI runs on iPhone and iPad, with a dark-mode interface that adapts to larger screens.",
      },
      {
        q: "How do I remove the watermark?",
        a: "Free results carry a small watermark. Upgrading to Pro removes watermarks and ads entirely and lifts usage limits.",
      },
    ],
  },

  photix: {
    slug: "photix",
    metaTitle: "Photix — AI Image Generator, Editor & Avatar Maker",
    metaDescription:
      "Turn text into original art, edit photos by describing changes, and transform selfies into themed avatars. Photix is the all-in-one AI image generator for iPhone and iPad.",
    keywords: [
      "AI image generator",
      "text to image app",
      "AI avatar maker",
      "AI photo editor",
      "AI art generator iPhone",
      "selfie to avatar",
      "Photix",
    ],
    ogHeadline: "AI Image Generator & Avatar Maker",
    overview: [
      "Photix is a pocket-sized creative studio for iPhone and iPad where your imagination is the only input. Describe an idea to generate original artwork, modify a photo just by saying what to change, or transform a selfie into a themed avatar — all with curated styles and zero learning curve.",
      "Four simple modes — AI Generate, AI Edit, AI Avatar, and AI Tools — cover the whole creative range, from a blank-page idea to a share-ready image. Curated art styles, ready-made avatar templates, and automatic prompt enhancement mean you get impressive results without any prompt-writing skill.",
    ],
    featureDetails: [
      {
        title: "AI Generate — text to image",
        body: "Type any idea and watch it become artwork. Pick from ten curated styles — Realism, Fantasy, Anime, Cinematic, Cyberpunk and more — attach up to two reference photos, and toggle Enhance Prompt to let AI enrich your description.",
      },
      {
        title: "AI Edit — conversational photo editing",
        body: "Set a photo and describe the change. Each edit builds on the last, so you can layer changes step by step — 'add a red beret,' then 'make it autumn' — and flip between variants.",
      },
      {
        title: "AI Avatar — selfie to portrait",
        body: "Choose from dozens of templates across Trending, AI Avatars, Fashion, Historical, and Lifestyle collections. Photix detects your face, pre-fills a descriptive prompt you can tweak, and returns a stylized portrait.",
      },
      {
        title: "Reference photos & prompt enhancement",
        body: "Guide generations with your own images, and let the built-in prompt enhancer optimize wording for sharper, more consistent results.",
      },
    ],
    howItWorks: [
      {
        title: "Describe or choose",
        body: "Type an idea, pick a style, or select an avatar template to start from.",
      },
      {
        title: "Add a photo (optional)",
        body: "Attach a selfie or reference images to guide or transform the result.",
      },
      {
        title: "Generate",
        body: "Tap Generate and watch the friendly progress countdown while the AI creates your image.",
      },
      {
        title: "Refine, save & share",
        body: "Regenerate for fresh variants, then download to Photos or share instantly.",
      },
    ],
    useCases: [
      {
        title: "Avatars & profile pictures",
        body: "Turn a selfie into a superhero, Renaissance noble, or fashion-editorial portrait worth posting.",
      },
      {
        title: "Bring ideas to life",
        body: "Describe any scene — 'a cozy cabin in a snowy forest at night' — and get striking original art.",
      },
      {
        title: "Quick photo edits",
        body: "Change outfits, backgrounds, or details just by describing them, no design software needed.",
      },
      {
        title: "Trying AI art, skill-free",
        body: "Curated styles and prompt enhancement make great results easy for first-time creators.",
      },
    ],
    faqs: [
      {
        q: "What can I create with Photix?",
        a: "Original AI artwork from a text description, edited versions of your own photos, and themed avatars generated from a selfie — all in one app.",
      },
      {
        q: "Do I need to know how to write prompts?",
        a: "No. Curated styles, ready-made avatar templates, and an Enhance Prompt toggle handle the hard part, so simple descriptions still produce great results.",
      },
      {
        q: "Is Photix free?",
        a: "Photix is free to try on the App Store. Photix PRO removes ads and watermarks, lifts usage limits, and adds priority processing.",
      },
      {
        q: "Can I edit a photo more than once?",
        a: "Yes. AI Edit is iterative — each change builds on the previous result, so you can stack edits step by step and compare variants.",
      },
      {
        q: "Which devices run Photix?",
        a: "Photix works on iPhone and iPad with a polished dark-mode interface.",
      },
    ],
  },

  videx: {
    slug: "videx",
    metaTitle: "Videx — AI Video Generator: Text & Photo to Video",
    metaDescription:
      "Turn a written idea or a photo into a short, cinematic AI video — no camera or crew. Videx is the AI video generator for iPhone and iPad. Free to try.",
    keywords: [
      "AI video generator",
      "text to video app",
      "photo to video AI",
      "AI video maker iPhone",
      "cinematic AI clips",
      "Videx",
    ],
    ogHeadline: "The AI Video Generator",
    overview: [
      "Videx is an AI video generator for iPhone and iPad that turns a written idea, a reference photo, or both into a short, stylized video in minutes. Describe a scene, pick a visual style like Cinematic, Anime, or Cyberpunk, and tap Generate — no camera, crew, or editing skills required.",
      "The whole video pipeline collapses into a single prompt-and-tap experience. A transparent live queue shows your place in line and an estimated wait, and the finished clip auto-plays in a loop, ready to save to your camera roll or share anywhere.",
    ],
    featureDetails: [
      {
        title: "Text-to-video & photo-to-video",
        body: "Type a free-form description, attach one or more reference photos, or combine both to ground the generation in your own subject.",
      },
      {
        title: "Ten one-tap style recipes",
        body: "Realism, Fantasy, Anime, Cinematic, Steampunk, Cyberpunk, Vintage, Paint, Illustration, and Pixel Art rewrite your prompt with the right modifiers for a consistent, professional aesthetic.",
      },
      {
        title: "Live queue & progress",
        body: "See your position in line and an estimated time remaining. Generation runs server-side, so you can leave the tab and come back to a finished clip.",
      },
      {
        title: "History, replay & regenerate",
        body: "Every creation is saved to History, where you can replay it, reuse its inputs to regenerate, or delete it.",
      },
    ],
    howItWorks: [
      {
        title: "Describe or upload",
        body: "Type your idea and/or attach reference photos from your library.",
      },
      {
        title: "Choose a style",
        body: "Pick a visual style — a default is pre-selected so you can generate immediately.",
      },
      {
        title: "Generate & wait",
        body: "Tap Generate and watch the live queue with a transparent time estimate.",
      },
      {
        title: "Save or share",
        body: "The result loops automatically — save it to Photos or share it to any app.",
      },
    ],
    useCases: [
      {
        title: "Social content creators",
        body: "Generate unique, scroll-stopping clips on demand for TikTok, Reels, and Stories.",
      },
      {
        title: "Ideas without a film crew",
        body: "Turn a sentence into a video when you have no camera, actors, or editing software.",
      },
      {
        title: "Hobbyists & the AI-curious",
        body: "A friendly, one-tap way to experiment with generative video and different styles.",
      },
      {
        title: "Fun & novelty",
        body: "Make playful, shareable, stylized visuals fast — Anime, Pixel Art, Cyberpunk, and more.",
      },
    ],
    faqs: [
      {
        q: "How does Videx make a video?",
        a: "You provide a text description and/or a reference photo and pick a style. Videx sends the request to its cloud service, which generates a short, looping video and returns it to the app.",
      },
      {
        q: "How long does generation take?",
        a: "A few minutes, depending on queue length. The app shows your position in line and an estimated time remaining throughout.",
      },
      {
        q: "Can I turn a photo into a video?",
        a: "Yes. Attach one or more reference photos — with or without a text prompt — to ground the generated video in your own image.",
      },
      {
        q: "Is Videx free?",
        a: "Videx is free to try. A PRO subscription unlocks unlimited, ad-free, watermark-free generation with priority processing.",
      },
      {
        q: "Do the videos have a watermark?",
        a: "Free videos carry a small Videx watermark. PRO subscribers export clean, watermark-free clips.",
      },
    ],
  },

  swapto: {
    slug: "swapto",
    metaTitle: "SwapTo — AI Face Swap, Avatars & Glam Filters",
    metaDescription:
      "Face swap into hundreds of styled scenes, become any avatar, and try on AI makeup and hairstyles. SwapTo is the AI selfie studio for iPhone and iPad. Free to try.",
    keywords: [
      "AI face swap",
      "face swap app",
      "AI avatar app",
      "AI makeup filter",
      "hairstyle try on",
      "AI selfie app iPhone",
      "SwapTo",
    ],
    ogHeadline: "AI Face Swap & Selfie Studio",
    overview: [
      "SwapTo is an AI selfie studio in your pocket for iPhone and iPad. Place your face into hundreds of professionally styled scenes, reinvent yourself across dozens of creative avatars, or try on dramatic makeup and new hairstyles — all in a few taps, with automatic face detection removing every bit of friction.",
      "Three complementary experiences — AI Swap, AI Avatar, and AI Filters — cover everything from a LinkedIn-ready headshot to a playful, share-with-friends transformation. Pick a look, add a photo, and get a stunning, shareable result in seconds.",
    ],
    featureDetails: [
      {
        title: "AI Swap — 310 curated templates",
        body: "Swap your face into professionally shot scenes across Professional, Luxury, Vacations, Casual, Fitness, and Romantic collections — or bring your own target photo. The library is gender-aware and re-filters instantly.",
      },
      {
        title: "AI Avatar — 42 creative themes",
        body: "Reinvent yourself as a superhero, anime hero, cyberpunk, Renaissance noble, or a polished business headshot, with an editable prompt for each theme.",
      },
      {
        title: "AI Filters — makeup & hairstyles",
        body: "Try on ten AI makeup looks and nineteen new hairstyles that transform your photo while keeping your identity fully recognizable.",
      },
      {
        title: "Automatic face detection",
        body: "SwapTo detects and crops your face for you, so you never align, mask, or retouch anything. Regenerate for an alternative take on the same inputs.",
      },
    ],
    howItWorks: [
      {
        title: "Pick a style",
        body: "Browse Swap templates, avatar themes, or makeup and hairstyle filters.",
      },
      {
        title: "Add your photo",
        body: "Choose a selfie — SwapTo automatically detects and crops your face.",
      },
      {
        title: "Generate",
        body: "AI produces your result in seconds on a full-screen, zoomable preview.",
      },
      {
        title: "Save, share or regenerate",
        body: "Download to your camera roll, share anywhere, or regenerate for another version.",
      },
    ],
    useCases: [
      {
        title: "Profile pictures & content",
        body: "Fresh, eye-catching photos and avatars that stand out on social feeds.",
      },
      {
        title: "Professional headshots",
        body: "Business and Professional collections deliver LinkedIn-ready portraits without a studio.",
      },
      {
        title: "Beauty & style experiments",
        body: "Try dramatic makeup and radically different hairstyles risk-free before committing.",
      },
      {
        title: "Fun with friends",
        body: "Lighthearted 'look what I turned into' moments made for sharing and laughing about.",
      },
    ],
    faqs: [
      {
        q: "What can SwapTo do?",
        a: "Three things in one app: swap your face into hundreds of styled scenes, generate creative avatars, and apply AI makeup and hairstyle filters to your own photo.",
      },
      {
        q: "Do I have to align my face manually?",
        a: "No. SwapTo automatically detects and crops your face from the photo you pick — if no face is found, it simply asks for another photo.",
      },
      {
        q: "Can I use my own scene instead of a template?",
        a: "Yes. The AI Swap experience lets you upload your own target photo and swap a face into it.",
      },
      {
        q: "Is SwapTo free?",
        a: "SwapTo is free to try. SwapTo PRO unlocks unlimited, ad-free, watermark-free, priority generations.",
      },
      {
        q: "How many looks are available?",
        a: "310 face-swap templates, 42 avatar themes, and 29 makeup and hairstyle filters, organized into intuitive collections.",
      },
    ],
  },

  picalive: {
    slug: "picalive",
    metaTitle: "PicAlive — Bring Photos to Life with AI Animation",
    metaDescription:
      "Turn any still photo into a realistic, moving video in one tap. PicAlive is the AI photo-to-video animation app for iPhone and iPad. No prompts, no skill, just Make Alive.",
    keywords: [
      "photo to video",
      "AI photo animation",
      "bring photos to life",
      "animate photo app",
      "living photo AI",
      "PicAlive",
    ],
    ogHeadline: "Bring Your Photos to Life",
    overview: [
      "PicAlive is an AI photo animation app for iPhone and iPad that turns a single still photograph into a short, realistic moving video. Pick a photo, tap Make Alive, and moments later faces, hair, water, and foliage begin to move naturally — as if the moment had been filmed instead of frozen in time.",
      "There are no prompts to write and no settings to tune. The animation is generated automatically, so the entire experience is reduced to 'upload a photo → get a video.' It's the simplest, most emotional way to relive a memory and share it as living, moving content.",
    ],
    featureDetails: [
      {
        title: "One-tap Make Alive",
        body: "Choose a photo and tap a single button. PicAlive optimizes the image and animates it — no prompt, no style picker, no configuration.",
      },
      {
        title: "Realistic, natural motion",
        body: "The animation aims for believable movement, not cartoonish effects, so faces, hair, water, and backgrounds come alive convincingly.",
      },
      {
        title: "History to replay & regenerate",
        body: "Every animation is saved with its status. Replay a finished clip, reuse a photo to regenerate, or delete a task with a tap.",
      },
      {
        title: "Save & share clean video",
        body: "Download the finished clip to your camera roll or share it through any app. PRO subscribers get clean, watermark-free video.",
      },
    ],
    howItWorks: [
      {
        title: "Choose a photo",
        body: "Pick any image from your library; PicAlive scales it to Full HD before uploading.",
      },
      {
        title: "Tap Make Alive",
        body: "The photo is sent to PicAlive's servers, where an AI model generates a matching animation.",
      },
      {
        title: "Wait in the queue",
        body: "A live progress indicator shows your position in line and an estimated time remaining.",
      },
      {
        title: "Receive, save & share",
        body: "The result loops automatically — save it to Photos or share it with friends and family.",
      },
    ],
    useCases: [
      {
        title: "Reliving memories",
        body: "Watch old family portraits and favorite photos move again for a genuinely emotional payoff.",
      },
      {
        title: "Eye-catching social content",
        body: "Instantly turn a still into novel, share-ready video with zero editing skill.",
      },
      {
        title: "Wow-factor moments",
        body: "A magical, effortless AI effect that friends and family love to see.",
      },
      {
        title: "Anyone, any age",
        body: "No prompts, timelines, or settings — just one tap — makes it perfect for non-technical users.",
      },
    ],
    faqs: [
      {
        q: "How does PicAlive work?",
        a: "You pick a still photo and tap Make Alive. PicAlive sends it to a cloud AI model that generates a short, realistic animation and returns it as a looping video.",
      },
      {
        q: "Do I need to write a prompt or choose a style?",
        a: "No. Everything is automatic — the animation instructions are generated on the server side, so you only provide the photo.",
      },
      {
        q: "How long does it take?",
        a: "Usually a couple of minutes, depending on queue length. The app shows live progress and an estimated time remaining.",
      },
      {
        q: "Is PicAlive free?",
        a: "PicAlive is free to try, and onboarding lets you animate your first photo for free. PRO unlocks unlimited, ad-free, watermark-free, priority generations.",
      },
      {
        q: "Will the video have a watermark?",
        a: "Free videos carry a small PicAlive watermark. PRO subscribers export clean, watermark-free clips.",
      },
    ],
  },
};
