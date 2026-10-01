import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Treatment {
  id: string
  title: string
  description: string
  duration: string
}

interface Product {
  id: string
  name: string
  category: string
  description: string
}

const treatments: Treatment[] = [
  {
    id: "deep-cleanse",
    title: "Limpieza Facial Profunda",
    description:
      "Una limpieza clínica y personalizada que libera impurezas, refina la textura y devuelve claridad a la piel.",
    duration: "60 min",
  },
  {
    id: "renewal",
    title: "Renovación Facial",
    description:
      "Protocolos de exfoliación avanzada para estimular la renovación celular y revelar una piel más uniforme.",
    duration: "75 min",
  },
  {
    id: "acne",
    title: "Tratamiento Anti-Acné",
    description:
      "Estrategias específicas para equilibrar la piel, reducir la inflamación y acompañar resultados sostenibles.",
    duration: "60 min",
  },
  {
    id: "expression-lines",
    title: "Control de Líneas de Expresión",
    description:
      "Tratamientos enfocados en hidratación, firmeza y prevención para una apariencia descansada y natural.",
    duration: "75 min",
  },
]

const products: Product[] = [
  {
    id: "cleanser",
    name: "Gentle Enzyme Cleanser",
    category: "LIMPIEZA",
    description: "Limpieza diaria equilibrada para conservar la barrera cutánea.",
  },
  {
    id: "serum",
    name: "Barrier Recovery Serum",
    category: "TRATAMIENTO",
    description: "Concentrado calmante para fortalecer y devolver confort a la piel.",
  },
  {
    id: "spf",
    name: "Mineral Defense SPF 50",
    category: "PROTECCIÓN",
    description: "Protección mineral de amplio espectro para el cuidado de cada día.",
  },
]

const navItems = [
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-white text-brand-navy">
      <header className="sticky top-0 z-50 border-b border-brand-steel/20 bg-brand-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10" aria-label="Navegación principal">
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
          <a href="#contacto" className="text-xs font-medium tracking-[0.14em] text-brand-navy sm:hidden">
            MENÚ
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-10 lg:py-36">
          <div>
            <p className="mb-8 text-xs font-medium tracking-[0.28em] text-brand-steel">
              ADVANCED SKIN AESTHETICS
            </p>
            <h1 className="max-w-4xl text-5xl leading-[0.98] font-medium tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              La piel bien cuidada se nota.
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-brand-steel">
              Cuidado facial experto, protocolos precisos y una mirada honesta sobre lo que tu piel necesita.
            </p>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Button className="h-12 rounded-none bg-brand-champagne px-7 text-brand-navy hover:bg-brand-champagne/90">
                Agendar Consulta
                <ArrowUpRight />
              </Button>
              <span className="text-xs tracking-[0.16em] text-brand-steel">FLORIDA LICENSED FACIAL SKIN SPECIALIST</span>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-brand-navy p-7 text-brand-white sm:p-10">
            <div className="absolute inset-5 border border-brand-champagne/40" />
            <div className="relative flex h-full flex-col justify-between">
              <span className="text-xs tracking-[0.2em] text-brand-champagne">EST. 2024 / FL</span>
              <div>
                <p className="mb-3 text-6xl font-light tracking-[-0.06em] sm:text-8xl">AR</p>
                <p className="max-w-xs text-sm leading-relaxed text-brand-steel">
                  Una práctica centrada en la salud, la confianza y resultados que se sienten tan bien como se ven.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="tratamientos" className="border-t border-brand-steel/20 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-10">
            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-xs font-medium tracking-[0.24em] text-brand-steel">01 / SERVICIOS</p>
                <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl">Tratamientos con intención.</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-brand-steel">
                Cada sesión comienza con una lectura detallada de tu piel y termina con un plan claro para mantenerla.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {treatments.map((treatment, index) => (
                <Card key={treatment.id} className="rounded-none border-brand-steel/30 bg-brand-white shadow-none">
                  <CardHeader className="flex flex-row items-start justify-between gap-4">
                    <span className="text-xs tracking-[0.18em] text-brand-steel">0{index + 1}</span>
                    <span className="text-xs tracking-[0.12em] text-brand-steel">{treatment.duration}</span>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="mb-4 text-2xl font-medium tracking-[-0.03em]">{treatment.title}</CardTitle>
                    <p className="max-w-md text-sm leading-relaxed text-brand-steel">{treatment.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="productos" className="bg-brand-white">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-10">
            <div className="mb-12">
              <p className="mb-4 text-xs font-medium tracking-[0.24em] text-brand-steel">02 / RITUAL DIARIO</p>
              <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl">Lo esencial, bien elegido.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {products.map((product) => (
                <Card key={product.id} className="rounded-none border-brand-steel/30 bg-transparent shadow-none">
                  <div className="aspect-[4/3] bg-brand-navy p-5">
                    <div className="flex h-full items-end border border-brand-champagne/30 p-4">
                      <span className="text-xs tracking-[0.2em] text-brand-champagne">{product.category}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-medium">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-brand-steel">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-brand-champagne">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10">
            <div>
              <p className="mb-4 text-xs font-medium tracking-[0.24em] text-brand-steel">03 / EMPECEMOS</p>
              <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                Tu piel merece un plan, no una promesa.
              </h2>
            </div>
            <Button className="h-12 w-fit rounded-none bg-brand-navy px-7 text-brand-white hover:bg-brand-navy/90">
              Agendar Consulta
              <ArrowUpRight />
            </Button>
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
            <a className="flex items-center gap-3 hover:text-brand-white" href="tel:+13055550184"><Phone size={15} /> (305) 555-0184</a>
            <a className="flex items-center gap-3 hover:text-brand-white" href="mailto:hola@areciorodriguez.com"><Mail size={15} /> hola@areciorodriguez.com</a>
            <p className="flex items-center gap-3"><MapPin size={15} /> Miami, Florida</p>
          </div>
          <div className="space-y-4 text-sm text-brand-steel">
            <p className="text-xs tracking-[0.18em] text-brand-champagne">LEGAL</p>
            <a className="block hover:text-brand-white" href="#">Política de privacidad</a>
            <a className="block hover:text-brand-white" href="#">Términos de servicio</a>
            <p className="flex items-center gap-2"><Check size={15} /> Licensed in Florida</p>
          </div>
        </div>
        <div className="border-t border-brand-steel/30 px-6 py-5 text-xs text-brand-steel lg:px-10">
          <div className="mx-auto flex max-w-7xl justify-between gap-4">
            <span>© 2024 Arecio Rodríguez</span>
            <span>Designed for skin health.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
