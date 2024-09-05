import { ImageResponse } from "next/og";
import { metadata } from "./layout";

export const runtime = "edge";

// Image metadata
export const alt = metadata.title;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(90deg, #434343, #000)",
          fontSize: 60,
          letterSpacing: -2,
          fontWeight: 700,
          textAlign: "center",
          margin: "0",
          padding: "0",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", width: "80%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <img
              style={{
                border: "10px solid black",
                borderRadius: "100%",
                margin: "0",
                padding: "0",
              }}
              src="https://www.nishithpshetty.com/android-chrome-512x512.png"
              width="350"
              height="350"
              alt="Logo"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flex: 2,
              margin: "0 0 0 3px ",
              padding: "0 0 0 0",
            }}
          >
            <h2
              style={{
                backgroundImage: "linear-gradient(90deg, #38ef7d, #11998e)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                margin: "0 0 0 0",
                padding: "0 0 0 0",
              }}
            >
              {metadata.title}
            </h2>
            <h5
              style={{
                backgroundImage: "linear-gradient(90deg, #fc4a1a, #f7b733)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                margin: "10px 0 0 0",
                padding: "0 0 0 0",
              }}
            >
              {metadata.description}
            </h5>
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
