import { Display, H3, Lead, Caption } from "@/components/ui/Typography";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Insights | The Design Degree Architecture",
  description: "Architecture journal, design trends, and material studies.",
};

const articles = [
  { title: "The Return of Brutalism in Residential Architecture", category: "Design Trends", date: "Oct 2026" },
  { title: "Sourcing Sustainable Timber in Maharashtra", category: "Material Studies", date: "Sep 2026" },
  { title: "Case Study: Passive Cooling in The Courtyard House", category: "Sustainability", date: "Aug 2026" },
];

export default function InsightsPage() {
  return (
    <div className="bg-warm-white pb-24 min-h-screen">
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 container-arch">
        <FadeIn>
          <Display className="mb-8">Journal</Display>
          <Lead className="max-w-2xl">
            Our thoughts on architectural discourse, material exploration, and the built environment.
          </Lead>
        </FadeIn>
      </section>

      <section className="container-arch">
        <FadeInStagger className="max-w-4xl border-t border-concrete-grey/20">
          {articles.map((article, idx) => (
            <FadeInItem key={idx} className="group py-10 border-b border-concrete-grey/20 cursor-pointer hover:bg-stone-beige/10 transition-colors px-4 -mx-4 flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <Caption className="mb-2 block text-concrete-grey">{article.category}</Caption>
                <H3 className="group-hover:text-forest-green transition-colors">{article.title}</H3>
              </div>
              <Caption>{article.date}</Caption>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>
    </div>
  );
}
