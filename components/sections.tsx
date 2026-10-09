"use client"

import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Star,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { useLanguage } from "@/components/language-provider"
import { Eyebrow, GoldRule, Logo } from "@/components/logo"
import { mapsEmbed, mapsLink, site, whatsappLink } from "@/lib/site"

const bookProps = {
  href: site.bookingUrl,
  target: "_blank",
  rel: "noopener noreferrer",
} as const

/* ───────────────────────── Hero ───────────────────────── */

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden bg-navy text-clinic">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(183,154,98,0.16),transparent_45%)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-32 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10 lg:pt-40 lg:pb-24">
        <div>
          <Eyebrow light>{t.hero.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] font-medium sm:text-6xl lg:text-7xl">
            {t.hero.title}
            <span className="block text-gold italic">{t.hero.titleAccent}</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-clinic/75 sm:text-lg">
            {t.hero.body}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              {...bookProps}
              className="inline-flex h-13 items-center gap-2 bg-gold px-7 text-xs font-medium tracking-[0.2em] text-navy uppercase transition-colors hover:bg-gold-soft"
            >
              {t.hero.primary}
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex h-13 items-center gap-2 border border-clinic/30 px-7 text-xs font-medium tracking-[0.2em] uppercase transition-colors hover:border-gold hover:text-gold"
            >
              {t.hero.secondary}
            </a>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-clinic/15 pt-8">
            {t.hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-4xl text-gold">{stat.value}</dd>
                <dd className="mt-1 text-[11px] leading-snug tracking-[0.12em] text-clinic/60 uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -top-4 -right-4 hidden h-full w-full border border-gold/40 sm:block" />
          <div className="relative aspect-[4/5] overflow-hidden bg-navy-deep">
            <Image
              src="/images/hero.jpg"
              alt="Arecio Rodríguez, Florida licensed skin specialist"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-6 left-4 bg-clinic px-5 py-4 text-navy shadow-xl sm:-left-8">
            <p className="text-[10px] tracking-[0.28em] text-steel uppercase">
              Miami · Florida
            </p>
            <p className="mt-1 font-serif text-xl">{site.credential}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Highlights() {
  const { t } = useLanguage()
  return (
    <section className="border-b border-navy/10 bg-clinic">
      <div className="mx-auto grid max-w-7xl divide-y divide-navy/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
        {t.highlights.map((item, i) => (
          <div key={item.title} className="px-5 py-10 sm:px-8">
            <span className="font-serif text-sm text-gold">0{i + 1}</span>
            <h2 className="mt-3 font-serif text-2xl">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-steel">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ───────────────────────── Services ───────────────────────── */

export function Services() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const group = t.services.groups[active]

  return (
    <section id="services" className="bg-clinic py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Eyebrow>{t.services.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight font-medium sm:text-5xl">
              {t.services.title}
            </h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-steel lg:justify-self-end">
            {t.services.body}
          </p>
        </div>

        <div
          role="tablist"
          aria-label={t.services.eyebrow}
          className="mt-12 flex gap-2 overflow-x-auto border-b border-navy/10"
        >
          {t.services.groups.map((g, i) => (
            <button
              key={g.id}
              role="tab"
              type="button"
              id={`tab-${g.id}`}
              aria-selected={active === i}
              aria-controls={`panel-${g.id}`}
              onClick={() => setActive(i)}
              className={`-mb-px shrink-0 border-b-2 px-4 py-3 text-xs font-medium tracking-[0.2em] uppercase transition-colors ${
                active === i
                  ? "border-gold text-navy"
                  : "border-transparent text-steel hover:text-navy"
              }`}
            >
              {g.title}
            </button>
          ))}
        </div>

        <div
          id={`panel-${group.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${group.id}`}
        >
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-steel">
            {group.intro}
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((service) => (
              <li
                key={service.name}
                className="group flex items-center justify-between gap-4 border border-navy/10 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5"
              >
                <h3 className="font-serif text-xl leading-snug">
                  {service.name}
                </h3>
                <a
                  {...bookProps}
                  className="inline-flex shrink-0 items-center gap-1 text-xs font-medium tracking-[0.16em] text-gold uppercase"
                  aria-label={`${t.services.book}: ${service.name}`}
                >
                  {t.services.book}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Gallery() {
  const { t } = useLanguage()
  const images = ["/images/result-regular.jpg", "/images/result-deep.jpg"]

  return (
    <section id="gallery" className="bg-clinic pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-10 bg-navy p-6 text-clinic sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-14">
          <div>
            <Eyebrow light>{t.gallery.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl leading-snug sm:text-4xl">
              {t.gallery.title}
            </h2>
            <p className="mt-4 text-clinic/70">{t.gallery.body}</p>
            <a
              {...bookProps}
              className="mt-8 inline-flex h-12 items-center gap-2 bg-gold px-6 text-xs font-medium tracking-[0.2em] text-navy uppercase transition-colors hover:bg-gold-soft"
            >
              {t.nav.book}
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, i) => (
              <figure key={src}>
                <div className="relative aspect-[3/4] overflow-hidden bg-navy-deep">
                  <Image
                    src={src}
                    alt={t.gallery.labels[i]}
                    fill
                    sizes="(max-width: 1024px) 45vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[11px] tracking-[0.18em] text-clinic/70 uppercase">
                  {t.gallery.labels[i]}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── About ───────────────────────── */

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="relative grid grid-cols-5 gap-4">
          <div className="relative col-span-3 aspect-[3/4] overflow-hidden bg-clinic">
            <Image
              src="/images/about.jpg"
              alt="Arecio Rodríguez"
              fill
              sizes="(max-width: 1024px) 60vw, 30vw"
              className="object-cover object-top"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-4 pt-12">
            <div className="relative aspect-[3/4] overflow-hidden bg-clinic">
              <Image
                src="/images/treatment-steam.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden bg-clinic">
              <Image
                src="/images/studio-3.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div>
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <h2 className="sr-only">{t.about.eyebrow}</h2>
          <p className="mt-6 text-xs leading-relaxed tracking-[0.16em] text-steel uppercase">
            {t.about.role}
          </p>
          <GoldRule className="mt-7" />
          <div className="mt-7 space-y-5 text-base leading-relaxed text-steel">
            {t.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <blockquote className="mt-9 border-l-2 border-gold pl-6 font-serif text-2xl leading-snug italic">
            “{t.about.quote}”
          </blockquote>
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {t.about.values.map((v) => (
              <li
                key={v}
                className="text-[11px] tracking-[0.28em] text-navy uppercase"
              >
                <span className="mr-2 text-gold">◆</span>
                {v}
              </li>
            ))}
          </ul>
          <a
            {...bookProps}
            className="mt-10 inline-flex h-12 items-center gap-2 bg-navy px-7 text-xs font-medium tracking-[0.2em] text-clinic uppercase transition-colors hover:bg-navy-deep"
          >
            {t.about.cta}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Reviews ───────────────────────── */

export function Reviews() {
  const { t } = useLanguage()
  const items = t.reviews.items
  const [index, setIndex] = useState(0)
  const go = (dir: number) =>
    setIndex((i) => (i + dir + items.length) % items.length)

  return (
    <section id="reviews" className="bg-navy py-20 text-clinic sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow light>{t.reviews.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight font-medium sm:text-5xl">
              {t.reviews.title}
            </h2>
            <p className="mt-3 text-clinic/60">{t.reviews.body}</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={t.reviews.prev}
              className="flex size-12 items-center justify-center border border-clinic/25 transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={t.reviews.next}
              className="flex size-12 items-center justify-center border border-clinic/25 transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Móvil: una reseña con carrusel · Escritorio: grilla completa */}
        <div className="mt-12 lg:hidden" aria-live="polite">
          <ReviewCard review={items[index]} />
          <div className="mt-6 flex justify-center gap-2">
            {items.map((r, i) => (
              <button
                key={r.author}
                type="button"
                aria-label={`${i + 1} / ${items.length}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all ${i === index ? "w-8 bg-gold" : "w-4 bg-clinic/25"}`}
              />
            ))}
          </div>
        </div>
        <ul className="mt-12 hidden gap-5 lg:grid lg:grid-cols-4">
          {items.map((review, i) => (
            <li key={review.author}>
              <ReviewCard review={review} highlighted={i === index} />
            </li>
          ))}
        </ul>

        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-gold uppercase hover:text-gold-soft"
        >
          {t.reviews.cta}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}

function ReviewCard({
  review,
  highlighted = false,
}: {
  review: { quote: string; author: string; treatment: string }
  highlighted?: boolean
}) {
  return (
    <figure
      className={`flex h-full flex-col border p-7 transition-colors ${
        highlighted
          ? "border-gold bg-navy-deep"
          : "border-clinic/15 bg-navy-deep/40"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-1 text-gold" aria-label="5/5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" aria-hidden />
          ))}
        </div>
        <Quote size={22} className="text-gold/40" aria-hidden />
      </div>
      <blockquote className="mt-5 flex-1 font-serif text-xl leading-snug">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-clinic/10 pt-4">
        <span className="block text-sm font-medium">{review.author}</span>
        <span className="text-[11px] tracking-[0.16em] text-clinic/50 uppercase">
          {review.treatment}
        </span>
      </figcaption>
    </figure>
  )
}

/* ───────────────────────── Visit Us ───────────────────────── */

export function Visit() {
  const { t } = useLanguage()

  return (
    <section id="visit" className="bg-clinic py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <Eyebrow>{t.visit.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-tight font-medium sm:text-5xl">
            {t.visit.title}
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <h3 className="flex items-center gap-2 text-xs tracking-[0.24em] text-steel uppercase">
                <MapPin size={15} className="text-gold" aria-hidden />
                {t.visit.addressLabel}
              </h3>
              <address className="mt-3 font-serif text-2xl leading-snug not-italic">
                {site.address.line1}
                <br />
                {site.address.line2}
              </address>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                {t.visit.parking}
              </p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-navy uppercase underline decoration-gold decoration-2 underline-offset-8 hover:text-gold"
              >
                {t.visit.directions}
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-xs tracking-[0.24em] text-steel uppercase">
                <Clock size={15} className="text-gold" aria-hidden />
                {t.visit.hoursLabel}
              </h3>
              <dl className="mt-3 divide-y divide-navy/10 border-y border-navy/10">
                {t.visit.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between gap-4 py-3 text-sm"
                  >
                    <dt>{h.day}</dt>
                    <dd className="text-steel">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={site.phoneHref}
                className="mt-5 inline-flex items-center gap-2 text-sm hover:text-gold"
              >
                <Phone size={15} className="text-gold" aria-hidden />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden border border-navy/10 bg-white lg:min-h-full">
          <iframe
            title={t.visit.mapTitle}
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full grayscale-[60%]"
          />
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Contact ───────────────────────── */

export function Contact() {
  const { t } = useLanguage()
  const serviceNames = t.services.groups.flatMap((g) =>
    g.items.map((s) => s.name)
  )

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const lines = [
      t.contact.greeting,
      "",
      `${t.contact.name}: ${data.get("name")}`,
      `${t.contact.phone}: ${data.get("phone")}`,
      data.get("email") ? `${t.contact.email}: ${data.get("email")}` : "",
      data.get("service") ? `${t.contact.service}: ${data.get("service")}` : "",
      data.get("message") ? `\n${data.get("message")}` : "",
    ].filter((l, i) => i < 2 || l)
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer")
  }

  const field =
    "w-full border border-navy/15 bg-white px-4 text-sm tracking-normal normal-case text-navy outline-none transition-colors placeholder:text-steel/60 focus:border-gold"

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <div>
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-tight font-medium sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-steel">
            {t.contact.body}
          </p>

          <p className="mt-10 text-xs tracking-[0.24em] text-steel uppercase">
            {t.contact.or}
          </p>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a
                href={whatsappLink(t.contact.greeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-gold"
              >
                <MessageCircle size={18} className="text-gold" aria-hidden />
                WhatsApp · {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 hover:text-gold"
              >
                <Phone size={18} className="text-gold" aria-hidden />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 break-all hover:text-gold"
              >
                <Mail size={18} className="text-gold" aria-hidden />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-gold"
              >
                <InstagramIcon />
                {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="grid gap-5 bg-clinic p-6 sm:grid-cols-2 sm:p-10"
        >
          <label className="grid gap-2 text-xs tracking-[0.16em] text-steel uppercase sm:col-span-2">
            {t.contact.name}
            <input
              name="name"
              required
              autoComplete="name"
              className={`${field} h-12`}
            />
          </label>
          <label className="grid gap-2 text-xs tracking-[0.16em] text-steel uppercase">
            {t.contact.phone}
            <input
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className={`${field} h-12`}
            />
          </label>
          <label className="grid gap-2 text-xs tracking-[0.16em] text-steel uppercase">
            {t.contact.email}
            <input
              name="email"
              type="email"
              autoComplete="email"
              className={`${field} h-12`}
            />
          </label>
          <label className="grid gap-2 text-xs tracking-[0.16em] text-steel uppercase sm:col-span-2">
            {t.contact.service}
            <select name="service" defaultValue="" className={`${field} h-12`}>
              <option value="" disabled>
                {t.contact.servicePlaceholder}
              </option>
              {serviceNames.map((name) => (
                <option key={name}>{name}</option>
              ))}
              <option>{t.contact.serviceOther}</option>
            </select>
          </label>
          <label className="grid gap-2 text-xs tracking-[0.16em] text-steel uppercase sm:col-span-2">
            {t.contact.message}
            <textarea
              name="message"
              rows={4}
              placeholder={t.contact.messagePlaceholder}
              className={`${field} resize-y py-3`}
            />
          </label>
          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 bg-navy px-7 text-xs font-medium tracking-[0.2em] text-clinic uppercase transition-colors hover:bg-navy-deep"
            >
              <MessageCircle size={16} />
              {t.contact.submit}
            </button>
            <p className="text-xs text-steel">{t.contact.note}</p>
          </div>
        </form>
      </div>
    </section>
  )
}

/* ───────────────────────── Footer ───────────────────────── */

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep text-clinic">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div>
            <Logo />
            <p className="mt-4 text-[11px] tracking-[0.24em] text-clinic/50 uppercase">
              {site.credential}
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-[0.18em] text-clinic/70 uppercase">
              {(
                ["services", "gallery", "about", "reviews", "visit", "contact"] as const
              ).map((key) => (
                <li key={key}>
                  <a href={`#${key}`} className="hover:text-gold">
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-clinic/10 pt-8 text-xs text-clinic/50 lg:flex-row lg:justify-between">
          <p>
            © {year} {site.name}. {t.footer.rights}
          </p>
          <p className="max-w-xl lg:text-right">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}

/* Botón flotante para reservar en móvil */
export function MobileBookBar() {
  const { t } = useLanguage()
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-gold/30 bg-navy sm:hidden">
      <a
        href={whatsappLink(t.contact.greeting)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 items-center justify-center gap-2 text-xs tracking-[0.18em] text-clinic uppercase"
      >
        <MessageCircle size={16} className="text-gold" />
        WhatsApp
      </a>
      <a
        {...bookProps}
        className="flex h-14 items-center justify-center bg-gold text-xs font-medium tracking-[0.18em] text-navy uppercase"
      >
        {t.nav.book}
      </a>
    </div>
  )
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="text-gold"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
