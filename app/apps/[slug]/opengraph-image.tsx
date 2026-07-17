import { ImageResponse } from "next/og";
import { APP_SKELETON as APPS, SITE_NAME } from "../../lib/site";
import { getAppContent } from "../../lib/content";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return APPS.map((a) => ({ slug: a.slug }));
}

export const alt = "App overview";

// OG images are generated once at build time from the English copy, regardless
// of which locale links to this route — social-preview cards are not
// per-locale in this v1.
export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = APPS.find((a) => a.slug === slug);
  const content = getAppContent("en")[slug];
  const headline = content?.ogHeadline ?? "";
  const gradient = app
    ? `linear-gradient(135deg, ${app.accent}, ${app.accentTo})`
    : "#6366f1";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#060608",
          color: "#f4f4f6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1ac" }}>
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              backgroundImage: gradient,
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {app?.name ?? SITE_NAME}
          </div>
          <div style={{ display: "flex", fontSize: 44, marginTop: 12 }}>
            {headline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#71717f" }}>
          {app?.domain.replace(/^https?:\/\//, "") ?? ""}
        </div>
      </div>
    ),
    size,
  );
}
