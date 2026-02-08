import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ClientGuard } from "@/components/guards/ClientGuard";
import { ThemedFlickeringGridBright } from "@/components/themed-flickering-grid";
import { InstallPWA } from "@/components/install-pwa";
import { AnimatedVerticalLines } from "@/components/animated-vertical-lines";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://a063.xyz"),
  title: "Subhadip Jana – Designer & Developer | a063 | NIXGN",
  description:
    "Subhadip Jana (a063) is a Design Engineer & Frontend Developer from India specialising in React, Next.js, Tailwind, Motion and modern web experiences.",
  keywords: [
    "Subhadip Jana",
    "Subhadip",
    "a063",
    "Subhadip Jana portfolio",
    "Subhadip portfolio",
    "a063 portfolio",
    "Subhadip Jana India",
    "Subhadip Kolkata",
    "Subhadip West Bengal",
    "Subhadip Jana West Bengal",
    "Subhadip Jana Kolkata",
    "a063 Kolkata",
    "a063 West Bengal",
    "a063 India",
    "Subhadeep Jana",
    "Subhadip Nixgn",
    "SUBHADIP NIXGN",
    "subhadip nixgn",
    "Subhadip Jana Nixgn",
    "SUBHADIP JANA NIXGN",
    "subhadip jana nixgn",
    "Nixgn Co-founder",
    "Nixgn Co-Founder",
    "nixgn co-founder",
    "nixgn founder",
    "NIXGN FOUNDER",
    "NIXGN CO-FOUNDER",
    "Subhadip a063",
    "SUBHADIP A063",
    "NIXGN A063",
    "nixgn a063",
    "Subhadip jana a063",
    "Subhadip Jana a063",
    "Subhadip Jana Garia",
    "Subhadip Jana Chandipur",
    "Subhadip Chandipur",
    "Subhadip Garia",
    "Subhadip NSEC",
    "Subhadip Netaji Subhash Engineering College",
    "Netaji Subhash Engineering College",
    "Netaji Subhash Engineering College Garia",
    "Netaji Subhash Engineering College Garia Kolkata",
    "Subhadip Garia Kolkata",
    "Dev Style Portfolio",
    "UI/UX Designer Portfolio",
    "UI Design",
    "Subhadip React Developer",
    "Subhadip JavaScript Developer",
    "Subhadip TypeScript Developer",
    "Subhadip Java Script Developer",
    "Subhadip Type Script Developer",
    "Subhadip Figma Designer",
    "Subhadip Creative Frontend Developer",
    "Subhadip Nextjs Developer",
    "Subhadip Framer Motion Developer",
    "Subhadip Tailwind Developer",
    "Subhadip GSAP Developer",
    "Subhadip Lenis Developer",
    "Subhadip Locomotive Developer",
    "Subhadip Jana Badminton",
    "Subhadeep",
    "Subhadeep Portfolio",
    "Suvodip Jana",
    "Suvodip",
    "Suvodip a063",
    "Suvodip Portfolio",
    "Suvodip Kolkata",
    "Suvodip West Bengal",
    "Suvodip India",
    "UI/UX Designer Portfolio",
    "UI/UX Designer",
    "UI/UX Design",
    "UI/UX",
    "Frontend Developer Portfolio",
    "Frontend Developer",
    "Frontend Dev",
    "Web Developer",
    "Web Design",
    "Portfolio Design",
    "Best UI/UX Designer",
    "Best Frontend Developer",
    "Best Developer Portfolio",
    "Best Designer Portfolio",
    "Best Frontend Portfolio",
    "Best UI/UX Portfolio",
  ],
  authors: [{ name: "Subhadip Jana" }],
  creator: "Subhadip Jana",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Subhadip Jana – a063",
    description:
      "Design Engineer & Frontend Developer from Kolkata, West Bengal, India.",
    url: "https://a063.xyz",
    siteName: "Subhadip Jana Portfolio",
    images: [
      {
        url: "https://a063.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Subhadip Jana – a063",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subhadip Jana – a063",
    description:
      "UI/UX Designer & Frontend Developer from Kolkata, India.",
    images: ["https://a063.xyz/og-image.png"],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#08090A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="a063" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />

        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Subhadip Jana",
              alternateName: "a063",
              url: "https://a063.xyz",
              alternateUrl: "https://subhadip.nixgn.com",
              jobTitle: "Design Engineer & Frontend Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                addressCountry: "India",
              },
              sameAs: [
                "https://subhadip.nixgn.com",
                "https://github.com/Subhadipjana95",
                "https://www.linkedin.com/in/subhadipjana095",
                "https://www.linkedin.com/in/subhadip-jana-931927287",
                "https://www.instagram.com/soulsofsavi",
                "https://x.com/Subhadip53874"
              ],
            }),
          }}
        />

        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W9GKL56QWY"
        />
        <Script id="gtag-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W9GKL56QWY');
          `}
        </Script>

        {/* Service Worker Registration */}
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                  .then((registration) => {
                    console.log('Service Worker registered successfully:', registration.scope);
                  })
                  .catch((error) => {
                    console.log('Service Worker registration failed:', error);
                  });
              });
            }
          `}
        </Script>
      </head>

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="max-w-3xl mx-auto py-12 sm:py-24 px-6 relative">

          {/* Themed Flickering Grid Background for mobile */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-20 w-screen overflow-hidden z-0 block lg:hidden pointer-events-none">
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.4) 40%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.4) 40%, transparent 100%)',
              }}
            >
              <ThemedFlickeringGridBright />
            </div>
          </div>

          {/* Animated Dashed Grid Lines */}
          <AnimatedVerticalLines />
          <ClientGuard />

          <ThemeProvider attribute="class" defaultTheme="dark">
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
              <InstallPWA />
              <Toaster />
            </TooltipProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}

