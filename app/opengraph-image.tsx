import { ImageResponse } from "next/og";

export const alt = "Isaac Onekonga, développeur full-stack et intégrateur IA à Kinshasa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 76px",
          background: "linear-gradient(130deg, #111 0%, #000 65%)",
          color: "#fff",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#aaa", fontSize: 22, letterSpacing: 5 }}>
          <span style={{ width: 38, height: 1, background: "#aaa" }} />
          PORTFOLIO · KINSHASA, RDC
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ fontSize: 94, lineHeight: 1.05 }}>Isaac Onekonga</div>
          <div style={{ marginTop: 24, color: "#c4c4c4", fontFamily: "sans-serif", fontSize: 32 }}>
            Développeur full-stack · Intégrateur IA
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#888", fontFamily: "sans-serif", fontSize: 20 }}>
          <span>Java · Spring Boot · Next.js</span>
          <span>isaaconekonga</span>
        </div>
        <div style={{ position: "absolute", right: 78, top: 164, width: 260, height: 260, border: "1px solid #ffffff24", borderRadius: 999 }} />
        <div style={{ position: "absolute", right: 112, top: 198, width: 192, height: 192, border: "1px solid #ffffff18", borderRadius: 999 }} />
      </div>
    ),
    size,
  );
}
