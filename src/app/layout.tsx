import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://fontlab.digitalnovastudio.com"),
  title: "FontLab - Typography Scale Generator",
  description:
    "Create consistent typography scales for your Tailwind CSS projects with DigitalNova FontLab. Features preset ratios, real-time preview, and automatic config generation.",
  keywords: [
    "typography",
    "tailwind css",
    "scale generator",
    "web design",
    "font sizing",
  ],
  authors: [{ name: "Joshua Duncan" }],
  creator: "Joshua Duncan",
  publisher: "DigitalNova Studio",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fontlab.digitalnovastudio.com",
    siteName: "FontLab",
    title: "FontLab - Typography Scale Generator",
    description:
      "Create consistent typography scales for your Tailwind CSS projects with Digitalnova FontLab. Features preset ratios, real-time preview, and automatic config generation.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "FontLab - Typography Scale Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FontLab - Typography Scale Generator",
    description:
      "Create consistent typography scales for your Tailwind CSS projects with Digitalnova FontLab. Features preset ratios, real-time preview, and automatic config generation.", // Made consistent with OG description
    images: ["/opengraph.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body className="min-h-screen bg-zinc-900">
        <ThemeProvider>
          <main className="min-h-screen bg-gradient-to-r from-P4 via-P3 to-P4 text-foreground">
            <NavBar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
