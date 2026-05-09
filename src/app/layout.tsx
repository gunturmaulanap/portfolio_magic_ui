import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ErrorBoundary } from "@/components/error-boundary";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

// ─── SEO CONSTANTS ────────────────────────────────────────────────────────────
const SEO_TITLE = "Guntur Maulana | Fullstack Developer — Go, React, Next.js";

// Maks 160 karakter, keyword-rich, human-readable
const SEO_DESCRIPTION =
  "Guntur Maulana is a Fullstack Developer from Yogyakarta. Builds production systems using Go, React, Next.js, and Laravel. Available for freelance and full-time roles.";

const SEO_KEYWORDS = [
  "Guntur Maulana",
  "Guntur Maulana Putra Projo",
  "Fullstack Developer",
  "Fullstack Developer Yogyakarta",
  "Golang Developer Indonesia",
  "React Developer Indonesia",
  "Backend Developer Yogyakarta",
  "Freelance Developer Indonesia",
  "Web Developer Yogyakarta",
  "Go Developer",
  "Next.js Developer",
  "gunturmaulana.xyz",
].join(", ");

// ─── JSON-LD STRUCTURED DATA ──────────────────────────────────────────────────
// Ini yang bikin Google ngerti lo adalah Person, bukan random page
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Guntur Maulana Putra Projo",
  alternateName: "Guntur Maulana",
  url: DATA.url,
  image: `${DATA.url}/me.png`,
  jobTitle: "Fullstack Developer",
  description: SEO_DESCRIPTION,
  email: "gunturmaulanaputraprojo@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yogyakarta",
    addressCountry: "ID",
  },
  sameAs: [
    "https://www.linkedin.com/in/gunturmaulanap/",
    "https://github.com/gunturmaulanap",
    "https://www.threads.net/@gunturmaulana_p",
  ],
  knowsAbout: [
    "Go",
    "Golang",
    "React",
    "Next.js",
    "Laravel",
    "Node.js",
    "Docker",
    "PostgreSQL",
    "REST API",
    "Fullstack Development",
    "Backend Development",
    "AWS S3",
  ],
};

// ─── METADATA ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),

  title: {
    default: SEO_TITLE,
    template: `%s | Guntur Maulana`,
  },

  description: SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: "Guntur Maulana", url: DATA.url }],
  creator: "Guntur Maulana",
  publisher: "Guntur Maulana",

  // ── Canonical — cegah duplicate content issue ──
  alternates: {
    canonical: DATA.url,
  },

  // ── Open Graph ──
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: DATA.url,
    siteName: "Guntur Maulana — Fullstack Developer",
    locale: "en_US",
    type: "profile",
    firstName: "Guntur",
    lastName: "Maulana",
    // WAJIB BUAT: /public/og-image.png ukuran 1200x630px
    // Isi nama, title, stack — ini yang muncul pas di-share di WA/LinkedIn
    images: [
      {
        url: `${DATA.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Guntur Maulana — Fullstack Developer",
      },
    ],
  },

  // ── Twitter / X Card ──
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    creator: "@gunturmaulana_p",
    images: [`${DATA.url}/og-image.png`],
  },

  // ── Robots ──
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

  // ── Google/Yandex Verification ──
  // Isi setelah dapet kode dari Search Console
  verification: {
    google:
      "google-site-verification=EubAHWDw-FovfB6nkp53FnLMqG9-e7600lMaUU5Im7k", // ← dari https://search.google.com/search-console
    yandex: "",
  },
};

// ─── ROOT LAYOUT ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD — Google pake ini buat rich results & entity recognition */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <ErrorBoundary>
              <TooltipProvider delayDuration={0}>
                <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
                  <FlickeringGrid
                    className="h-full w-full"
                    squareSize={2}
                    gridGap={2}
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, black, transparent)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black, transparent)",
                    }}
                  />
                </div>
                <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
                  {children}
                </div>
                <Navbar />
              </TooltipProvider>
            </ErrorBoundary>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
