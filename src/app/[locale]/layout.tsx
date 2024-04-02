import { Metadata, Viewport } from "next"

import { siteConfig } from "config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster as NewYorkSonner } from "@/components/ui/sonner"
import { Toaster as NewYorkToaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/providers"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { locales } from "@/navigation"
import { unstable_setRequestLocale } from "next-intl/server"
import  "@/styles/globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "se88pay",
      url: "https://api-doc.s88pay.net",
    },
  ],
  creator: "se88pay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@se88pay",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {locale: string}
}

export default function RootLayout({ children, params: {locale} }: RootLayoutProps) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased", fontSans.className )}
        >
          <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-background">
                <SiteHeader />
                <main className="flex-1">{children}</main>
              </div>
            </div>
            <TailwindIndicator />
            <NewYorkToaster />
            <NewYorkSonner />
          </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  )
}
