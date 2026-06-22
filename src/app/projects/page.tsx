import Image from "next/image";
import Link from "next/link";
import { Display, H3, Lead, Caption } from "@/components/ui/Typography";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Projects | The Design Degree Architecture",
  description: "Selected architecture and interior design projects by The Design Degree.",
};

const projects = [
  {
    id: 1,
    title: "The Courtyard House",
    category: "Residential",
    location: "Koregaon Park, Pune",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Apex Tower",
    category: "Commercial",
    location: "Baner, Pune",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Serenity Villa",
    category: "Luxury Residential",
    location: "Lonavala, Maharashtra",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Lumina Gallery",
    category: "Institutional",
    location: "Kalyani Nagar, Pune",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
  }
];

export default function ProjectsPage() {
  return (
    <div className="bg-warm-white pb-24 min-h-screen">
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 container-arch">
        <FadeIn>
          <Display className="mb-8">Selected Work</Display>
          <Lead className="max-w-2xl">
            A curated selection of our most significant residential, commercial, and institutional projects across India.
          </Lead>
        </FadeIn>
      </section>

      <section className="container-arch">
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-24">
          {projects.map((project, idx) => (
            <FadeInItem key={project.id} className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}>
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-stone-beige/30">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-baseline border-t border-concrete-grey/20 pt-4">
                <div>
                  <H3>{project.title}</H3>
                  <Caption className="text-charcoal-black/60 mt-1 block">{project.location}</Caption>
                </div>
                <Caption>{project.category}</Caption>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>
    </div>
  );
}
