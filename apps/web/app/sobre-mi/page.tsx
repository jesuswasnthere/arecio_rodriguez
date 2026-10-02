"use client"

import Image from "next/image"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-white text-brand-navy">
      <header className="border-b border-brand-steel/20 bg-brand-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10" aria-label="Navegación principal">
          <a href="/" className="text-sm font-semibold tracking-[0.22em]">
            ARECIO RODRÍGUEZ
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-brand-steel hover:text-brand-navy"
          >
            <ArrowLeft size={16} />
            VOLVER
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10 lg:py-32">
        <div className="relative aspect-[4/5] overflow-hidden bg-brand-white">
          <Image
            src="/media/acercademi.jpeg"
            alt="Arecio Rodríguez, especialista en estética facial y corporal"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 35vw"
            priority
          />
        </div>
        <div>
          <p className="mb-4 text-xs font-medium tracking-[0.24em] text-brand-steel">SOBRE MÍ</p>
          <h1 className="max-w-2xl text-4xl font-medium tracking-[-0.04em] sm:text-6xl">Arecio Rodríguez</h1>
          <p className="mt-5 text-sm font-medium tracking-[0.08em] text-brand-steel">
            Especialista en Estética Facial y Corporal | Florida Certified Full Specialist
          </p>
          <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-brand-steel">
            <p>
              Con más de 10 años de experiencia en estética facial y corporal, especialista en el cuidado y
              transformación de la piel mediante tratamientos personalizados y orientados a resultados.
            </p>
            <p>
              Certificado como Full Specialist en el estado de Florida, cuenta con amplia experiencia en tratamientos
              para acné, hiperpigmentación, manchas, cicatrices, textura irregular y signos del envejecimiento,
              combinando técnicas profesionales, activos especializados y tecnología estética avanzada.
            </p>
            <p>
              Su filosofía va más allá de la belleza: cada tratamiento busca mejorar la salud, apariencia y calidad de
              la piel, ayudando también a fortalecer la seguridad y confianza de cada cliente.
            </p>
          </div>
          <blockquote className="mt-9 border-l-2 border-brand-champagne pl-5 text-xl leading-relaxed text-brand-navy sm:text-2xl">
            “La estética no es solo vanidad; es salud, bienestar y confianza en tu propia piel.”
          </blockquote>
          <a
            href="/#contacto"
            className="mt-9 inline-flex h-12 items-center gap-2 bg-brand-navy px-7 text-sm font-medium text-brand-white hover:bg-brand-navy/90"
          >
            Agendar Consulta
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  )
}
