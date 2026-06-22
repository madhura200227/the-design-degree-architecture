import { Display, H2, Lead, Body, Caption } from "@/components/ui/Typography";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Services | The Design Degree Architecture",
  description: "Architectural design, interior architecture, and master planning services.",
};

const services = [
  {
    title: "Architectural Design",
    description: "From conceptual sketches to detailed construction documentation, we deliver bespoke architectural solutions tailored to the unique site and client vision. We prioritize environmental responsiveness, material honesty, and structural integrity.",
  },
  {
    title: "Interior Architecture",
    description: "Seamless integration of exterior structure and interior flow. Our interior architecture services focus on material palettes, lighting design, and spatial experience, creating environments that are both functional and deeply atmospheric.",
  },
  {
    title: "Master Planning",
    description: "Comprehensive urban and site strategies that optimize spatial relationships, sustainability, and community impact for large-scale developments and institutional campuses.",
  },
  {
    title: "Consultation & Visualization",
    description: "Feasibility studies, design consultation, and high-fidelity 3D visualization services to assist developers and clients in visualizing and communicating the potential of their spaces before ground is broken.",
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-warm-white pb-24 min-h-screen">
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 container-arch">
        <FadeIn>
          <Display className="mb-8">Our Expertise</Display>
          <Lead className="max-w-2xl">
            A comprehensive suite of design services tailored to deliver uncompromising architectural excellence from inception to completion.
          </Lead>
        </FadeIn>
      </section>

      <section className="container-arch">
        <FadeInStagger className="space-y-16 lg:space-y-24 max-w-4xl">
          {services.map((service, idx) => (
            <FadeInItem key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-concrete-grey/20 pt-8">
              <div className="md:col-span-4">
                <Caption>0{idx + 1} / Service</Caption>
              </div>
              <div className="md:col-span-8">
                <H2 className="mb-6">{service.title}</H2>
                <Body className="text-charcoal-black/80">{service.description}</Body>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>
    </div>
  );
}
