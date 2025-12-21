import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Just Fucking Use Solana";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          position: "relative",
        }}
      >
        {/* Purple glow top-right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(circle at top right, rgba(153, 69, 255, 0.25), transparent 70%)",
          }}
        />
        {/* Green glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(circle at bottom left, rgba(20, 241, 149, 0.2), transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 70,
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            JUST FUCKING USE
          </div>
          <div
            style={{
              fontSize: 130,
              fontWeight: 900,
              letterSpacing: "-0.05em",
              background: "linear-gradient(90deg, #9945FF, #14F195)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            SOLANA.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
