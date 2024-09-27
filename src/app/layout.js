import { Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

// components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// toast comonent
import { Toaster } from "@/components/ui/toaster";

// theme
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const viewport = {
  themeColor: "black",
};

export const metadata = {
  metadataBase: new URL("https://www.nishithpshetty.com"),
  title: {
    default: "Home - Nishith P Shetty",
    template: "%s - Nishith P Shetty",
  },
  description:
    "Passionate AI/ML-driven Computer Science student with a knack for Full-Stack Development and a portfolio of impactful projects. Explore my journey through innovation and technology.",
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
    url: "https://www.nishithpshetty.com",
    siteName: "Nishith P Shetty",
  },
};

const jsonLd = {
  "@context": "http://schema.org",
  "@type": "Person",
  name: " Nishith P Shetty",
  familyName: "Shetty",
  additionalName: "Shetty",
  email: "nishithpshetty@nishithpshetty.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru, Karnataka, India",
    addressRegion: "IN",
  },
  url: "https://www.nishithpshetty.com",
  brand: "Nishith P Shetty",
  image: "https://www.nishithpshetty.com/android-chrome-512x512.png",
  sameAs: [
    "https://twitter.com/NishithPShetty",
    "https://www.facebook.com/nishith.p.shetty/",
    "https://www.linkedin.com/in/nishith-p-shetty/",
    "https://www.instagram.com/nishith.p.shetty/",
    "https://github.com/nishith-p-shetty/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Data Structure */}
        <Script
          id="schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="a382ffec-dc40-4a0b-9586-f4aebdab7a03"
        ></script>
      </head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
