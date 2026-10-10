import {
  About,
  Contact,
  Footer,
  Gallery,
  Hero,
  Highlights,
  MobileBookBar,
  Reviews,
  Services,
  Visit,
} from "@/components/sections"
import { SiteHeader } from "@/components/site-header"
import { getGalleryPhotos } from "@/lib/gallery"
import { site } from "@/lib/site"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: `${site.name} · ${site.tagline}`,
  description: site.credential,
  url: site.url,
  image: `${site.url}/images/hero.jpg`,
  telephone: site.phoneDisplay,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33174",
    addressCountry: "US",
  },
  sameAs: [site.instagram],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <About />
        <Gallery photos={getGalleryPhotos()} />
        <Reviews />
        <Visit />
        <Contact />
      </main>
      <div className="bg-navy-deep pb-14 sm:pb-0">
        <Footer />
      </div>
      <MobileBookBar />
    </>
  )
}
