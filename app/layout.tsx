import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Jost } from "next/font/google"

import { LanguageProvider } from "@/components/language-provider"
import { dictionaries } from "@/lib/i18n"
import { site } from "@/lib/site"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
})

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
})

const { meta } = dictionaries.en

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: ["/images/hero.jpg"],
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_US"],
  },
}

export const viewport: Viewport = {
  themeColor: "#102a3a",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} antialiased`}
    >
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
