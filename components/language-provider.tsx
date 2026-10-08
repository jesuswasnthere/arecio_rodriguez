"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react"

import { dictionaries, type Dictionary, type Lang } from "@/lib/i18n"

const STORAGE_KEY = "lang"
const EVENT = "lang-change"

// Respaldo en memoria por si localStorage no está disponible (modo privado, etc.).
let memoryLang: Lang | null = null

function readLang(): Lang {
  if (memoryLang) return memoryLang
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "en" || stored === "es") return stored
  } catch {}
  return "en"
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback)
  window.addEventListener("storage", callback)
  return () => {
    window.removeEventListener(EVENT, callback)
    window.removeEventListener("storage", callback)
  }
}

type LanguageContextValue = {
  lang: Lang
  t: Dictionary
  setLang: (lang: Lang) => void
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => "en" as Lang)

  const setLang = useCallback((next: Lang) => {
    memoryLang = next
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {}
    window.dispatchEvent(new Event(EVENT))
  }, [])

  const toggle = useCallback(
    () => setLang(lang === "en" ? "es" : "en"),
    [lang, setLang]
  )

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = dictionaries[lang].meta.title
  }, [lang])

  return (
    <LanguageContext.Provider
      value={{ lang, t: dictionaries[lang], setLang, toggle }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider")
  return ctx
}
