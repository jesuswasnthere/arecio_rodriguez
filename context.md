# Contexto del repo: arecio_rodriguez

Contexto **específico de este repo** para no re-explorarlo en cada chat. El resumen general de todos los repos vive fuera, en `/github/knowledge.md`; aquí solo va lo de este proyecto.
Última revisión: 2026-10-10.

## 1. Qué es

Landing bilingüe (EN/ES) de **Arecio Rodríguez · Advanced Skin Aesthetics**, _Florida Licensed Facial Skin Specialist_ en Miami (+10 años, estética facial y corporal).

- **Objetivo:** captar clientes. Todos los CTA de reservar abren **WhatsApp** (`site.bookingUrl`).
- **Tono:** profesional, clínico, premium, sobrio; sin promesas médicas ("results may vary", "previa valoración").
- **Idioma por defecto:** inglés; botón EN/ES en el header (se guarda en `localStorage`).

## 2. Stack y comandos

- **Bun** + **Next.js 16.3.6** (App Router) + React 19.2 + TypeScript + **Tailwind CSS v4**. Iconos `lucide-react`. Sin shadcn, sin monorepo.
- Fuentes: Cormorant Garamond (serif, títulos) y Jost (sans) vía `next/font/google`.
- Despliegue: Vercel; DNS en Cloudflare (pasos en `README.md`).
- Antes de usar APIs de Next, lee `node_modules/next/dist/docs/` (ver `AGENTS.md`).

```bash
bun install
bun dev              # http://localhost:3000
bun run lint
bun run typecheck    # next typegen && tsc --noEmit
bun run build
bun run format       # prettier + plugin tailwind
```

## 3. Estructura

```
app/
  layout.tsx       # fuentes, metadata/OG (EN), LanguageProvider
  page.tsx         # orden de secciones + JSON-LD BeautySalon; lee la galería (server)
  globals.css      # tokens de marca (@theme)
  icon.png, apple-icon.png
components/
  sections.tsx     # TODAS las secciones ("use client"): Hero, Highlights, Services,
                   # Gallery (+ visor), About, Reviews, Visit, Contact, Footer, MobileBookBar
  site-header.tsx  # header sticky, menú móvil, LanguageToggle
  language-provider.tsx  # contexto de idioma (useSyncExternalStore + localStorage)
  logo.tsx         # Logo, GoldRule, Eyebrow
lib/
  site.ts          # datos de negocio: teléfono, email, IG, dirección, bookingUrl, mapas
  i18n.ts          # TODOS los textos EN/ES (servicios, reseñas, horario, galería…)
  gallery.ts       # lee public/images/antes-despues/ en build (solo servidor)
public/images/     # imágenes servidas
  antes-despues/   # fotos de antes/después (galería automática)
media/             # material de origen, NO se sirve (brand, flyers, before_after, selfies)
```

Orden de la home: Hero → Highlights → Services → About → Gallery → Reviews → Visit → Contact → Footer (+ barra fija de reservar en móvil). Anclas: `#top #services #about #gallery #reviews #visit #contact`.

## 4. Dónde editar

| Qué                                                           | Archivo                                                                              |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Teléfono, email, Instagram, dirección, enlace de reserva      | `lib/site.ts`                                                                        |
| Textos EN/ES, servicios, reseñas, horario, pies de la galería | `lib/i18n.ts` (el tipo `Dictionary` sale de `en`; `es` debe tener las mismas claves) |
| Maquetación de secciones                                      | `components/sections.tsx`                                                            |
| Header / menú / idioma                                        | `components/site-header.tsx`                                                         |
| Paleta y fuentes                                              | `app/globals.css`, `app/layout.tsx`                                                  |
| Fotos antes/después                                           | `public/images/antes-despues/` (ver §6)                                              |

## 5. Identidad visual

Tokens en `app/globals.css` (clases `bg-navy`, `text-gold`, etc.), alineados con la guía de `media/brand/`:

| Token                | Valor                 | Uso                            |
| -------------------- | --------------------- | ------------------------------ |
| `clinic`             | `#F7F8F8`             | blanco clínico, fondo (~60%)   |
| `ivory`              | `#F4EEE4`             | fondos cálidos de sección      |
| `navy` / `navy-deep` | `#102A3A` / `#0B1F2B` | bloques, header, footer (~25%) |
| `steel`              | `#69757D`             | texto secundario (~10%)        |
| `gold` / `gold-soft` | `#B79A62` / `#D9C7A0` | acentos y CTA (~5%)            |

Estilo: esquinas rectas, etiquetas en mayúsculas con mucho tracking (`Eyebrow`), títulos serif, botones dorados `h-12`/`h-13` con `tracking-[0.2em]`, flechas cuadradas con borde `clinic/25` que se vuelven doradas al hover.

## 6. Funcionalidades

- **Servicios:** pestañas Facials / Treatments / Body; solo nombres (sin precios ni duraciones), cada uno con botón "Book".
- **Galería antes/después:** `lib/gallery.ts` lee `public/images/antes-despues/` en build (`.jpg/.jpeg/.png/.webp/.avif`, sin HEIC), ordena por nombre (`01-`, `02-`…). Pie de foto en `i18n.gallery.photos[<nombre sin extensión>]`; si falta, se genera desde el nombre (`03-acne` → "Acne"). Carrusel con flechas cuando hay >2 fotos y visor a pantalla completa (`<dialog>`: flechas, teclado, Esc, clic fuera). Añadir fotos = copiar archivos + commit.
  - Las fotos son collages reales **autorizados** por las clientas; no añadir fotos sin autorización.
- **Reseñas:** carrusel en móvil, grilla de 4 en escritorio. ⚠️ Son **de ejemplo** (TODO en `lib/i18n.ts`).
- **Visit:** dirección, horario (por confirmar), mapa embebido de Google.
- **Contacto:** el formulario no envía email: arma un mensaje y abre WhatsApp.
- **SEO:** metadata + Open Graph en `layout.tsx`, JSON-LD `BeautySalon` en `page.tsx`.

## 7. Pendiente

- Reseñas reales (Google / Instagram) en `lib/i18n.ts`.
- Confirmar horario (`visit.hours`), usuario de Instagram y dominio final (`site.url`).
- Opcional: `bookingUrl` a Calendly / Square / Vagaro.
- Imágenes sin usar en `public/images/`: `about.jpg`, `studio-1..3.jpg`, `treatment-dermaplaning.jpg`, `treatment-steam.jpg`.

## 8. Convenciones

- Commits cortos en español (o inglés), en imperativo, describiendo el cambio visible.
- El dueño del repo prefiere subir cambios directo a `main` cuando lo pide.
- Prettier sin punto y coma, comillas dobles, plugin de Tailwind. Comentarios en español.
- Verificar con `bun run lint`, `bun run typecheck`, `bun run build` y revisar en navegador móvil (390px) y escritorio, en EN y ES.
- Si cambias algo estructural (rutas, tokens, datos, convenciones), **actualiza este archivo** en el mismo commit.

## 9. Registro de decisiones

| Fecha      | Decisión                                                                                                                      |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 2026-10-08 | Se rehace la landing: app única Next.js 16 + Bun + Tailwind v4 con toggle EN/ES (antes era monorepo pnpm/Turborepo + shadcn). |
| 2026-10-09 | Botones de reservar abren WhatsApp en lugar del formulario.                                                                   |
| 2026-10-09 | Galería movida después de "Sobre mí".                                                                                         |
| 2026-10-10 | Galería antes/después automática desde `public/images/antes-despues/`, con carrusel y visor.                                  |
| 2026-10-10 | `knowledge.md` del repo pasa a `context.md` (específico del repo); el `knowledge.md` general vive en `/github`.               |
