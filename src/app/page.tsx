import Image from "next/image";
import Link from "next/link";
import { Display, H2, H3, Lead, Body, Caption } from "@/components/ui/Typography";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Minimalist modern luxury architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal-black/30 mix-blend-multiply" />
        </div>
        
        <div className="container-arch relative z-10 text-center text-warm-white">
          <FadeIn delay={0.2}>
            <Display className="mb-6">Designing Spaces<br />That Endure.</Display>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Lead className="text-warm-white/90 max-w-2xl mx-auto mb-10">
              A premium architecture and design consultancy in Pune, specializing in residential, commercial, and institutional projects with an unwavering commitment to craft.
            </Lead>
          </FadeIn>
          <FadeIn delay={0.6}>
            <Link 
              href="/projects" 
              className="inline-block border border-warm-white/50 px-8 py-4 uppercase tracking-widest text-sm hover:bg-warm-white hover:text-charcoal-black transition-colors"
            >
              View Selected Work
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-24 bg-warm-white">
        <div className="container-arch">
          <FadeIn className="flex justify-between items-end mb-16 border-b border-concrete-grey/20 pb-8">
            <div>
              <Caption className="mb-4 block">01 / Portfolio</Caption>
              <H2>Selected Projects</H2>
            </div>
            <Link href="/projects" className="hidden md:inline-block font-sans text-sm uppercase tracking-widest border-b border-charcoal-black pb-1 hover:text-concrete-grey hover:border-concrete-grey transition-colors">
              All Projects
            </Link>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            <FadeInItem className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-stone-beige/30">
                <Image
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                  alt="The Courtyard House"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-baseline">
                <H3>The Courtyard House</H3>
                <Caption>Residential</Caption>
              </div>
            </FadeInItem>

            <FadeInItem className="group cursor-pointer md:mt-24">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-stone-beige/30">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                  alt="Apex Commercial Tower"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-baseline">
                <H3>Apex Tower</H3>
                <Caption>Commercial</Caption>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24 bg-stone-beige text-charcoal-black">
        <div className="container-arch">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <FadeIn>
                <Caption className="mb-4 block">02 / Philosophy</Caption>
                <H2>Contextual Minimalism</H2>
              </FadeIn>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <FadeIn delay={0.2}>
                <Lead className="mb-8 text-charcoal-black/80 font-normal">
                  We believe architecture should respond to its environment. Our approach strips away the unnecessary, focusing on raw materials, natural light, and structural integrity to create timeless environments.
                </Lead>
                <Link href="/studio" className="font-sans text-sm uppercase tracking-widest border-b border-charcoal-black pb-1 hover:text-concrete-grey hover:border-concrete-grey transition-colors">
                  Discover Our Studio
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-charcoal-black text-warm-white">
        <div className="container-arch">
          <FadeIn className="mb-16 border-b border-warm-white/20 pb-8">
            <Caption className="mb-4 block text-warm-white/50">03 / Expertise</Caption>
            <H2>Our Services</H2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-warm-white/20 pb-24">
            <FadeInItem>
              <H3 className="mb-6">Architectural Design</H3>
              <Body className="text-warm-white/70">From conceptual sketches to detailed construction documentation, we deliver bespoke architectural solutions tailored to the unique site and client vision.</Body>
            </FadeInItem>
            <FadeInItem>
              <H3 className="mb-6">Interior Architecture</H3>
              <Body className="text-warm-white/70">Seamless integration of exterior structure and interior flow, focusing on material palettes, lighting design, and spatial experience.</Body>
            </FadeInItem>
            <FadeInItem>
              <H3 className="mb-6">Master Planning</H3>
              <Body className="text-warm-white/70">Comprehensive urban and site strategies that optimize spatial relationships, sustainability, and community impact for large-scale developments.</Body>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>
    </>
  );
}
