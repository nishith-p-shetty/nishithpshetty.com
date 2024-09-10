export const metadata = {
  metadataBase: new URL("https://www.nishithpshetty.com/"),
  title: "About Me",
  description:
    "Learn more about Nishith P Shetty, a dedicated Computer Science student specializing in AI/ML and Full-Stack Development. Explore my background, skills, and experiences.",
  keywords: [
    "Nishith P Shetty",
    "Portfolio",
    "Resume",
    "Photography",
    "Experince",
    "Projects",
    "About",
    "Contact",
    "About Nishith P Shetty",
  ],
  authors: [
    { name: "Nishith P Shetty", url: "https://www.nishithpshetty.com" },
  ],
  creator: "Nishith P Shetty",
  publisher: "Nishith P Shetty",
  openGraph: {
    url: "https://www.nishithpshetty.com/about",
    siteName: "About Me",
  },
};

export default function RootLayout({ children }) {
  return <section>{children}</section>;
}
