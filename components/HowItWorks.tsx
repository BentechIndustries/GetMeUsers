import { Section, SectionHeader } from "@/components/ui/Section";
import { HowItWorksVisual } from "@/components/HowItWorksVisual";
import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-slate-50" py="pt-10 pb-20 md:pt-12 md:pb-24">
      <SectionHeader title={STEPS.title} />

      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.items.map((item) => (
            <div key={item.step}>
              <span className="text-4xl font-bold text-indigo-200">{item.step}</span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center lg:justify-end">
          <HowItWorksVisual />
        </div>
      </div>
    </Section>
  );
}
