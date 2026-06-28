import { Section, SectionHeader } from "@/components/ui/Section";
import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeader title={STEPS.title} />

      <div className="grid gap-8 md:grid-cols-3">
        {STEPS.items.map((item) => (
          <div key={item.step} className="relative">
            <span className="text-5xl font-bold text-indigo-100">
              {item.step}
            </span>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
