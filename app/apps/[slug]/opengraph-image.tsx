import { ImageResponse } from "next/og";
import { APPS, SITE_NAME } from "../../lib/site";
import { APP_CONTENT } from "../../lib/appContent";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return APPS.map((a) => ({ slug: a.slug }));
}

export const alt = "App overview";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = APPS.find((a) => a.slug === slug);
  const content = APP_CONTENT[slug];
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
