import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-warm-white/95 backdrop-blur-sm border-b border-concrete-grey/20">
      <div className="container-arch h-24 flex items-center justify-between">
        <Link href="/" className="font-serif text-3xl tracking-tight text-charcoal-black">
          The Design Degree.
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/studio" className="font-sans text-xs uppercase tracking-widest text-charcoal-black/70 hover:text-charcoal-black transition-colors">Studio</Link>
          <Link href="/projects" className="font-sans text-xs uppercase tracking-widest text-charcoal-black/70 hover:text-charcoal-black transition-colors">Projects</Link>
          <Link href="/services" className="font-sans text-xs uppercase tracking-widest text-charcoal-black/70 hover:text-charcoal-black transition-colors">Services</Link>
          <Link href="/process" className="font-sans text-xs uppercase tracking-widest text-charcoal-black/70 hover:text-charcoal-black transition-colors">Process</Link>
          <Link href="/insights" className="font-sans text-xs uppercase tracking-widest text-charcoal-black/70 hover:text-charcoal-black transition-colors">Insights</Link>
          <Link href="/contact" className="font-sans text-xs uppercase tracking-widest text-charcoal-black hover:text-forest-green transition-colors font-semibold">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
