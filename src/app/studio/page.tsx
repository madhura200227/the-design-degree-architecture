import Image from "next/image";
import { Display, H2, H3, Lead, Body, Caption } from "@/components/ui/Typography";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Studio | The Design Degree Architecture",
  description: "About the founders, team, and philosophy of The Design Degree.",
};

export default function StudioPage() {
  return (
    <div className="bg-warm-white pb-24">
      {/* Studio Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 container-arch">
        <FadeIn>
          <Display className="mb-8">Architecture as<br />Lived Experience.</Display>
          <Lead className="max-w-3xl">
            The Design Degree is a multidisciplinary architecture and design consultancy based in Pune. We are driven by the belief that exceptional design can profoundly impact the way we live, work, and interact with our environment.
          </Lead>
        </FadeIn>
      </section>

      {/* Hero Image */}
      <section className="container-arch mb-24">
        <FadeIn>
          <div className="relative aspect-video w-full overflow-hidden bg-stone-beige/30">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="The Design Degree Studio Interior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>
      </section>

      {/* Values */}
      <section className="container-arch mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <FadeIn>
              <Caption className="mb-4 block">Our Values</Caption>
              <H2>Principles of Practice</H2>
            </FadeIn>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <FadeInStagger className="space-y-12">
              <FadeInItem className="border-t border-concrete-grey/20 pt-8">
                <H3 className="mb-4">Contextual Relevance</H3>
                <Body className="max-w-2xl text-charcoal-black/80">Every project begins with a deep study of its context—climate, culture, and topography. Our buildings belong to their place.</Body>
              </FadeInItem>
              <FadeInItem className="border-t border-concrete-grey/20 pt-8">
                <H3 className="mb-4">Material Honesty</H3>
                <Body className="max-w-2xl text-charcoal-black/80">We prefer materials that age gracefully. Concrete, timber, natural stone, and steel are celebrated for their inherent qualities rather than concealed.</Body>
              </FadeInItem>
              <FadeInItem className="border-t border-concrete-grey/20 pt-8">
                <H3 className="mb-4">Rigorous Craft</H3>
                <Body className="max-w-2xl text-charcoal-black/80">From master planning to the smallest interior detail, our execution relies on rigorous technical detailing and collaboration with master craftsmen.</Body>
              </FadeInItem>
            </FadeInStagger>
          </div>
        </div>
      </section>
    </div>
  );
}
