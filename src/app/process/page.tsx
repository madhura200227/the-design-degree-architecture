import { Display, H3, Lead, Body, Caption } from "@/components/ui/Typography";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Process | The Design Degree Architecture",
  description: "Our architectural methodology and project execution process.",
};

const processSteps = [
  { step: "01", name: "Discover", desc: "Understanding the client's vision, site context, and functional requirements." },
  { step: "02", name: "Research", desc: "Deep dive into local climate, zoning laws, material availability, and cultural context." },
  { step: "03", name: "Concept", desc: "Developing initial spatial strategies and massing models. Establishing the design language." },
  { step: "04", name: "Development", desc: "Refining the design, selecting materials, and coordinating structural and MEP engineering." },
  { step: "05", name: "Documentation", desc: "Producing precise and comprehensive construction drawings and specifications." },
  { step: "06", name: "Execution", desc: "Active site supervision and collaboration with contractors to ensure uncompromising quality." },
  { step: "07", name: "Completion", desc: "Final handover, ensuring every detail aligns perfectly with the initial vision." },
];

export default function ProcessPage() {
  return (
    <div className="bg-charcoal-black text-warm-white pb-24 min-h-screen">
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 container-arch">
        <FadeIn>
          <Display className="mb-8">Methodology</Display>
          <Lead className="max-w-2xl text-warm-white/80">
            A systematic, collaborative approach to translating vision into built reality.
          </Lead>
        </FadeIn>
      </section>

      <section className="container-arch">
        <FadeInStagger className="max-w-3xl">
          {processSteps.map((p) => (
            <FadeInItem key={p.step} className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-warm-white/20 pt-8 mb-12">
              <div className="md:col-span-3">
                <Caption className="text-warm-white/50">{p.step} / Process</Caption>
              </div>
              <div className="md:col-span-9">
                <H3 className="mb-4">{p.name}</H3>
                <Body className="text-warm-white/70">{p.desc}</Body>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>
    </div>
  );
}
