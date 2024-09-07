import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// theme
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: "black",
};

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
  authors: [
    { name: "Nishith P Shetty", url: "https://www.nishithpshetty.com" },
  ],
  creator: "Nishith P Shetty",
  publisher: "Nishith P Shetty",
  openGraph: {
    url: "https://www.nishithpshetty.com",
    siteName: "Nishith P Shetty",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <html lang="en" suppressHydrationWarning> */}
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
