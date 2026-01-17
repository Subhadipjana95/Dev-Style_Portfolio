import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ClientGuard } from "@/components/guards/ClientGuard";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// export const metadata: Metadata = {
//   metadataBase: new URL(DATA.url),
//   title: {
//     default: DATA.name,
//     template: `%s | ${DATA.name}`,
//   },
//   description: DATA.descriptionValue,
//   openGraph: {
//     title: `${DATA.name}`,
//     description: DATA.descriptionValue,
//     url: DATA.url,
//     siteName: `${DATA.name}`,
//     locale: "en_US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   twitter: {
//     title: `${DATA.name}`,
//     card: "summary_large_image",
//   },
//   verification: {
//     google: "",
//     yandex: "",
//   },
// };

export const metadata: Metadata = {
  title: "Subhadip Jana – Designer & Developer | a063",
  description:
    "Subhadip Jana (a063) is a UI/UX Designer, Frontend Developer from India specialising in React, Next.js, Motion and modern web experiences.",
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
  ],
  authors: [{ name: "Subhadip Jana" }],
  creator: "Subhadip Jana",
  openGraph: {
    title: "Subhadip Jana – a063",
    description:
      "UI/UX Designer & Frontend Developer from Kolkata, West Bengal, India.",
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
              jobTitle: "UI/UX Designer & Frontend Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                addressCountry: "India",
              },
              sameAs: [
                "https://github.com/Subhadipjana95",
                "https://www.linkedin.com/in/subhadipjana095",
                "https://www.linkedin.com/in/subhadip-jana-931927287",
                "https://www.instagram.com/soulsofsavi",
                "https://x.com/Subhadip53874"
              ],
            }),
          }}
        />
      </head>

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-3xl mx-auto py-12 sm:py-24 px-6 relative",
          fontSans.variable
        )}
      >
        <div className="lines hidden lg:block">
          <div className="absolute -left-16 top-0 h-full w-[1px] border-l border-dashed border-muted-foreground/15 [mask-image:linear-gradient(to_bottom,transparent,black_1%,black_95%,transparent)]" />
          <div className="absolute -right-16 top-0 h-full w-[1px] border-r border-dashed border-muted-foreground/15 [mask-image:linear-gradient(to_bottom,transparent,black_1%,black_95%,transparent)]" />
          <div className="absolute left-1/2 top-16 h-[1px] w-screen -translate-x-1/2 border-t border-dashed border-muted-foreground/15 [mask-image:linear-gradient(to_right,transparent,black_6%,black_90%,transparent)]" />
        </div>
        <ClientGuard />

        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

