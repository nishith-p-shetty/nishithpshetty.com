export const metadata = {
  metadataBase: new URL("https://www.nishithpshetty.com/"),
  title: "Test Page",
  description: "A test page site",
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
  authors: [{ name: "Nishith P Shetty", url: "https://nishithpshetty.com" }],
  creator: "Nishith P Shetty",
  publisher: "Nishith P Shetty",
};

export default function RootLayout({ children }) {
  return <section>{children}</section>;
}
