"use client"

import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

import { useLanguage } from "@/components/language-provider"
import { Logo } from "@/components/logo"
import { site } from "@/lib/site"

export function SiteHeader() {
  const { t, lang, toggle } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // El menú móvil se oculta en escritorio (lg); ciérralo para no dejar el scroll bloqueado.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)")
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#about", label: t.nav.about },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#visit", label: t.nav.visit },
    { href: "#contact", label: t.nav.contact },
  ]

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-navy/95 shadow-lg shadow-navy/10 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-5 lg:px-10"
        aria-label="Main"
      >
        <a href="#top" className="text-clinic" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] tracking-[0.18em] text-clinic/80 uppercase transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle
            lang={lang}
            onToggle={toggle}
            label={t.nav.language}
          />
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center bg-gold px-5 text-xs font-medium tracking-[0.18em] text-navy uppercase transition-colors hover:bg-gold-soft sm:inline-flex"
          >
            {t.nav.book}
          </a>
          <button
            type="button"
            className="-mr-2 inline-flex size-10 items-center justify-center text-clinic lg:hidden"
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-navy transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[calc(100dvh-5rem)]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-5 pt-2 pb-8">
          {links.map((link) => (
            <li key={link.href} className="border-b border-clinic/10">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-sm tracking-[0.2em] text-clinic uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center bg-gold text-xs font-medium tracking-[0.2em] text-navy uppercase"
            >
              {t.nav.book}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

function LanguageToggle({
  lang,
  onToggle,
  label,
}: {
  lang: "en" | "es"
  onToggle: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="inline-flex h-10 items-center rounded-full border border-clinic/25 p-1 text-[11px] font-medium tracking-[0.14em] text-clinic/70 uppercase transition-colors hover:border-gold"
    >
      {(["en", "es"] as const).map((code) => (
        <span
          key={code}
          className={`rounded-full px-2 py-1.5 transition-colors sm:px-2.5 ${
            lang === code ? "bg-clinic text-navy" : ""
          }`}
        >
          {code}
        </span>
      ))}
    </button>
  )
}
