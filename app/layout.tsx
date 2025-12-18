import PlausibleProvider from "next-plausible";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MouseFollower } from "@/components/ui/mouse-follower";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { enhancedMetadata, getStructuredData } from "@/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = enhancedMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PlausibleProvider domain="vhalvarez.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getStructuredData("person")}
          key="person-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getStructuredData("website")}
          key="website-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getStructuredData("professionalService")}
          key="service-jsonld"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <MouseFollower />
            <div className="max-w-2xl mx-auto py-4 sm:py-10 px-6">
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
