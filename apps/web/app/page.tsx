"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Treatment = {
  id: string
  name: string
  category: "Facial" | "Corporal"
  description: string
  benefits: string[]
  protocol: string[]
  duration: string
  price: string
  needs: string[]
  resultImage?: string
}

const professionalNote =
  "Todo protocolo comienza con una evaluación previa. El tratamiento se adapta al tipo, condición y necesidades de cada piel bajo criterio profesional."

/* Productos y carrito: lógica conservada para activar cuando se habilite la tienda.
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
// Al activar el catálogo: añadir al carrito, actualizar cantidades y enviar el pedido por WhatsApp.
*/

const treatments: Treatment[] = [
  { id: "limpieza-regular", name: "Limpieza Facial Regular", category: "Facial", description: "Limpieza esencial para mantener una piel fresca, equilibrada y luminosa.", benefits: ["Retira impurezas", "Equilibra grasa", "Mejora la luminosidad"], protocol: ["Limpieza y exfoliación", "Vapor y extracciones", "Mascarilla, hidratación y protección solar"], duration: "60 minutos", price: "Consultar", needs: ["acne", "poros", "deshidratacion", "opaca"], resultImage: "/media/before_after/limpieza_facial_regular.jpeg" },
  { id: "limpieza-profunda", name: "Limpieza Facial Profunda", category: "Facial", description: "Protocolo intensivo para descongestionar poros y mejorar textura e hidratación.", benefits: ["Descongestiona poros", "Suaviza textura", "Revitaliza"], protocol: ["Limpieza, exfoliación y vapor", "Peeling enzimático y extracciones", "Alta frecuencia, punta de diamante, LED y mascarilla"], duration: "1 hora 30 minutos", price: "Consultar", needs: ["acne", "poros", "opaca", "cicatrices"], resultImage: "/media/before_after/limpieza_facial_profunda.jpeg" },
  { id: "dermaplaning", name: "Facial con Dermaplaning", category: "Facial", description: "Renovación superficial para una piel más suave y uniforme.", benefits: ["Suaviza la superficie", "Aporta luminosidad", "Prepara para activos"], protocol: ["Evaluación y limpieza", "Dermaplaning profesional", "Calmante, hidratación y SPF"], duration: "60 minutos", price: "Consultar", needs: ["poros", "opaca", "deshidratacion"] },
  { id: "carboxiterapia", name: "Facial con Carboxiterapia", category: "Facial", description: "Protocolo que incorpora carboxiterapia según valoración y objetivo estético.", benefits: ["Apoya la circulación", "Mejora apariencia apagada", "Personalizable"], protocol: ["Diagnóstico", "Aplicación de carboxiterapia", "Mascarilla y protección"], duration: "Consultar", price: "Consultar", needs: ["opaca", "flacidez", "arrugas"] },
  { id: "hidrafacial", name: "Hidrafacial", category: "Facial", description: "Limpieza, extracción e hidratación en un protocolo de renovación confortable.", benefits: ["Limpia y extrae", "Hidrata", "Devuelve luminosidad"], protocol: ["Limpieza y exfoliación", "Extracción e infusión", "Protección solar"], duration: "Consultar", price: "Consultar", needs: ["poros", "deshidratacion", "opaca"] },
  { id: "peeling-enzimatico", name: "Facial con Peeling Enzimático", category: "Facial", description: "Exfoliación enzimática seleccionada para renovar sin agredir la piel.", benefits: ["Renueva", "Unifica visualmente", "Suaviza textura"], protocol: ["Preparación", "Peeling enzimático", "Neutralización, calma y SPF"], duration: "Consultar", price: "Consultar", needs: ["manchas", "poros", "opaca"] },
  { id: "dermapen", name: "Facial con Dermapen", category: "Facial", description: "Microneedling profesional orientado a textura, marcas y apariencia de cicatrices.", benefits: ["Estimula renovación", "Trabaja textura", "Personaliza activos"], protocol: ["Evaluación y asepsia", "Microneedling controlado", "Calma, hidratación y cuidados posteriores"], duration: "Consultar", price: "Consultar", needs: ["cicatrices", "poros", "arrugas"] },
  { id: "prp-facial", name: "Facial con Plasma Rico en Plaquetas", category: "Facial", description: "Protocolo personalizado con PRP, sujeto a valoración y condiciones de cada cliente.", benefits: ["Acompaña la regeneración", "Mejora apariencia de textura", "Plan progresivo"], protocol: ["Valoración", "Preparación y aplicación", "Indicaciones posteriores"], duration: "Consultar", price: "Consultar", needs: ["cicatrices", "arrugas", "flacidez"] },
  { id: "exosomas", name: "Facial con Exosomas", category: "Facial", description: "Tratamiento avanzado con exosomas incorporado únicamente cuando está indicado.", benefits: ["Acompaña la recuperación", "Apoya textura", "Protocolo individual"], protocol: ["Valoración", "Preparación y aplicación", "Seguimiento y cuidados"], duration: "Consultar", price: "Consultar", needs: ["cicatrices", "arrugas", "flacidez"] },
  { id: "detox", name: "Facial Detox", category: "Facial", description: "Ritual purificante para refrescar y devolver confort a la piel.", benefits: ["Purifica", "Refresca", "Equilibra"], protocol: ["Limpieza y exfoliación", "Mascarilla detox", "Hidratación y SPF"], duration: "Consultar", price: "Consultar", needs: ["acne", "poros", "opaca"] },
  { id: "radiofrecuencia", name: "Radiofrecuencia", category: "Corporal", description: "Tecnología térmica controlada integrada en protocolos corporales de firmeza.", benefits: ["Acompaña firmeza", "Mejora apariencia de piel", "Sesión adaptable"], protocol: ["Evaluación", "Aplicación por zonas", "Cuidados posteriores"], duration: "Consultar", price: "Consultar", needs: ["flacidez"] },
  { id: "prp-corporal", name: "Plasma Rico en Plaquetas Corporal", category: "Corporal", description: "Protocolo corporal personalizado, sujeto a evaluación profesional.", benefits: ["Apoya renovación", "Trabaja textura", "Plan progresivo"], protocol: ["Valoración", "Preparación y aplicación", "Seguimiento"], duration: "Consultar", price: "Consultar", needs: ["cicatrices", "flacidez"] },
  { id: "cicatrices", name: "Tratamiento de Cicatrices", category: "Corporal", description: "Plan personalizado para mejorar progresivamente la apariencia de cicatrices.", benefits: ["Trabaja textura", "Acompaña tono", "Seguimiento profesional"], protocol: ["Diagnóstico", "Técnica según cicatriz", "Cuidados y seguimiento"], duration: "Consultar", price: "Consultar", needs: ["cicatrices", "manchas"] },
  { id: "peeling-quimico", name: "Peeling Químico", category: "Corporal", description: "Renovación química seleccionada según zona, piel y objetivo.", benefits: ["Renueva", "Mejora apariencia de tono", "Suaviza textura"], protocol: ["Evaluación", "Aplicación controlada", "Neutralización y cuidados"], duration: "Consultar", price: "Consultar", needs: ["manchas", "poros", "cicatrices"] },
  { id: "microneedling-corporal", name: "Microneedling o Dermapen", category: "Corporal", description: "Estimulación controlada para textura y marcas corporales.", benefits: ["Trabaja marcas", "Estimula renovación", "Protocolo por zona"], protocol: ["Preparación", "Microneedling", "Calma y cuidados posteriores"], duration: "Consultar", price: "Consultar", needs: ["cicatrices", "flacidez"] },
  { id: "verrugas-lunares", name: "Eliminación de verrugas y lunares", category: "Corporal", description: "Consulta de valoración para determinar si el procedimiento es adecuado y seguro.", benefits: ["Evaluación individual", "Orientación profesional", "Plan seguro"], protocol: ["Valoración previa", "Derivación si corresponde", "Indicaciones posteriores"], duration: "Consultar", price: "Consultar", needs: ["cicatrices"] },
  { id: "laser-picosecond", name: "Láser Picosecond", category: "Corporal", description: "Tecnología de precisión que se incorpora solo después de una valoración.", benefits: ["Plan personalizado", "Trabaja objetivos específicos", "Seguimiento"], protocol: ["Evaluación", "Sesión según indicación", "Protección y cuidados"], duration: "Consultar", price: "Consultar", needs: ["manchas", "cicatrices"] },
  { id: "carbon-laser", name: "Carbón láser", category: "Corporal", description: "Protocolo de renovación y luminosidad con láser y carbón, sujeto a indicación.", benefits: ["Renueva", "Mejora apariencia de poros", "Aporta luminosidad"], protocol: ["Preparación", "Aplicación de carbón y láser", "Calma y protección"], duration: "Consultar", price: "Consultar", needs: ["poros", "opaca"] },
  { id: "biopen", name: "Biopen", category: "Corporal", description: "Técnica de estimulación controlada para objetivos de textura y marcas.", benefits: ["Trabaja textura", "Estimula renovación", "Adaptable"], protocol: ["Valoración", "Aplicación por zona", "Cuidados posteriores"], duration: "Consultar", price: "Consultar", needs: ["cicatrices", "flacidez"] },
]

const needs = [
  { id: "acne", label: "Acné y congestión" },
  { id: "manchas", label: "Manchas e hiperpigmentación" },
  { id: "arrugas", label: "Líneas y arrugas" },
  { id: "flacidez", label: "Flacidez" },
  { id: "poros", label: "Poros y textura" },
  { id: "deshidratacion", label: "Deshidratación" },
  { id: "opaca", label: "Piel opaca" },
  { id: "cicatrices", label: "Cicatrices y marcas" },
]

const whatsappNumber = "17866170823"
const consultationFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfe5g5Mb8y4f6dcsQYQPGOseGvbJt2HKMeL8JF7io0pB-62fg/viewform"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedNeed, setSelectedNeed] = useState("acne")
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null)
  const filteredTreatments = treatments.filter((treatment) => treatment.needs.includes(selectedNeed))
  const nav = [
    ["Inicio", "#inicio"], ["Sobre mí", "/sobre-mi"], ["Faciales", "#tratamientos-faciales"],
    ["Corporales", "#tratamientos-corporales"], ["Necesidades", "#tratamientos-necesidad"], ["Resultados", "#resultados"], ["Contacto", "#contacto"],
  ]

  return (
    <div className="min-h-screen bg-brand-white text-brand-navy">
      <header className="sticky top-0 z-40 border-b border-brand-steel/20 bg-brand-white/95 backdrop-blur">
        <div className="bg-brand-navy px-4 py-2.5 text-center text-[10px] font-medium uppercase tracking-[0.12em] leading-relaxed text-brand-white sm:text-xs sm:tracking-[0.16em]">
          Especialista en estética facial <span className="mx-1 text-brand-champagne">·</span> Dermapen <span className="mx-1 text-brand-champagne">·</span> Tratamientos antiedad <span className="mx-1 text-brand-champagne">·</span> Acné <span className="mx-1 text-brand-champagne">·</span> Hiperpigmentación <span className="mx-1 text-brand-champagne">·</span> Tratamientos corporales
        </div>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10" aria-label="Navegación principal">
          <a href="#inicio" className="text-sm font-semibold tracking-[0.18em]">ARECIO RODRÍGUEZ</a>
          <div className="hidden items-center gap-5 text-xs font-medium tracking-[0.08em] text-brand-steel lg:flex">
            {nav.map(([label, href]) => <a key={href} href={href} className="hover:text-brand-navy">{label}</a>)}
          </div>
          <div className="flex items-center gap-3">
            <Button className="hidden rounded-none bg-brand-navy text-brand-white hover:bg-brand-navy/90 sm:inline-flex" onClick={() => { window.location.hash = "reservar" }}>Reservar cita</Button>
            <Button size="sm" className="rounded-none bg-brand-navy text-brand-white hover:bg-brand-navy/90 sm:hidden" onClick={() => { window.location.hash = "reservar" }}>Reservar</Button>
            <button type="button" className="lg:hidden" aria-label="Abrir menú" onClick={() => setMobileMenuOpen(true)}><Menu size={22} /></button>
          </div>
        </nav>
        {mobileMenuOpen && <div className="fixed inset-0 z-50 bg-brand-navy/30 lg:hidden" role="dialog" aria-modal="true">
          <div className="absolute right-0 top-0 h-full w-[min(22rem,90vw)] bg-brand-white p-6 shadow-xl">
            <div className="flex justify-between border-b border-brand-steel/20 pb-5"><span className="text-xs tracking-[0.16em]">NAVEGACIÓN</span><button type="button" aria-label="Cerrar menú" onClick={() => setMobileMenuOpen(false)}><X size={22} /></button></div>
            <div className="flex flex-col gap-6 pt-8">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="text-xl">{label}</a>)}<Button className="mt-3 rounded-none bg-brand-navy text-brand-white" onClick={() => { window.location.hash = "reservar"; setMobileMenuOpen(false) }}>Reservar cita</Button></div>
          </div>
        </div>}
      </header>

      <main>
        <section id="inicio" className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-10 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="mb-5 text-xs font-medium tracking-[0.24em] text-brand-steel">ARECIO RODRÍGUEZ · ESTÉTICA AVANZADA</p>
              <h1 className="max-w-3xl text-5xl font-medium leading-[.98] tracking-[-.05em] sm:text-7xl">Tu piel, cuidada con criterio.</h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-brand-steel">Tratamientos faciales y corporales personalizados para una piel saludable, fuerte y verdaderamente tuya.</p>
              <Button size="lg" className="mt-9 h-14 rounded-none bg-brand-champagne px-8 text-base text-brand-navy hover:bg-brand-champagne/90" onClick={() => { window.location.hash = "reservar" }}>Reservar cita <ArrowUpRight size={18} /></Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-navy"><Image src="/media/portadas_selfies_perfiles/portada_home.jpeg" alt="Arecio Rodríguez trabajando en estética" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" /></div>
          </div>
        </section>

        <section id="sobre-mi" className="border-y border-brand-steel/20 bg-white"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-10"><div><p className="text-xs tracking-[.24em] text-brand-steel">SOBRE MÍ</p><h2 className="mt-4 text-4xl font-medium tracking-[-.04em]">Experiencia que se adapta a ti.</h2></div><div className="max-w-2xl text-base leading-relaxed text-brand-steel"><p>Con más de 10 años de experiencia en estética facial y corporal, Arecio Rodríguez acompaña cada piel con protocolos personalizados y orientados a resultados.</p><p className="mt-4">Certified Full Specialist en Florida, trabaja acné, hiperpigmentación, textura, cicatrices y signos del envejecimiento combinando técnicas profesionales, activos y tecnología estética avanzada.</p><a href="/sobre-mi" className="mt-6 inline-flex items-center gap-2 font-medium text-brand-navy underline underline-offset-4">Conocer más sobre Arecio <ArrowUpRight size={16} /></a></div></div></section>

        {(["Facial", "Corporal"] as const).map((category) => <section key={category} id={category === "Facial" ? "tratamientos-faciales" : "tratamientos-corporales"} className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-10">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs tracking-[.24em] text-brand-steel">TRATAMIENTOS {category.toUpperCase()}ES</p><h2 className="mt-3 text-4xl font-medium tracking-[-.04em]">{category === "Facial" ? "Protocolos para el rostro." : "Cuidado corporal con propósito."}</h2></div><p className="max-w-sm text-sm leading-relaxed text-brand-steel">Valoración previa, protocolo claro y acompañamiento profesional.</p></div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{treatments.filter((treatment) => treatment.category === category).map((treatment) => <TreatmentCard key={treatment.id} treatment={treatment} onSelect={setSelectedTreatment} />)}</div>
        </section>)}

        <section id="tratamientos-necesidad" className="bg-brand-navy text-brand-white"><div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-10"><p className="text-xs tracking-[.24em] text-brand-champagne">TRATAMIENTOS POR NECESIDAD</p><h2 className="mt-3 max-w-2xl text-4xl font-medium tracking-[-.04em] sm:text-5xl">Elige lo que quieres trabajar.</h2><div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{needs.map((need) => <button type="button" key={need.id} onClick={() => setSelectedNeed(need.id)} aria-pressed={selectedNeed === need.id} className={`border px-4 py-4 text-left text-sm transition ${selectedNeed === need.id ? "border-brand-champagne bg-brand-champagne text-brand-navy" : "border-brand-steel/50 hover:border-brand-champagne"}`}>{need.label}</button>)}</div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filteredTreatments.map((treatment) => <TreatmentCard key={treatment.id} treatment={treatment} onSelect={setSelectedTreatment} dark />)}</div></div></section>

        <section id="resultados" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-10"><p className="text-xs tracking-[.24em] text-brand-steel">ANTES Y DESPUÉS / RESULTADOS</p><h2 className="mt-3 text-4xl font-medium tracking-[-.04em] sm:text-5xl">Resultados reales, con autorización.</h2><p className="mt-5 max-w-2xl text-sm leading-relaxed text-brand-steel">Cada resultado es personal y progresivo. Estos collages documentan tratamientos realizados y compartidos con autorización.</p><div className="mt-10 grid gap-6 md:grid-cols-2"><ResultImage src="/media/before_after/limpieza_facial_regular.jpeg" alt="Resultado autorizado de limpieza facial regular" title="Limpieza facial regular" /><ResultImage src="/media/before_after/limpieza_facial_profunda.jpeg" alt="Resultado autorizado de limpieza facial profunda" title="Limpieza facial profunda" /></div></section>

        <section id="reservar" className="bg-brand-champagne"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 py-16 sm:py-20 lg:flex-row lg:items-end lg:px-10"><div><p className="text-xs tracking-[.24em] text-brand-steel">RESERVAR CITA</p><h2 className="mt-3 max-w-2xl text-4xl font-medium tracking-[-.04em] sm:text-5xl">Empecemos con una valoración.</h2><p className="mt-5 max-w-lg text-sm leading-relaxed text-brand-steel">Cuéntame qué te gustaría mejorar y coordinamos tu próximo paso.</p></div><div className="flex flex-wrap gap-3"><Button className="h-12 rounded-none bg-brand-navy text-brand-white hover:bg-brand-navy/90" onClick={() => window.open(consultationFormUrl, "_blank")}>Completar formulario <ArrowUpRight size={16} /></Button><Button variant="outline" className="h-12 rounded-none border-brand-navy text-brand-navy" onClick={() => window.open(`https://wa.me/${whatsappNumber}`, "_blank")}>WhatsApp</Button></div></div></section>

        <section id="contacto" className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-10"><div className="grid gap-10 lg:grid-cols-2"><div><p className="text-xs tracking-[.24em] text-brand-steel">CONTACTO</p><h2 className="mt-3 text-4xl font-medium tracking-[-.04em]">Hablemos de tu piel.</h2><div className="mt-8 space-y-4 text-sm text-brand-steel"><a className="flex items-center gap-3 hover:text-brand-navy" href={`https://wa.me/${whatsappNumber}`}><Phone size={17} /> +1 (786) 617-0823 · WhatsApp</a><a className="flex items-center gap-3 hover:text-brand-navy" href="mailto:rodriguezarecio@gmail.com"><Mail size={17} /> rodriguezarecio@gmail.com</a><p className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0" />10522 W Flagler, Miami FL 33174 · 2do piso</p></div></div><form className="grid gap-4" action={`mailto:rodriguezarecio@gmail.com`} method="post" encType="text/plain"><label className="grid gap-2 text-sm">Nombre<input name="nombre" required className="h-11 border border-brand-steel/30 bg-white px-3" /></label><label className="grid gap-2 text-sm">Email<input name="email" type="email" required className="h-11 border border-brand-steel/30 bg-white px-3" /></label><label className="grid gap-2 text-sm">¿En qué te puedo ayudar?<textarea name="mensaje" rows={4} className="border border-brand-steel/30 bg-white p-3" /></label><Button type="submit" className="h-12 w-fit rounded-none bg-brand-navy text-brand-white hover:bg-brand-navy/90">Enviar consulta</Button></form></div></section>
      </main>
      <footer className="bg-brand-navy px-5 py-10 text-brand-white lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm sm:flex-row"><span className="font-semibold tracking-[.18em]">ARECIO RODRÍGUEZ</span><span className="text-brand-steel">Skin health, considered.</span></div></footer>

      {selectedTreatment && <div className="fixed inset-0 z-50 flex items-center justify-center p-5" role="dialog" aria-modal="true" aria-labelledby="treatment-title"><button type="button" className="absolute inset-0 bg-brand-navy/60" aria-label="Cerrar información" onClick={() => setSelectedTreatment(null)} /><article className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-brand-white p-7 sm:p-10"><button type="button" className="absolute right-5 top-5" aria-label="Cerrar información" onClick={() => setSelectedTreatment(null)}><X size={21} /></button><p className="text-xs tracking-[.2em] text-brand-steel">{selectedTreatment.category.toUpperCase()}</p><h2 id="treatment-title" className="mt-3 text-3xl font-medium">{selectedTreatment.name}</h2>{selectedTreatment.resultImage && <Image src={selectedTreatment.resultImage} alt={`Collage de resultados de ${selectedTreatment.name}`} width={900} height={1200} className="mt-6 max-h-80 w-full object-contain" /> }<p className="mt-4 text-sm leading-relaxed text-brand-steel">{selectedTreatment.description}</p><div className="mt-7 grid gap-7 sm:grid-cols-2"><div><h3 className="text-xs tracking-[.16em] text-brand-steel">BENEFICIOS</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm">{selectedTreatment.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul></div><div><h3 className="text-xs tracking-[.16em] text-brand-steel">PROTOCOLO</h3><ol className="mt-3 space-y-2 text-sm">{selectedTreatment.protocol.map((step, index) => <li key={step}>{index + 1}. {step}</li>)}</ol></div></div><div className="mt-7 border-t border-brand-steel/20 pt-5 text-sm"><p><strong>Duración:</strong> {selectedTreatment.duration}</p><p className="mt-2"><strong>Precio:</strong> {selectedTreatment.price}</p><p className="mt-5 text-brand-steel">{professionalNote}</p></div><Button className="mt-7 rounded-none bg-brand-navy text-brand-white hover:bg-brand-navy/90" onClick={() => { setSelectedTreatment(null); window.location.hash = "reservar" }}>Reservar este tratamiento <ArrowUpRight size={16} /></Button></article></div>}
    </div>
  )
}

function TreatmentCard({ treatment, onSelect, dark = false }: { treatment: Treatment; onSelect: (treatment: Treatment) => void; dark?: boolean }) {
  return <Card className={`flex flex-col rounded-none p-0 shadow-none ${dark ? "border-brand-steel/60 bg-brand-navy text-brand-white" : "border-brand-steel/25 bg-white"}`}><CardHeader className="px-6 pt-6"><CardTitle className="text-xl font-medium">{treatment.name}</CardTitle></CardHeader><CardContent className="flex flex-1 flex-col px-6 pb-6"><p className={`text-sm leading-relaxed ${dark ? "text-brand-steel" : "text-brand-steel"}`}>{treatment.description}</p><div className="mt-5 flex items-center justify-between gap-3 text-xs"><span>{treatment.duration}</span><span className="font-medium">{treatment.price}</span></div><Button type="button" onClick={() => onSelect(treatment)} variant={dark ? "outline" : "default"} className={`mt-6 w-full rounded-none ${dark ? "border-brand-champagne text-brand-white hover:bg-brand-champagne hover:text-brand-navy" : "bg-brand-navy text-brand-white hover:bg-brand-navy/90"}`}>Ver protocolo y reservar</Button></CardContent></Card>
}

function ResultImage({ src, alt, title }: { src: string; alt: string; title: string }) {
  return <figure className="overflow-hidden border border-brand-steel/20 bg-white"><Image src={src} alt={alt} width={1200} height={1600} className="h-auto w-full object-contain" sizes="(max-width: 768px) 100vw, 50vw" /><figcaption className="px-5 py-4 text-sm font-medium">{title} · resultado autorizado</figcaption></figure>
}
