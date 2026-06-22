import Link from "next/link";
import { H3, Body, Caption } from "@/components/ui/Typography";

export function Footer() {
  return (
    <footer className="bg-charcoal-black text-warm-white pt-24 pb-12">
      <div className="container-arch grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-concrete-grey/20 pb-16">
        <div className="md:col-span-2 pr-12">
          <H3 className="mb-6">The Design Degree.</H3>
          <Body className="text-warm-white/70 max-w-sm">
            Designing spaces that endure. A premium architecture and design consultancy based in Pune, specializing in residential, luxury, and commercial spaces.
          </Body>
        </div>
        <div>
          <Caption className="mb-6 block text-warm-white/50">Studio</Caption>
          <ul className="space-y-4">
            <li><Link href="/projects" className="text-warm-white/80 hover:text-warm-white transition-colors">Selected Work</Link></li>
            <li><Link href="/studio" className="text-warm-white/80 hover:text-warm-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-warm-white/80 hover:text-warm-white transition-colors">Expertise</Link></li>
            <li><Link href="/insights" className="text-warm-white/80 hover:text-warm-white transition-colors">Journal</Link></li>
          </ul>
        </div>
        <div>
          <Caption className="mb-6 block text-warm-white/50">Contact</Caption>
          <ul className="space-y-4">
            <li className="text-warm-white/80">Pune, Maharashtra</li>
            <li><a href="mailto:hello@thedesigndegree.com" className="text-warm-white/80 hover:text-warm-white transition-colors">hello@thedesigndegree.com</a></li>
            <li><Link href="/contact" className="text-warm-white/80 hover:text-warm-white transition-colors">Book a Consultation</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-arch pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <Caption className="text-warm-white/40 normal-case tracking-normal">© {new Date().getFullYear()} The Design Degree Architecture. All rights reserved.</Caption>
        <div className="flex gap-6">
          <Link href="#" className="text-warm-white/40 hover:text-warm-white transition-colors"><Caption>Instagram</Caption></Link>
          <Link href="#" className="text-warm-white/40 hover:text-warm-white transition-colors"><Caption>LinkedIn</Caption></Link>
        </div>
      </div>
    </footer>
  );
}
