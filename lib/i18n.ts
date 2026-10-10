export type Lang = "en" | "es"

export const languages: Lang[] = ["en", "es"]

export type Service = {
  name: string
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
    gallery: "Gallery",
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
    eyebrow: "Arecio Rodríguez · Advanced Skin Aesthetics",
    title: "Your skin deserves the extraordinary.",
    titleAccent: "Experience, innovation and results that inspire confidence.",
    body: "Discover a new experience in skin care. Personalized facial and body treatments that combine more than 10 years of experience, advanced aesthetic technology and high-quality actives to enhance your natural beauty.",
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
    book: "Book",
    groups: [
      {
        id: "facials",
        title: "Facials",
        intro:
          "Cleansing and renewal rituals to keep your skin healthy, balanced and luminous.",
        items: [
          { name: "Regular Facial" },
          { name: "Deep Cleansing Facial" },
          { name: "Dermaplaning Facial" },
          { name: "Carboxytherapy Facial" },
          { name: "Detox Facial" },
          { name: "Hydrafacial" },
          { name: "Microneedling / Dermapen Facial" },
        ],
      },
      {
        id: "treatments",
        title: "Treatments",
        intro:
          "Targeted plans and technology for specific skin concerns, always after a professional assessment.",
        items: [
          { name: "Acne Treatment" },
          { name: "Anti-Aging Treatment" },
          { name: "Dark Spots Treatment" },
          { name: "Scar Treatment" },
          { name: "Multipolar Facial Radiofrequency" },
          { name: "Fractional Radiofrequency" },
          { name: "Microneedling / Dermapen" },
          { name: "Carbon Laser Peel" },
          { name: "BioPen" },
          { name: "Chemical Peel" },
        ],
      },
      {
        id: "body",
        title: "Body",
        intro:
          "Body protocols to firm, contour and renew your skin, always after a professional assessment.",
        items: [
          { name: "Body Radiofrequency" },
          { name: "Ultracavitation" },
          { name: "Laser Lipo" },
        ],
      },
    ] as ServiceGroup[],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Real results",
    body: "Before & after photos from our protocols. Individual results may vary.",
    view: "View photo",
    close: "Close",
    prev: "Previous photo",
    next: "Next photo",
    // Pie de cada foto, por nombre de archivo (sin extensión).
    photos: {
      "01-facial-regular": "Regular Facial",
      "02-limpieza-profunda": "Deep Cleansing Facial",
    } as Record<string, string>,
  },
  about: {
    eyebrow: "About",
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
        treatment: "Microneedling / Dermapen",
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
    gallery: "Galería",
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
    eyebrow: "Arecio Rodríguez · Advanced Skin Aesthetics",
    title: "Tu piel merece lo extraordinario.",
    titleAccent: "Experiencia, innovación y resultados que inspiran confianza.",
    body: "Descubre una nueva experiencia en el cuidado de tu piel. Tratamientos faciales y corporales personalizados que combinan más de 10 años de experiencia, tecnología estética avanzada y activos de alta calidad para realzar tu belleza natural.",
    primary: "Reserva tu cita",
    secondary: "Ver servicios",
    stats: [
      { value: "10+", label: "Años de experiencia" },
      { value: "20+", label: "Tratamientos\ny protocolos" },
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
    body: "Tu piel es única, tu tratamiento también.\n\nOfrecemos una evaluación de la piel completamente GRATIS, donde analizamos sus características, necesidades y objetivos para recomendarte el tratamiento facial más adecuado.\n\nNuestro compromiso es brindarte una atención personalizada, con protocolos diseñados especialmente para ti.",
    book: "Reservar",
    groups: [
      {
        id: "facials",
        title: "Faciales",
        intro:
          "Rituales de limpieza y renovación para mantener tu piel sana, equilibrada y luminosa.",
        items: [
          { name: "Facial Regular" },
          { name: "Facial Profundo" },
          { name: "Facial con Dermaplaning" },
          { name: "Facial con Carboxiterapia" },
          { name: "Facial Detox" },
          { name: "Hidrofacial" },
          { name: "Facial con Microneedling / Dermapen" },
        ],
      },
      {
        id: "treatments",
        title: "Tratamientos",
        intro:
          "Planes y tecnología dirigidos a necesidades específicas, siempre tras una valoración profesional.",
        items: [
          { name: "Tratamiento para Acné" },
          { name: "Tratamiento Antiedad" },
          { name: "Tratamiento para Manchas" },
          { name: "Tratamiento para Cicatrices" },
          { name: "Radiofrecuencia Facial Multipolar" },
          { name: "Radiofrecuencia Fraccionada" },
          { name: "Microneedling / Dermapen" },
          { name: "Carbon Laser Peel" },
          { name: "BioPen" },
          { name: "Peeling Químico" },
        ],
      },
      {
        id: "body",
        title: "Corporal",
        intro:
          "Protocolos corporales para reafirmar, modelar y renovar tu piel, siempre tras una valoración profesional.",
        items: [
          { name: "Radiofrecuencia Corporal" },
          { name: "Ultracavitación" },
          { name: "Lipo Láser" },
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Galería",
    title: "Resultados reales",
    body: "Fotos de antes y después de nuestros protocolos. Los resultados pueden variar.",
    view: "Ver foto",
    close: "Cerrar",
    prev: "Foto anterior",
    next: "Foto siguiente",
    photos: {
      "01-facial-regular": "Facial Regular",
      "02-limpieza-profunda": "Facial Profundo",
    },
  },
  about: {
    eyebrow: "Sobre mí",
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
        treatment: "Microneedling / Dermapen",
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
