export const metadata = {
  metadataBase: new URL("https://www.nishithpshetty.com/"),
  title: "My Projects",
  description:
    "Explore the projects of Nishith P Shetty, showcasing skills in AI/ML, web development, and software engineering. Discover innovative solutions and impactful applications.",
  keywords: [
    "Nishith P Shetty",
    "Portfolio",
    "Resume",
    "Photography",
    "Experince",
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
    url: "https://www.nishithpshetty.com/projects",
    siteName: "My Projects",
  },
};

export default function RootLayout({ children }) {
  return <section>{children}</section>;
}
