# Arecio Rodríguez · Advanced Skin Aesthetics

Landing bilingüe (EN/ES) para Arecio Rodríguez, Florida Licensed Facial Skin Specialist in Miami.

**Stack:** Bun · Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · desplegable en Vercel (DNS en Cloudflare).

## Desarrollo

```bash
bun install
bun dev          # http://localhost:3000
bun run lint
bun run typecheck
bun run build
```

## Dónde editar

| Qué | Archivo |
| --- | --- |
| Teléfono, email, Instagram, dirección, enlace de reserva (**Book Now**) | `lib/site.ts` |
| Todos los textos EN/ES, servicios, reseñas, horario | `lib/i18n.ts` |
| Secciones (Hero, Services, About, Reviews, Visit Us, Contact, Footer) | `components/sections.tsx` |
| Header, menú móvil y botón de idioma | `components/site-header.tsx` |
| Paleta de marca y tipografías | `app/globals.css`, `app/layout.tsx` |
| Imágenes optimizadas de la web | `public/images/` (originales en `media/`) |

Paleta (`media/brand`): blanco clínico `#F7F8F8` (60%), navy `#102A3A` (25%), gris acero `#69757D` (10%), dorado `#B79A62` (5%).

## Pendiente antes de publicar

- [ ] Sustituir las reseñas de ejemplo de `lib/i18n.ts` por reseñas reales (Google / Instagram).
- [ ] Confirmar horario real en `lib/i18n.ts` → `visit.hours`.
- [ ] Confirmar usuario de Instagram y `site.url` (dominio final) en `lib/site.ts`.
- [ ] Opcional: cambiar `bookingUrl` (Google Forms) por Calendly / Square / Vagaro.

## Deploy (Vercel + Cloudflare)

1. Importar el repo en Vercel (detecta Next.js y Bun por `bun.lock`).
2. En Vercel → Domains, añadir el dominio.
3. En Cloudflare DNS: `CNAME www → cname.vercel-dns.com` y `A @ → 76.76.21.21`, con proxy **DNS only** (nube gris) para que Vercel emita el SSL.
