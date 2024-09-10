export const metadata = {
  metadataBase: new URL("https://www.nishithpshetty.com/"),
  title: "Contact Me",
  description:
    "Get in touch with Nishith P Shetty. Connect with me for collaborations, inquiries, or to learn more about my work in AI/ML, web development, and photography.",
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
    url: "https://www.nishithpshetty.com/contact",
    siteName: "Contact Me",
  },
};

export default function RootLayout({ children }) {
  return <section>{children}</section>;
}
