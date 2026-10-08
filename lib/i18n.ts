export type Lang = "en" | "es"

export const languages: Lang[] = ["en", "es"]

export type Service = {
  name: string
  description: string
  duration?: string
  tags: string[]
  featured?: boolean
}

export type ServiceGroup = {
  id: string
  title: string
  intro: string
  items: Service[]
}

export type Review = {
  quote: string
  author: string
  treatment: string
}

const en = {
  meta: {
    title: "Arecio Rodríguez · Advanced Skin Aesthetics in Miami",
    description:
      "Florida licensed facial skin specialist in Miami. Personalized facials, acne, anti-aging, pigmentation and scar treatments with advanced technology.",
  },
  nav: {
    services: "Services",
    about: "About",
    reviews: "Reviews",
    visit: "Visit Us",
    contact: "Contact",
    book: "Book Now",
    menu: "Open menu",
    close: "Close menu",
    language: "Cambiar a español",
  },
  hero: {
    eyebrow: "Florida Licensed Facial Skin Specialist",
    title: "Clinical skin care,",
    titleAccent: "results you can see.",
    body: "Personalized facial and body treatments in Miami that combine professional technique, specialized actives and advanced aesthetic technology — always starting with a proper skin evaluation.",
    primary: "Book your appointment",
    secondary: "Explore services",
    stats: [
      { value: "10+", label: "Years of experience" },
      { value: "20+", label: "Treatments & protocols" },
      { value: "1:1", label: "Personalized care" },
    ],
  },
  highlights: [
    {
      title: "Professional evaluation",
      body: "Every protocol starts by understanding your skin type, condition and goals.",
    },
    {
      title: "Advanced technology",
      body: "Radiofrequency, laser, microneedling and more — applied only when indicated.",
    },
    {
      title: "Results-oriented",
      body: "Progressive plans with follow-up so you can see and feel the change.",
    },
  ],
  services: {
    eyebrow: "Services",
    title: "Treatments designed around your skin",
    body: "Pricing depends on your evaluation and the protocol you need. Book a consultation and we will build your plan together.",
    consult: "Price on consultation",
    book: "Book",
    resultsTitle: "Real results",
    resultsBody:
      "Before & after from our facial protocols. Individual results may vary.",
    resultsLabels: ["Regular Facial", "Deep Cleansing Facial"],
    groups: [
      {
        id: "facials",
        title: "Facials",
        intro:
          "Cleansing and renewal rituals to keep your skin healthy, balanced and luminous.",
        items: [
          {
            name: "Regular Facial",
            description:
              "Essential cleansing, exfoliation, extractions, mask, hydration and SPF to keep skin fresh and balanced.",
            duration: "60 min",
            tags: ["Acne-prone", "Dull skin"],
          },
          {
            name: "Deep Cleansing Facial",
            description:
              "Intensive protocol with enzymatic peel, extractions, high frequency, diamond tip and LED therapy.",
            duration: "90 min",
            tags: ["Pores", "Texture"],
            featured: true,
          },
          {
            name: "Hydrafacial",
            description:
              "Cleanse, extract and infuse hydration in one comfortable renewal protocol.",
            tags: ["Hydration", "Glow"],
          },
          {
            name: "Dermaplaning Facial",
            description:
              "Gentle surface renewal for smoother, brighter skin that absorbs actives better.",
            duration: "60 min",
            tags: ["Texture", "Glow"],
          },
          {
            name: "Enzymatic Peel Facial",
            description:
              "Enzyme exfoliation that renews and evens the skin without aggression.",
            tags: ["Tone", "Texture"],
          },
          {
            name: "Detox Facial",
            description:
              "Purifying ritual to refresh, decongest and restore comfort to the skin.",
            tags: ["Purify", "Balance"],
          },
          {
            name: "Carboxytherapy Facial",
            description:
              "Facial protocol incorporating carboxytherapy to revive tired, dull-looking skin.",
            tags: ["Dull skin", "Firmness"],
          },
          {
            name: "Microneedling / Dermapen Facial",
            description:
              "Controlled micro-stimulation focused on texture, marks and the appearance of scars.",
            tags: ["Scars", "Pores"],
          },
          {
            name: "PRP Facial",
            description:
              "Platelet-rich plasma protocol to support regeneration, subject to evaluation.",
            tags: ["Renewal", "Texture"],
          },
          {
            name: "Exosome Facial",
            description:
              "Advanced exosome protocol to support recovery and skin quality when indicated.",
            tags: ["Recovery", "Anti-aging"],
          },
        ],
      },
      {
        id: "treatments",
        title: "Advanced treatments",
        intro:
          "Targeted plans and technology for specific skin concerns, always after a professional assessment.",
        items: [
          {
            name: "Acne Treatment",
            description:
              "Personalized plan to balance oil, decongest pores and help control breakouts and marks.",
            tags: ["Acne", "Oily skin"],
            featured: true,
          },
          {
            name: "Anti-Aging Treatment",
            description:
              "Actives and technology to soften the look of lines and improve firmness and luminosity.",
            tags: ["Lines", "Firmness"],
          },
          {
            name: "Pigmentation & Dark Spots",
            description:
              "Progressive protocol to even tone and improve the appearance of hyperpigmentation.",
            tags: ["Spots", "Tone"],
          },
          {
            name: "Scar Treatment",
            description:
              "Combined techniques to progressively improve texture and the appearance of scars.",
            tags: ["Scars", "Texture"],
          },
          {
            name: "Radiofrequency",
            description:
              "Controlled thermal technology for firming face and body protocols.",
            tags: ["Firmness", "Tightening"],
          },
          {
            name: "Chemical Peel",
            description:
              "Chemical renewal selected according to your skin, area and goal.",
            tags: ["Tone", "Texture"],
          },
          {
            name: "Carbon Laser Peel",
            description:
              "Carbon and laser protocol for renewal, refined pores and instant glow.",
            tags: ["Pores", "Glow"],
          },
          {
            name: "Picosecond Laser",
            description:
              "Precision laser technology for specific goals, applied after evaluation.",
            tags: ["Spots", "Scars"],
          },
          {
            name: "BioPen",
            description:
              "Controlled stimulation technique for texture, marks and renewal.",
            tags: ["Texture", "Marks"],
          },
          {
            name: "Mole & Wart Removal",
            description:
              "Assessment to determine whether the procedure is suitable and safe for you.",
            tags: ["Evaluation"],
          },
        ],
      },
    ] as ServiceGroup[],
  },
  about: {
    eyebrow: "About",
    title: "Meet Arecio Rodríguez",
    role: "Facial & Body Aesthetics Specialist · Florida Certified Full Specialist",
    paragraphs: [
      "With more than 10 years of experience in facial and body aesthetics, Arecio specializes in caring for and transforming the skin through personalized, results-oriented treatments.",
      "Certified as a Full Specialist in the state of Florida, he has extensive experience treating acne, hyperpigmentation, dark spots, scars, uneven texture and signs of aging — combining professional techniques, specialized actives and advanced aesthetic technology.",
      "His philosophy goes beyond beauty: every treatment aims to improve the health, appearance and quality of the skin, helping each client feel more confident.",
    ],
    quote:
      "Aesthetics isn’t vanity — it’s health, well-being and confidence in your own skin.",
    values: ["Professionalism", "Trust", "Technology", "Results"],
    cta: "Book a consultation",
  },
  reviews: {
    eyebrow: "Reviews",
    title: "What our clients say",
    body: "Your trust is our best result.",
    cta: "See more on Instagram",
    prev: "Previous review",
    next: "Next review",
    // TODO: reemplazar por reseñas reales (Google / Instagram) antes de publicar.
    items: [
      {
        quote:
          "My skin has never looked this clear. Arecio explained every step and adjusted the treatment to what my skin needed.",
        author: "Daniela M.",
        treatment: "Acne Treatment",
      },
      {
        quote:
          "Very professional and detail-oriented. The deep cleansing facial left my skin incredibly smooth and bright.",
        author: "Carlos R.",
        treatment: "Deep Cleansing Facial",
      },
      {
        quote:
          "I finally found someone who takes pigmentation seriously. Progress session after session and great follow-up.",
        author: "Yamila P.",
        treatment: "Dark Spots Treatment",
      },
      {
        quote:
          "Clean, calm space and real expertise. You can tell he truly cares about results.",
        author: "Andrea L.",
        treatment: "Microneedling",
      },
    ] as Review[],
  },
  visit: {
    eyebrow: "Visit Us",
    title: "Our studio in Miami",
    addressLabel: "Address",
    hoursLabel: "Hours",
    hours: [
      { day: "Monday – Saturday", time: "By appointment" },
      { day: "Sunday", time: "Closed" },
    ],
    directions: "Get directions",
    parking:
      "Located on W Flagler St, second floor. Please arrive 10 minutes before your appointment.",
    mapTitle: "Map showing the studio location",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk about your skin",
    body: "Tell us what you would like to improve and we will help you choose the right next step.",
    name: "Full name",
    phone: "Phone",
    email: "Email",
    service: "Service of interest",
    servicePlaceholder: "Select a service",
    serviceOther: "Not sure — I need an evaluation",
    message: "Message",
    messagePlaceholder: "Tell us about your skin concerns or goals…",
    submit: "Send via WhatsApp",
    note: "Submitting opens WhatsApp with your message ready to send.",
    greeting: "Hello Arecio! I would like more information.",
    or: "Or reach us directly",
  },
  footer: {
    rights: "All rights reserved.",
    disclaimer:
      "Results vary from person to person. All treatments require a prior professional evaluation.",
  },
}

export type Dictionary = typeof en

const es: Dictionary = {
  meta: {
    title: "Arecio Rodríguez · Estética Avanzada de la Piel en Miami",
    description:
      "Especialista en piel facial con licencia en Florida. Faciales personalizados, tratamientos para acné, antiedad, manchas y cicatrices con tecnología avanzada en Miami.",
  },
  nav: {
    services: "Servicios",
    about: "Sobre mí",
    reviews: "Reseñas",
    visit: "Visítanos",
    contact: "Contacto",
    book: "Reservar",
    menu: "Abrir menú",
    close: "Cerrar menú",
    language: "Switch to English",
  },
  hero: {
    eyebrow: "Especialista en piel facial con licencia en Florida",
    title: "Cuidado clínico de la piel,",
    titleAccent: "resultados que se ven.",
    body: "Tratamientos faciales y corporales personalizados en Miami que combinan técnica profesional, activos especializados y tecnología estética avanzada — siempre a partir de una evaluación de tu piel.",
    primary: "Reserva tu cita",
    secondary: "Ver servicios",
    stats: [
      { value: "10+", label: "Años de experiencia" },
      { value: "20+", label: "Tratamientos y protocolos" },
      { value: "1:1", label: "Atención personalizada" },
    ],
  },
  highlights: [
    {
      title: "Evaluación profesional",
      body: "Cada protocolo comienza entendiendo tu tipo de piel, su condición y tus objetivos.",
    },
    {
      title: "Tecnología avanzada",
      body: "Radiofrecuencia, láser, microneedling y más — aplicados solo cuando están indicados.",
    },
    {
      title: "Orientado a resultados",
      body: "Planes progresivos con seguimiento para que veas y sientas el cambio.",
    },
  ],
  services: {
    eyebrow: "Servicios",
    title: "Tratamientos diseñados para tu piel",
    body: "El precio depende de tu evaluación y del protocolo que necesites. Reserva una consulta y construimos tu plan juntos.",
    consult: "Precio en consulta",
    book: "Reservar",
    resultsTitle: "Resultados reales",
    resultsBody:
      "Antes y después de nuestros protocolos faciales. Los resultados pueden variar.",
    resultsLabels: ["Facial Regular", "Facial Profundo"],
    groups: [
      {
        id: "facials",
        title: "Faciales",
        intro:
          "Rituales de limpieza y renovación para mantener tu piel sana, equilibrada y luminosa.",
        items: [
          {
            name: "Facial Regular",
            description:
              "Limpieza esencial, exfoliación, extracciones, mascarilla, hidratación y SPF para una piel fresca y equilibrada.",
            duration: "60 min",
            tags: ["Tendencia acneica", "Piel opaca"],
          },
          {
            name: "Facial Profundo",
            description:
              "Protocolo intensivo con peeling enzimático, extracciones, alta frecuencia, punta de diamante y LED.",
            duration: "90 min",
            tags: ["Poros", "Textura"],
            featured: true,
          },
          {
            name: "Hidrofacial",
            description:
              "Limpieza, extracción e hidratación en un protocolo de renovación confortable.",
            tags: ["Hidratación", "Luminosidad"],
          },
          {
            name: "Facial con Dermaplaning",
            description:
              "Renovación superficial suave para una piel más lisa y luminosa que absorbe mejor los activos.",
            duration: "60 min",
            tags: ["Textura", "Luminosidad"],
          },
          {
            name: "Facial con Peeling Enzimático",
            description:
              "Exfoliación enzimática que renueva y unifica la piel sin agredirla.",
            tags: ["Tono", "Textura"],
          },
          {
            name: "Facial Detox",
            description:
              "Ritual purificante para refrescar, descongestionar y devolver confort a la piel.",
            tags: ["Purifica", "Equilibra"],
          },
          {
            name: "Facial con Carboxiterapia",
            description:
              "Protocolo facial con carboxiterapia para revitalizar pieles cansadas y apagadas.",
            tags: ["Piel opaca", "Firmeza"],
          },
          {
            name: "Facial con Microneedling / Dermapen",
            description:
              "Micro-estimulación controlada orientada a textura, marcas y apariencia de cicatrices.",
            tags: ["Cicatrices", "Poros"],
          },
          {
            name: "Facial con Plasma Rico en Plaquetas",
            description:
              "Protocolo con PRP para acompañar la regeneración, sujeto a valoración.",
            tags: ["Renovación", "Textura"],
          },
          {
            name: "Facial con Exosomas",
            description:
              "Protocolo avanzado con exosomas para apoyar la recuperación y calidad de la piel cuando está indicado.",
            tags: ["Recuperación", "Antiedad"],
          },
        ],
      },
      {
        id: "treatments",
        title: "Tratamientos avanzados",
        intro:
          "Planes y tecnología dirigidos a necesidades específicas, siempre tras una valoración profesional.",
        items: [
          {
            name: "Tratamiento para Acné",
            description:
              "Plan personalizado para equilibrar la grasa, descongestionar poros y ayudar a controlar brotes y marcas.",
            tags: ["Acné", "Piel grasa"],
            featured: true,
          },
          {
            name: "Tratamiento Antiedad",
            description:
              "Activos y tecnología para suavizar visualmente líneas y mejorar firmeza y luminosidad.",
            tags: ["Líneas", "Firmeza"],
          },
          {
            name: "Manchas e Hiperpigmentación",
            description:
              "Protocolo progresivo para unificar el tono y mejorar la apariencia de las manchas.",
            tags: ["Manchas", "Tono"],
          },
          {
            name: "Tratamiento de Cicatrices",
            description:
              "Técnicas combinadas para mejorar progresivamente la textura y apariencia de cicatrices.",
            tags: ["Cicatrices", "Textura"],
          },
          {
            name: "Radiofrecuencia",
            description:
              "Tecnología térmica controlada para protocolos de firmeza facial y corporal.",
            tags: ["Firmeza", "Tensado"],
          },
          {
            name: "Peeling Químico",
            description:
              "Renovación química seleccionada según tu piel, la zona y el objetivo.",
            tags: ["Tono", "Textura"],
          },
          {
            name: "Carbón Láser",
            description:
              "Protocolo con carbón y láser para renovar, afinar poros y aportar luminosidad.",
            tags: ["Poros", "Luminosidad"],
          },
          {
            name: "Láser Picosecond",
            description:
              "Tecnología láser de precisión para objetivos específicos, tras valoración.",
            tags: ["Manchas", "Cicatrices"],
          },
          {
            name: "BioPen",
            description:
              "Técnica de estimulación controlada para textura, marcas y renovación.",
            tags: ["Textura", "Marcas"],
          },
          {
            name: "Eliminación de Verrugas y Lunares",
            description:
              "Valoración para determinar si el procedimiento es adecuado y seguro para ti.",
            tags: ["Valoración"],
          },
        ],
      },
    ],
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Conoce a Arecio Rodríguez",
    role: "Especialista en Estética Facial y Corporal · Florida Certified Full Specialist",
    paragraphs: [
      "Con más de 10 años de experiencia en estética facial y corporal, Arecio se especializa en el cuidado y la transformación de la piel mediante tratamientos personalizados y orientados a resultados.",
      "Certificado como Full Specialist en el estado de Florida, cuenta con amplia experiencia en acné, hiperpigmentación, manchas, cicatrices, textura irregular y signos del envejecimiento, combinando técnicas profesionales, activos especializados y tecnología estética avanzada.",
      "Su filosofía va más allá de la belleza: cada tratamiento busca mejorar la salud, apariencia y calidad de la piel, ayudando a cada cliente a sentirse más seguro.",
    ],
    quote:
      "La estética no es solo vanidad; es salud, bienestar y confianza en tu propia piel.",
    values: ["Profesionalismo", "Confianza", "Tecnología", "Resultados"],
    cta: "Agenda una consulta",
  },
  reviews: {
    eyebrow: "Reseñas",
    title: "Lo que dicen nuestros clientes",
    body: "Tu confianza es nuestro mejor resultado.",
    cta: "Ver más en Instagram",
    prev: "Reseña anterior",
    next: "Reseña siguiente",
    // TODO: reemplazar por reseñas reales (Google / Instagram) antes de publicar.
    items: [
      {
        quote:
          "Mi piel nunca se había visto tan limpia. Arecio me explicó cada paso y adaptó el tratamiento a lo que mi piel necesitaba.",
        author: "Daniela M.",
        treatment: "Tratamiento para Acné",
      },
      {
        quote:
          "Muy profesional y detallista. El facial profundo me dejó la piel increíblemente suave y luminosa.",
        author: "Carlos R.",
        treatment: "Facial Profundo",
      },
      {
        quote:
          "Por fin encontré a alguien que se toma en serio las manchas. Avance sesión tras sesión y un gran seguimiento.",
        author: "Yamila P.",
        treatment: "Tratamiento de Manchas",
      },
      {
        quote:
          "Un espacio limpio y tranquilo, y experiencia real. Se nota que de verdad le importan los resultados.",
        author: "Andrea L.",
        treatment: "Microneedling",
      },
    ],
  },
  visit: {
    eyebrow: "Visítanos",
    title: "Nuestro estudio en Miami",
    addressLabel: "Dirección",
    hoursLabel: "Horario",
    hours: [
      { day: "Lunes – Sábado", time: "Con cita previa" },
      { day: "Domingo", time: "Cerrado" },
    ],
    directions: "Cómo llegar",
    parking:
      "Ubicados en W Flagler St, segundo piso. Por favor llega 10 minutos antes de tu cita.",
    mapTitle: "Mapa con la ubicación del estudio",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos de tu piel",
    body: "Cuéntanos qué te gustaría mejorar y te ayudamos a elegir el siguiente paso.",
    name: "Nombre completo",
    phone: "Teléfono",
    email: "Email",
    service: "Servicio de interés",
    servicePlaceholder: "Selecciona un servicio",
    serviceOther: "No estoy seguro — necesito una valoración",
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos sobre tu piel o tus objetivos…",
    submit: "Enviar por WhatsApp",
    note: "Al enviar se abrirá WhatsApp con tu mensaje listo.",
    greeting: "¡Hola Arecio! Me gustaría recibir más información.",
    or: "O escríbenos directamente",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    disclaimer:
      "Los resultados varían según cada persona. Todos los tratamientos requieren una valoración profesional previa.",
  },
}

export const dictionaries: Record<Lang, Dictionary> = { en, es }
