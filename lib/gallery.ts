import { readdirSync } from "node:fs"
import path from "node:path"

/**
 * Fotos de antes y después: basta con soltar archivos en
 * `public/images/antes-despues/` y hacer commit. Se ordenan por nombre
 * (usa prefijos 01-, 02-…) y el nombre del archivo es la clave del pie de
 * foto en `lib/i18n.ts` → `gallery.photos`.
 */
const dir = path.join(process.cwd(), "public/images/antes-despues")
const extensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"])

export type GalleryPhoto = {
  src: string
  /** Nombre sin extensión, p. ej. "01-facial-regular". */
  key: string
}

export function getGalleryPhotos(): GalleryPhoto[] {
  let files: string[]
  try {
    files = readdirSync(dir)
  } catch {
    return []
  }

  return files
    .filter((file) => extensions.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
    .map((file) => ({
      src: `/images/antes-despues/${encodeURIComponent(file)}`,
      key: path.parse(file).name,
    }))
}
