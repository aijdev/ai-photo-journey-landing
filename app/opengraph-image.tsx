import { ImageResponse } from "next/og";
import { APP_SKELETON as APPS, SITE_NAME, SITE_TAGLINE } from "./lib/site";

export const dynamic = "force-static";
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#060608",
          color: "#f4f4f6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            color: "#a1a1ac",
            marginBottom: 24,
          }}
        >
          AI Photo Journey
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 900,
            backgroundImage:
              "linear-gradient(100deg,#22d3ee,#818cf8,#d946ef,#fb7185,#2dd4bf)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Turn photos and ideas into something extraordinary
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 56,
            fontSize: 28,
            color: "#71717f",
          }}
        >
          {APPS.map((a) => (
            <span key={a.slug}>{a.name}</span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
