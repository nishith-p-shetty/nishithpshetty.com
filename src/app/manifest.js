export default function manifest() {
  return {
    name: "Nishith P Shetty",
    short_name: "Nishith P Shetty",
    description:
      "Passionate AI/ML-driven Computer Science student with a knack for Full-Stack Development and a portfolio of impactful projects. Explore my journey through innovation and technology.",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#7936ec",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
