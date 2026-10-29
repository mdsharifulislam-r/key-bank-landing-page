import { ImageResponse } from "next/og";

export const alt = "KeyBank — smart key handover for modern hosts";
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
          backgroundColor: "#0F1033",
          color: "#FBF3E2",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              backgroundColor: "#C9961B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0F1033",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            K
          </div>
          <div style={{ display: "flex", fontSize: "36px", fontWeight: 700, color: "#FFFFFF" }}>
            KeyBank
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#C9961B",
            }}
          >
            Contactless · Secure · Real-time
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "68px",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#FFFFFF",
              maxWidth: "900px",
            }}
          >
            Smart key handover for modern hosts
          </div>
        </div>
        <div style={{ display: "flex", fontSize: "24px", color: "#EDD9A8" }}>
          QR locker codes for short-term rental check-in
        </div>
      </div>
    ),
    { ...size },
  );
}
