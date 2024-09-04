export default function manifest() {
  return {
    name: "Nishith P Shetty Portfolio",
    short_name: "Nishith P Shetty",
    description: "A personal/portfolio site of Nishith P Shetty",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
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
