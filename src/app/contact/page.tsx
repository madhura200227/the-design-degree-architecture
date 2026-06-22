import { Display, H3, Lead, Body, Caption } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Contact | The Design Degree Architecture",
  description: "Get in touch for consultations and project inquiries.",
};

export default function ContactPage() {
  return (
    <div className="bg-stone-beige pb-24 min-h-screen">
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 container-arch">
        <FadeIn>
          <Display className="mb-8">Start a<br />Conversation.</Display>
          <Lead className="max-w-2xl text-charcoal-black/80">
            We are currently accepting new commissions for 2027. Contact us to discuss your project requirements or to schedule a consultation at our Pune studio.
          </Lead>
        </FadeIn>
      </section>

      <section className="container-arch">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn delay={0.2} className="bg-warm-white p-8 md:p-12 shadow-sm">
            <H3 className="mb-8">Inquiries</H3>
            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-concrete-grey mb-2">Full Name</label>
                <input type="text" id="name" className="w-full bg-transparent border-b border-concrete-grey/40 py-2 focus:outline-none focus:border-charcoal-black transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-concrete-grey mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-transparent border-b border-concrete-grey/40 py-2 focus:outline-none focus:border-charcoal-black transition-colors" />
              </div>
              <div>
                <label htmlFor="project" className="block text-xs uppercase tracking-widest text-concrete-grey mb-2">Project Details</label>
                <textarea id="project" rows={4} className="w-full bg-transparent border-b border-concrete-grey/40 py-2 focus:outline-none focus:border-charcoal-black transition-colors"></textarea>
              </div>
              <button type="button" className="bg-charcoal-black text-warm-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-forest-green transition-colors w-full md:w-auto">
                Submit Inquiry
              </button>
            </form>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col justify-between">
            <div>
              <div className="mb-12">
                <Caption className="mb-4 block text-concrete-grey">Studio</Caption>
                <Body className="text-charcoal-black">
                  The Design Degree Architecture<br />
                  101, Creative Enclave<br />
                  Kalyani Nagar, Pune<br />
                  Maharashtra 411014
                </Body>
              </div>
              <div className="mb-12">
                <Caption className="mb-4 block text-concrete-grey">Contact</Caption>
                <Body className="text-charcoal-black hover:text-forest-green transition-colors block mb-2">
                  <a href="mailto:hello@thedesigndegree.com">hello@thedesigndegree.com</a>
                </Body>
                <Body className="text-charcoal-black hover:text-forest-green transition-colors block">
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </Body>
              </div>
            </div>
            
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#25D366] text-white px-6 py-4 w-fit hover:bg-[#128C7E] transition-colors"
            >
              <span className="uppercase tracking-widest text-sm font-semibold">Message on WhatsApp</span>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
