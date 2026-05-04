import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <span className="text-[11px] tracking-[0.4em] text-muted-foreground uppercase mb-6 block">
        Pagina nu a fost găsită
      </span>
      <h1 className="font-serif text-6xl md:text-8xl text-foreground mb-4">404</h1>
      <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-sm">
        Se pare că pagina pe care o cauți nu există sau a fost mutată.
      </p>
      <Link
        href="/"
        className="group relative px-10 py-4 bg-foreground text-background text-[10px] tracking-[0.25em] uppercase overflow-hidden transition-all duration-500"
      >
        <span className="relative z-10 transition-colors duration-500 group-hover:text-foreground">
          Înapoi acasă
        </span>
        <div className="absolute inset-0 bg-background transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
      </Link>
    </div>
  )
}
