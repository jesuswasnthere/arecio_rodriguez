// Datos de negocio compartidos por todas las secciones.
// Edita aquí teléfono, enlaces y dirección; el resto de la web se actualiza solo.

export const site = {
  name: "Arecio Rodríguez",
  tagline: "Advanced Skin Aesthetics",
  credential: "Florida Licensed Facial Skin Specialist",
  url: "https://arecio-rodriguez.vercel.app",
  phoneDisplay: "+1 (786) 617-0823",
  phoneHref: "tel:+17866170823",
  whatsapp: "17866170823",
  email: "rodriguezarecio@gmail.com",
  instagram: "https://www.instagram.com/areciorodriguez_skinart",
  instagramHandle: "@areciorodriguez_skinart",
  // Los botones "Reservar" abren WhatsApp directamente. Cámbialo por Calendly, Square, Vagaro, etc. si lo necesitas.
  bookingUrl: "https://wa.me/17866170823",
  address: {
    line1: "10522 W Flagler St, 2nd Floor",
    line2: "Miami, FL 33174",
  },
  mapsQuery: "10522 W Flagler St, Miami, FL 33174",
} as const

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`
export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=15&output=embed`
