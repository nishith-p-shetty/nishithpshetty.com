export const metadata = {
  metadataBase: new URL("https://www.nishithpshetty.com/"),
  title: "Photography Gallery",
  description:
    "Dive into the world of photography with Nishith P Shetty. Browse through my collection of photographs capturing moments, landscapes, and the essence of life.",
  keywords: [
    "Nishith P Shetty",
    "Portfolio",
    "Resume",
    "Photography",
    "Experience",
    "Projects",
    "About",
    "Contact",
  ],
  authors: [
    { name: "Nishith P Shetty", url: "https://www.nishithpshetty.com" },
  ],
  creator: "Nishith P Shetty",
  publisher: "Nishith P Shetty",
  openGraph: {
    url: "https://www.nishithpshetty.com/photography",
    siteName: "Photography Gallery",
  },
};

export default function RootLayout({ children }) {
  return <section>{children}</section>;
}
