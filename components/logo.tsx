export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <span className="flex size-9 shrink-0 items-center justify-center border border-gold/70 font-serif text-base text-gold sm:size-10 sm:text-lg">
        AR
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-sm tracking-[0.1em] whitespace-nowrap uppercase sm:text-xl sm:tracking-[0.14em]">
          Arecio Rodríguez
        </span>
        <span className="mt-1 hidden text-[9px] tracking-[0.32em] uppercase opacity-70 sm:block">
          Advanced Skin Aesthetics
        </span>
      </span>
    </span>
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
