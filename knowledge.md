# Knowledge: proyecto Arecio Rodríguez

Contexto del proyecto para no re-explorar el repo en cada chat. Léelo primero y consulta el código solo para lo que no esté aquí.
Última revisión: 2026-10-08 (commit `a400fd1`).

## 1. Qué es

Sitio web de **Arecio Rodríguez**, especialista en estética facial y corporal (*Florida Certified / Licensed Full Specialist*, +10 años de experiencia), en Miami, FL.

- **Marca:** ARECIO RODRÍGUEZ · Advanced Skin Aesthetics · "Florida Licensed Facial Skin Specialist". Lema del footer: *Skin health, considered.*
- **Objetivo del sitio:** captar clientes. El CTA principal es **Reservar cita**, que lleva a un formulario de Google o a WhatsApp.
- **Idioma:** español (`<html lang="es">`).
- **Tono:** profesional, clínico, premium, sobrio y masculino, sin clichés de spa. Los textos son prudentes: "mejora la apariencia de…", "sujeto a valoración", sin promesas médicas.

## 2. Datos de contacto (públicos, usados en la web)

| Dato | Valor |
|---|---|
| WhatsApp / teléfono | +1 (786) 617-0823 (`17866170823`) |
| Email | rodriguezarecio@gmail.com |
| Dirección | 10522 W Flagler, Miami FL 33174 · 2do piso |
| Instagram / Facebook | `areciorodriguez_skinart` (según el flyer) |
| Formulario de consulta | Google Form (URL en la constante `consultationFormUrl` de `apps/web/app/page.tsx`) |

## 3. Stack técnico

- **Monorepo:** pnpm (`pnpm@11.25.0`) + Turborepo (`turbo.json`). Node >= 20.9.
- **App:** `apps/web`, con **Next.js 16.3.6** (App Router), **React 19.2.8** y TypeScript.
- **Estilos:** Tailwind CSS v4 (`@tailwindcss/postcss`) y shadcn/ui, estilo `base-nova`, base `neutral`. Iconos con `lucide-react`. Tema con `next-themes`.
- **Fuentes:** Geist y Geist Mono (`next/font/google`).
- **Paquetes compartidos:**
  - `packages/ui`: componentes shadcn (`button`, `card`), `lib/utils.ts` y `src/styles/globals.css`, donde están los tokens de marca.
  - `packages/eslint-config` y `packages/typescript-config`.
- Los imports de UI van como `@workspace/ui/components/*`. La app tiene wrappers en `apps/web/components/ui/` (`button.tsx`, `card.tsx`).

> **Importante (de `AGENTS.md`):** este Next.js tiene cambios que rompen compatibilidad con lo que se conoce de versiones anteriores. Antes de escribir código de Next, lee la guía correspondiente en `apps/web/node_modules/next/dist/docs/` y respeta los avisos de deprecación. Lo mismo vale para Turborepo: consulta `docs/` dentro del paquete `turbo` instalado. Hay que `pnpm install` antes de que existan esos docs.

### Comandos

```bash
pnpm install
pnpm dev          # turbo dev  → next dev
pnpm build        # turbo build
pnpm lint
pnpm typecheck
pnpm format       # prettier (con plugin tailwind)
# añadir componente shadcn:
pnpm dlx shadcn@latest add <componente> -c apps/web
```

## 4. Estructura del repo

```
arecio_rodriguez/
├─ AGENTS.md, CLAUDE.md        # reglas para agentes (CLAUDE.md importa AGENTS.md)
├─ knowledge.md                # este archivo
├─ media/                      # material de origen (NO se sirve): brand/, flyers_y_content/, before_after/, portadas_selfies_perfiles/
├─ apps/web/
│  ├─ app/
│  │  ├─ layout.tsx            # fuentes, ThemeProvider, lang="es"
│  │  ├─ page.tsx              # HOME completa (225 líneas, "use client")
│  │  └─ sobre-mi/page.tsx     # página "Sobre mí"
│  ├─ components/ (theme-provider.tsx, ui/button.tsx, ui/card.tsx)
│  └─ public/media/            # imágenes que sí se sirven (/media/...)
└─ packages/ (ui, eslint-config, typescript-config)
```

`hooks/` y `lib/` de `apps/web` están vacíos (solo `.gitkeep`).

## 5. Identidad visual

Tokens definidos en `packages/ui/src/styles/globals.css` y usados como clases Tailwind (`bg-brand-navy`, `text-brand-steel`…):

| Token | Valor en código | Uso |
|---|---|---|
| `brand-white` | `#fafafa` | fondo general |
| `brand-navy` | `#1b263b` | texto, botones, header/footer |
| `brand-steel` | `#71797e` | texto secundario, bordes |
| `brand-champagne` | `#f7e7ce` | acento y CTA destacado |

- **Proporción recomendada** (de `media/brand/explicacion_paleta.jpeg`): ~60% blanco, 25% navy, 10% gris acero, 5% champagne/dorado.
- **Paleta de la guía de marca** (`media/brand/indentidad_visual.png`): blanco clínico `#F7F8F8`, navy `#102A3A`, gris acero `#69757D`, dorado `#B79A62`.
  - ⚠️ Los valores del código **no coinciden exactamente** con la guía: navy `#1b263b` vs `#102A3A`, y champagne `#f7e7ce` vs dorado `#B79A62`. Antes de cambiar nada, hay que decidir si se alinean.
- **Atributos de marca:** profesionalismo, confianza, tecnología, resultados, aspecto clínico, masculino, elegante.
- **Estilo UI actual:** esquinas rectas (`rounded-none`), tipografía con mucho tracking en mayúsculas pequeñas para etiquetas, títulos `font-medium` con tracking negativo, mucho espacio en blanco y secciones alternas blanco/navy/champagne.
- **Los flyers de redes** usan otra línea: fondo marrón, dorado y tipografías con serif y script. El logo es un monograma "AR" dorado.

## 6. Contenido y funcionalidad actual

### Home (`/`, `apps/web/app/page.tsx`)

Todo está en un único componente cliente, con estado local para menú, modales y filtros. Secciones por ancla:

1. **Header sticky:** barra navy con especialidades, nav y botón "Reservar cita". En móvil hay un menú lateral.
2. `#inicio`: hero con título *"Ciencia, experiencia y resultados para tu piel."*, CTA e imagen `/media/acercademi.jpeg`.
3. `#sobre-mi`: resumen con enlace a `/sobre-mi`.
4. `#tratamientos-faciales` y `#tratamientos-corporales`: tarjetas de tratamientos por categoría.
5. `#tratamientos-necesidad`: filtro por necesidad (acné, manchas, arrugas, flacidez, poros, deshidratación, piel opaca, cicatrices).
6. `#resultados`: dos collages antes/después de limpiezas faciales (con autorización).
7. `#reservar`: CTA con enlace al Google Form y a WhatsApp.
8. `#contacto`: datos de contacto y formulario `mailto:`.
9. Footer.

**Modales y guías:**
- Ficha de tratamiento (`selectedTreatment`).
- **Wizard "Faciales"** (menú *Faciales*): recorre los faciales que tienen `order`.
- **Wizard "Tratamientos faciales"**: recorre `facialTreatmentWizardItems`, con 10 protocolos por problema o tecnología.

### Datos

- `treatments` (18): 10 faciales y 8 corporales. Tipo `Treatment` con `id`, `order?`, `name`, `category`, `description`, `benefits[]`, `protocol[]`, `duration`, `price`, `needs[]`, `resultImage?`.
  - Faciales: Regular, Profundo, Dermaplaning, Carboxiterapia, Detox, Hidrofacial, Peeling enzimático, Dermapen, PRP, Exosomas.
  - Corporales: Radiofrecuencia, PRP corporal, Cicatrices, Peeling químico, Microneedling, Verrugas y lunares, Láser Picosecond, Carbón láser, Biopen.
- Casi todo tiene `duration: "Consultar"` y `price: "Consultar"`. Solo hay duración definida en Regular (60 min), Profundo (1 h 30) y Dermaplaning (60 min). **No hay precios publicados.**
- `professionalNote`: texto legal/profesional que aparece en las fichas ("Todo protocolo comienza con una evaluación previa…").

### `/sobre-mi`

Bio, cita ("La estética no es solo vanidad; es salud, bienestar y confianza en tu propia piel.") y CTA a `/#contacto`.

### Carrito / tienda (desactivado)

El tipo `Product`/`CartItem` y la lógica están **comentados** en `page.tsx`, para activarlos cuando se habilite la tienda. Ahí se enviaría el pedido por WhatsApp. No hay productos definidos todavía.

## 7. Assets

- **Servidos** (`apps/web/public/media/`): `acercademi.jpeg` (usada en hero y sobre-mí), `before_after/` (2 collages), `portadas_selfies_perfiles/`, `arecio-trabajando.jpeg`, `brand-mark.jpg` y varias imágenes de stock (`hero-blue`, `portrait-blue-*`, `laser-treatment`, `facial-treatment`, `clinical-treatment`, `services-menu`, `skin-specialist`, `portrait`). Muchas **no están usadas** en el código actual.
- **Origen** (`media/`, raíz): brand, flyers y contenido (`servicios.jpeg` con la lista oficial de servicios, `flyer_foto.jpeg`, `PHOTO-2026-09-30-*`), selfies y portadas, antes/después.
- Las imágenes de antes/después son resultados reales **autorizados**. Mantén el texto "resultado autorizado" y no añadas fotos de clientes sin autorización.

## 8. Convenciones del código existente

- Páginas con `"use client"`, estilos Tailwind en línea y componentes pequeños al final del archivo (`TreatmentCard`, `ResultImage`).
- Navegación a anclas con `window.location.hash` y `<a href>` (no `next/link`).
- Imágenes con `next/image`; rutas que empiezan en `/media/...`.
- Prettier con plugin de Tailwind (`.prettierrc`). Linting con `@workspace/eslint-config`.
- Historial de commits: mensajes cortos tipo "landing", "refactor", "oculto carrito…".

## 9. Deuda técnica y mejoras pendientes

- `page.tsx` es un monolito de 225 líneas con líneas muy largas. Conviene dividirlo en componentes (header, wizards, secciones, tarjetas) y mover los datos a un archivo aparte (p. ej. `lib/treatments.ts`).
- Los dos wizards están duplicados casi al 100%. Se pueden unificar en un componente.
- El nav tiene dos entradas casi iguales ("Faciales" y "Tratamientos faciales") y ambas apuntan a `#tratamientos-faciales`.
- El formulario de contacto usa `mailto:` con `method="post"`, que es poco fiable. Mejor una Server Action, un servicio de email o redirigir a WhatsApp.
- Faltan metadata y SEO (`title`, `description`, Open Graph) en `layout.tsx`, y no hay sitemap ni datos estructurados `LocalBusiness`.
- Faltan precios y duraciones reales de casi todos los tratamientos.
- Hay que decidir si los tokens se alinean con la paleta de la guía de marca (ver §5).
- `README.md` sigue siendo el de la plantilla shadcn.
- El tema oscuro de `next-themes` está activo, pero la marca no define un modo oscuro.
- Hay muchas imágenes de stock sin uso en `public/media/`.

## 10. Cómo trabajar con este proyecto en un chat nuevo

1. Lee este `knowledge.md` y no explores todo el repo.
2. Para cambios de contenido (tratamientos, textos, contacto), edita las constantes al inicio de `apps/web/app/page.tsx`.
3. Para cambios de marca, edita los tokens en `packages/ui/src/styles/globals.css`.
4. Antes de usar APIs de Next, lee `node_modules/next/dist/docs/`.
5. Verifica con `pnpm typecheck` y `pnpm lint`, y revisa el resultado en móvil y escritorio.
6. Si cambias algo estructural (rutas, tokens, datos, convenciones), **actualiza este archivo** en el mismo commit.

## 11. Registro de decisiones

| Fecha | Decisión |
|---|---|
| 2026-10-08 | Se crea `knowledge.md` para centralizar el contexto. |
| (previo) | Carrito/tienda oculta hasta tener productos. |
| (previo) | Precios en "Consultar" mientras no se definan. |
