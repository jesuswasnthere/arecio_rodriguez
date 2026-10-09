import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Arecio Rodríguez · Advanced Skin Aesthetics"
      width={572}
      height={255}
      priority
      className={`h-12 w-auto sm:h-14 ${className}`}
    />
  )
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`block h-px w-14 bg-gold ${className}`} />
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-medium tracking-[0.3em] uppercase ${
        light ? "text-gold-soft" : "text-steel"
      }`}
    >
      <span aria-hidden className="h-px w-8 bg-gold" />
      {children}
    </p>
  )
}
