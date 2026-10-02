"use client"

import Image from "next/image"
import { useState } from "react"
import {
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceGroup {
  id: string
  title: string
  intro: string
  services: string[]
  featuredTreatments?: TreatmentDetail[]
}

interface TreatmentDetail {
  title: string
  description: string
  protocol: string[]
  duration: string
  beforeAfterImage: string
}

/* Productos y carrito: conservar para activar cuando se habilite el catálogo.
interface Product {
  id: string
  name: string
  category: string
  description: string
  image: string
}

interface CartItem extends Product {
  quantity: number
}
*/

const serviceGroups: ServiceGroup[] = [
  {
    id: "tratamientos-faciales",
    title: "Tratamientos faciales",
    intro: "Protocolos personalizados para transformar la salud y apariencia de la piel del rostro.",
    services: [
      "Limpieza Facial Regular",
      "Facial profundo",
      "Facial con Dermaplaning",
      "Facial con Carboxiterapia",
      "Hidrafacial",
      "Facial con peeling enzimático",
      "Facial con Dermapen",
      "Facial con plasma rico en plaquetas",
      "Facial con Exoxomas",
      "Facial Detox",
    ],
    featuredTreatments: [
      {
        title: "Limpieza Facial Regular",
        description:
          "Tratamiento esencial para mantener una piel limpia, fresca y equilibrada, ayudando a eliminar impurezas, células muertas y exceso de grasa para mejorar su apariencia y textura.",
        protocol: [
          "Limpieza — Preparación y limpieza de la piel.",
          "Exfoliación — Eliminación de células muertas y renovación superficial.",
          "Vapor — Preparación de la piel para facilitar las extracciones.",
          "Extracciones — Remoción cuidadosa de comedones e impurezas.",
          "Hidratación y nutrición — Aplicación de vitaminas y antioxidantes para hidratar, nutrir y revitalizar la piel.",
          "Mascarilla — Seleccionada según las necesidades y características de cada tipo de piel.",
          "Tonificación — Ayuda a equilibrar, refrescar y preparar la piel para finalizar el tratamiento.",
          "Protección solar — Aplicación final para proteger la piel frente a la exposición solar.",
        ],
        duration: "60 minutos",
        beforeAfterImage: "/media/before_after/limpieza_facial_regular.jpeg",
      },
      {
        title: "Limpieza Facial Profunda",
        description:
          "Tratamiento profesional diseñado para realizar una limpieza intensiva de la piel, eliminar impurezas y células muertas, descongestionar los poros y mejorar la textura, hidratación y luminosidad del rostro.",
        protocol: [
          "Limpieza de la piel",
          "Exfoliación",
          "Vapor",
          "Peeling enzimático",
          "Extracciones",
          "Alta frecuencia",
          "Microdermoabrasión con punta de diamante",
          "Fototerapia LED",
          "Hidratación y nutrición de la piel",
          "Mascarilla facial",
          "Tonificación",
          "Protección solar",
        ],
        duration: "1 hora y 30 minutos",
        beforeAfterImage: "/media/before_after/limpieza_facial_profunda.jpeg",
      },
    ],
  },
  {
    id: "tratamientos-corporales",
    title: "Tratamientos corporales",
    intro: "Técnicas y tecnología estética para cuidar, renovar y mejorar la apariencia de la piel corporal.",
    services: [
      "Radiofrecuencia",
      "Plasma rico en plaquetas",
      "Tratamiento de cicatrices",
      "Peeling químico",
      "Microneedling o Dermapen",
      "Eliminación de verrugas y lunares",
      "Exoxomas",
      "Láser Picosecond",
      "Carbón láser",
      "Biopen",
    ],
  },
]

/* Catálogo futuro.
const products: Product[] = [
  {
    id: "facial-kit",
    name: "Ritual Facial Esencial",
    category: "RUTINA EN CASA",
    description: "Una selección de cuidado diario para limpiar, hidratar y proteger tu piel.",
    image: "/media/skin-specialist.jpg",
  },
  {
    id: "renewal-serum",
    name: "Serum Renovación",
    category: "TRATAMIENTO",
    description: "Concentrado para acompañar la renovación y mejorar visiblemente la textura.",
    image: "/media/portrait-blue-2.jpg",
  },
  {
    id: "mineral-defense",
    name: "Mineral Defense SPF 50",
    category: "PROTECCIÓN",
    description: "Protección mineral de amplio espectro para conservar los resultados de tu tratamiento.",
    image: "/media/portrait-blue-3.jpg",
  },
]
*/

const navItems = [
  { label: "Faciales", href: "#tratamientos-faciales" },
  { label: "Corporales", href: "#tratamientos-corporales" },
  { label: "Sobre mí", href: "/sobre-mi" },
  // { label: "Productos", href: "#productos" }, // Próximamente
]

const whatsappNumber = "17866170823"
const consultationFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfe5g5Mb8y4f6dcsQYQPGOseGvbJt2HKMeL8JF7io0pB-62fg/viewform"

export default function Home() {
  const [selectedService, setSelectedService] = useState<ServiceGroup | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  /* Lógica de carrito reservada para la futura sección Productos.
  function addToCart(product: Product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...current, { ...product, quantity: 1 }]
    })
    setSelectedProduct(null)
    setAddedProduct(product)
    window.setTimeout(() => setAddedProduct(null), 4500)
  }

  function updateQuantity(productId: string, change: number) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + change } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  function sendOrderToWhatsApp() {
    const order = cart
      .map((item) => `• ${item.name} x${item.quantity}`)
      .join("\n")
    const message = `Hola Arecio, quiero consultar por estos servicios:\n\n${order}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }
  */

  return (
    <div className="min-h-screen bg-brand-white text-brand-navy">
      <header className="sticky top-0 z-40 border-b border-brand-steel/20 bg-brand-white/95 backdrop-blur">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
          aria-label="Navegación principal"
        >
          <a href="#" className="text-sm font-semibold tracking-[0.22em]">
            ARECIO RODRÍGUEZ
          </a>
          <div className="hidden items-center gap-8 text-xs font-medium tracking-[0.14em] text-brand-steel sm:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-brand-navy">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="sm:hidden"
              aria-label="Abrir menú de navegación"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={21} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 sm:hidden" role="dialog" aria-modal="true" aria-label="Menú de navegación">
            <button
              type="button"
              className="absolute inset-0 bg-brand-navy/25"
              aria-label="Cerrar menú"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="absolute top-0 right-0 h-full w-[min(21rem,88vw)] bg-brand-white px-7 py-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-brand-steel/20 pb-6">
                <span className="text-xs font-medium tracking-[0.18em] text-brand-steel">NAVEGACIÓN</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-brand-navy"
                  aria-label="Cerrar menú de navegación"
                >
                  <X size={21} strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-col gap-7 pt-10">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-medium tracking-[-0.03em] text-brand-navy"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10 lg:py-32">
          <div>
            <p className="mb-8 text-xs font-medium tracking-[0.28em] text-brand-steel">
              ADVANCED SKIN AESTHETICS
            </p>
            <h1 className="max-w-4xl text-5xl leading-[0.98] font-medium tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              La piel bien cuidada se nota.
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-brand-steel">
              Cuidado facial experto, protocolos precisos y acompañamiento personalizado para tu piel.
            </p>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a
                href="#contacto"
                className="inline-flex h-12 items-center gap-2 rounded-none bg-brand-champagne px-7 text-sm font-medium text-brand-navy hover:bg-brand-champagne/90"
              >
                Agendar Consulta
                <ArrowUpRight />
              </a>
              <span className="text-xs tracking-[0.16em] text-brand-steel">
                FLORIDA LICENSED FACIAL SKIN SPECIALIST
              </span>
            </div>
          </div>
        </section>

        <section id="servicios" className="border-t border-brand-steel/20 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-10">
            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-xs font-medium tracking-[0.24em] text-brand-steel">01 / SERVICIOS</p>
                <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                  Tratamientos faciales y corporales.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-brand-steel">
                Cada sesión comienza con una lectura detallada de tu piel y termina con un plan claro.
              </p>
            </div>
            <div className="grid gap-10">
              {serviceGroups.map((group, index) => (
                <button
                  key={group.id}
                  type="button"
                  id={group.id}
                  onClick={() => setSelectedService(group)}
                  className="group text-left"
                  aria-label={`Ver información de ${group.title}`}
                >
                  <Card className="gap-0 overflow-hidden rounded-none border-brand-navy/20 bg-brand-white p-0 text-brand-navy shadow-none transition-shadow group-hover:shadow-lg">
                    <CardHeader className="flex flex-row items-start justify-between gap-6 px-8 pt-8">
                      <div>
                        <span className="text-xs tracking-[0.24em] text-brand-steel">0{index + 1} / SERVICIO</span>
                        <CardTitle className="mt-4 text-3xl leading-tight font-medium tracking-[-0.04em]">{group.title}</CardTitle>
                      </div>
                      <ArrowUpRight className="mt-1 shrink-0 text-brand-champagne transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </CardHeader>
                    <CardContent className="px-8 pt-5 pb-9">
                      <p className="mb-7 max-w-xl text-sm leading-7 text-brand-steel">{group.intro}</p>
                      <p className="text-xs font-medium tracking-[0.18em] text-brand-navy underline-offset-4 group-hover:underline">
                        VER INFORMACIÓN
                      </p>
                    </CardContent>
                  </Card>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Productos: sección reservada para una futura etapa del sitio.
        <section id="productos" className="bg-brand-white">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-10">
            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-xs font-medium tracking-[0.24em] text-brand-steel">02 / TIENDA DE CUIDADO</p>
                <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl">Lo esencial, bien elegido.</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-brand-steel">
                Arma tu carrito y cotiza facilmente. Te confirmo disponibilidad y entrega personalmente.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {products.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="group block text-left"
                  aria-label={`Ver información de ${product.name}`}
                >
                  <Card className="gap-0 overflow-hidden rounded-none border-brand-steel/30 bg-transparent p-0 shadow-none transition-shadow group-hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-navy">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-4 left-4 bg-brand-navy/85 px-3 py-1 text-[10px] tracking-[0.16em] text-brand-white">
                      {product.category}
                    </span>
                  </div>
                  <CardHeader className="gap-3 px-6 pt-6 pb-0">
                    <CardTitle className="text-xl font-medium text-brand-navy">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pt-5 pb-6">
                    <p className="text-sm leading-relaxed text-brand-steel">{product.description}</p>
                    <p className="mt-5 text-xs font-medium tracking-[0.14em] text-brand-navy underline-offset-4 group-hover:underline">
                      VER INFORMACIÓN
                    </p>
                  </CardContent>
                </Card>
                </button>
              ))}
            </div>
          </div>
        </section> */}

        <section className="relative overflow-hidden bg-brand-navy text-brand-white">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-10">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-medium tracking-[0.24em] text-brand-champagne">03 / CONFIANZA</p>
              <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                Tu piel merece un plan, no una promesa.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-brand-steel">
                Evaluación honesta, técnica y acompañamiento para que cada decisión tenga sentido para tu piel.
              </p>
              <a
                href="#contacto"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-none bg-brand-champagne px-7 text-sm font-medium text-brand-navy hover:bg-brand-champagne/90"
              >
                Agendar Consulta
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-brand-champagne">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10">
            <div>
              <p className="mb-4 text-xs font-medium tracking-[0.24em] text-brand-steel">04 / EMPECEMOS</p>
              <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                Hablemos de lo que tu piel necesita.
              </h2>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 bg-brand-navy px-7 text-sm font-medium text-brand-white hover:bg-brand-navy/90"
            >
              Escribir por WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

      </main>

      <footer className="bg-brand-navy text-brand-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em]">ARECIO RODRÍGUEZ</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-steel">
              Advanced skin aesthetics para una piel saludable, fuerte y verdaderamente tuya.
            </p>
          </div>
          <div className="space-y-4 text-sm text-brand-steel">
            <p className="text-xs tracking-[0.18em] text-brand-champagne">CONTACTO</p>
            <a className="flex items-center gap-3 hover:text-brand-white" href={`tel:+${whatsappNumber}`}>
              <Phone size={15} /> +1 (786) 617-0823
            </a>
            <a className="flex items-center gap-3 hover:text-brand-white" href="mailto:rodriguezarecio@gmail.com">
              <Mail size={15} /> rodriguezarecio@gmail.com
            </a>
            <p className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0" /> 10522 W Flagler, Miami FL 33174 · 2do piso
            </p>
          </div>
          <div className="space-y-4 text-sm text-brand-steel">
            <p className="text-xs tracking-[0.18em] text-brand-champagne">ATENCIÓN</p>
            <p className="flex items-center gap-2"><Check size={15} /> Skin Care Specialist</p>
            <p className="flex items-center gap-2"><Check size={15} /> Atención personalizada</p>
            <a
              href={consultationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="block pt-1 text-brand-champagne underline-offset-4 hover:underline"
            >
              Completar formulario de consulta
            </a>
          </div>
        </div>
        <div className="border-t border-brand-steel/30 px-6 py-5 text-xs text-brand-steel lg:px-10">
          <div className="mx-auto flex max-w-7xl justify-between gap-4">
            <span>© 2024 Arecio Rodríguez</span>
            <span>Skin health, considered.</span>
          </div>
        </div>
      </footer>

      {/* Notificación, modal y carrito de Productos: conservar para activación futura.
      {addedProduct && (
        <div className="fixed top-5 right-5 z-[60] w-[min(22rem,calc(100vw-2.5rem))] border border-brand-steel/20 bg-brand-white p-4 shadow-2xl">
          <div className="flex items-start gap-3">
            <div className="relative size-16 shrink-0 overflow-hidden bg-brand-navy">
              <Image src={addedProduct.image} alt="" fill className="object-cover" sizes="64px" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium">Añadido a tu carrito</p>
                <button type="button" onClick={() => setAddedProduct(null)} aria-label="Cerrar notificación">
                  <X size={17} />
                </button>
              </div>
              <p className="mt-1 truncate text-sm text-brand-steel">{addedProduct.name}</p>
              <button
                type="button"
                onClick={() => {
                  setAddedProduct(null)
                  setCartOpen(true)
                }}
                className="mt-3 text-xs font-medium tracking-[0.14em] underline underline-offset-4"
              >
                VER SELECCIÓN ({cartCount})
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
          <button
            type="button"
            aria-label="Cerrar información"
            className="absolute inset-0 bg-brand-navy/50 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          />
          <article className="relative grid max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-brand-white md:grid-cols-2">
            <div className="relative min-h-[20rem] bg-brand-navy md:min-h-[34rem]">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                aria-label="Cerrar información"
                className="absolute top-5 right-5"
              >
                <X size={22} />
              </button>
              <p className="text-xs tracking-[0.2em] text-brand-steel">{selectedProduct.category}</p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em]">{selectedProduct.name}</h2>
              <p className="mt-6 text-base leading-relaxed text-brand-steel">{selectedProduct.description}</p>
              <p className="mt-6 text-sm leading-relaxed text-brand-steel">
                Selección profesional para acompañar tu rutina y mantener el cuidado de tu piel.
              </p>
              <Button
                type="button"
                onClick={() => addToCart(selectedProduct)}
                className="mt-9 h-12 rounded-none bg-brand-navy text-brand-white hover:bg-brand-navy/90"
              >
                Añadir al carrito
                <Plus size={17} />
              </Button>
            </div>
          </article>
        </div>
      )}

      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
          <button
            type="button"
            aria-label="Cerrar información del servicio"
            className="absolute inset-0 bg-brand-navy/50 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          />
          <article className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto bg-brand-white">
            <div className="p-7 sm:p-10">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Cerrar información del servicio"
                className="absolute top-5 right-5"
              >
                <X size={22} />
              </button>
              <p className="text-xs tracking-[0.2em] text-brand-steel">SERVICIOS ESPECIALIZADOS</p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em]">{selectedService.title}</h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-steel">{selectedService.intro}</p>
              {selectedService.featuredTreatments?.map((treatment) => (
                <div key={treatment.title} className="mt-8 grid gap-8 border-t border-brand-steel/20 pt-8 md:grid-cols-[0.8fr_1.2fr]">
                  <div className="relative overflow-hidden bg-brand-white">
                    <Image
                      src={treatment.beforeAfterImage}
                      alt={`Antes y después de ${treatment.title}`}
                      width={1200}
                      height={1600}
                      className="h-auto w-full object-contain"
                      sizes="(max-width: 768px) 100vw, 35vw"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.03em]">{treatment.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-brand-steel">{treatment.description}</p>
                    <p className="mt-7 mb-3 text-xs font-medium tracking-[0.18em] text-brand-steel">PROTOCOLO</p>
                    <ol className="grid gap-3 text-sm leading-relaxed text-brand-navy">
                      {treatment.protocol.map((step, index) => (
                        <li key={step}>
                          {selectedService.title === "Tratamientos faciales" &&
                          treatment.title === "Limpieza Facial Profunda"
                            ? `${index + 1}. ${step}`
                            : step}
                        </li>
                      ))}
                    </ol>
                    <p className="mt-6 text-sm font-medium text-brand-navy">
                      Duración del tratamiento: {treatment.duration}
                    </p>
                  </div>
                </div>
              ))}
              {selectedService.featuredTreatments && (
                <p className="mt-8 border-l-2 border-brand-champagne pl-4 text-sm leading-relaxed text-brand-steel">
                  Nota: Todos los tratamientos están sujetos a una evaluación previa de la piel. El protocolo podrá
                  ser adaptado según el tipo, condición y necesidades específicas de cada piel, siempre bajo el
                  criterio profesional del especialista, con el objetivo de garantizar un tratamiento seguro,
                  personalizado y adecuado para cada cliente.
                </p>
              )}
              <div className="mt-8 border-t border-brand-steel/20 pt-6">
                <p className="mb-4 text-xs font-medium tracking-[0.18em] text-brand-steel">DISPONIBLE EN CONSULTA</p>
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {selectedService.services.map((service) => (
                    <li key={service} className="flex items-start gap-2 text-sm text-brand-navy">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-champagne" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#contacto"
                onClick={() => setSelectedService(null)}
                className="mt-9 inline-flex h-12 items-center gap-2 bg-brand-navy px-7 text-sm font-medium text-brand-white hover:bg-brand-navy/90"
              >
                Consultar disponibilidad
                <ArrowUpRight size={17} />
              </a>
            </div>
          </article>
        </div>
      )}

      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Cerrar carrito"
            className="absolute inset-0 bg-brand-navy/40 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />
          <aside className="absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-brand-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-brand-steel/20 px-6 py-5">
              <div>
                <p className="text-xs tracking-[0.18em] text-brand-steel">TU SELECCIÓN</p>
                <h2 className="mt-1 text-2xl font-medium">Carrito</h2>
              </div>
              <button type="button" onClick={() => setCartOpen(false)} aria-label="Cerrar carrito">
                <X size={22} />
              </button>
            </div>
            {cart.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <ShoppingBag size={32} strokeWidth={1} className="mb-5 text-brand-steel" />
                <p className="text-lg font-medium">Tu carrito está vacío</p>
                <p className="mt-2 text-sm text-brand-steel">Añade productos para tu carrito de compras.</p>
                <button
                  type="button"
                  onClick={() => {
                    setCartOpen(false)
                    document.querySelector("#productos")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="mt-7 border-b border-brand-navy pb-1 text-xs font-medium tracking-[0.14em]"
                >
                  VER PRODUCTOS
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative size-20 shrink-0 overflow-hidden bg-brand-navy">
                        <Image src={item.image} alt="" fill className="object-cover" sizes="80px" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between gap-3">
                          <p className="text-sm font-medium">{item.name}</p>
                          <button
                            type="button"
                            onClick={() => setCart((current) => current.filter((cartItem) => cartItem.id !== item.id))}
                            aria-label={`Eliminar ${item.name}`}
                            className="text-brand-steel hover:text-brand-navy"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                          <button type="button" onClick={() => updateQuantity(item.id, -1)} aria-label="Reducir cantidad">
                            <Minus size={14} />
                          </button>
                          <span className="min-w-5 text-center text-sm">{item.quantity}</span>
                          <button type="button" onClick={() => updateQuantity(item.id, 1)} aria-label="Aumentar cantidad">
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-brand-steel/20 px-6 py-6">
                  <Button
                    type="button"
                    onClick={sendOrderToWhatsApp}
                    className="h-12 w-full rounded-none bg-brand-navy text-brand-white hover:bg-brand-navy/90"
                  >
                    Solicitar tratamiento
                    <ArrowUpRight size={17} />
                  </Button>
                  <p className="mt-3 text-center text-xs leading-relaxed text-brand-steel">
                    Revisaremos tu selección para coordinar los siguientes pasos.
                  </p>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
      */}
    </div>
  )
}
