import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.nishithpshetty.com"),
  title: "Nishith P Shetty",
  description: "A personal/portfolio site of Nishith P Shetty",
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
  openGraph: {
    url: "https://www.nishithpshetty.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
