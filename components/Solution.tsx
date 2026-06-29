import { Section, SectionHeader } from "@/components/ui/Section";
import { SOLUTION } from "@/lib/constants";

export function Solution() {
  return (
    <Section>
      <SectionHeader title={SOLUTION.title} className="mb-4 md:mb-5" />

      <p className="mb-10 text-xl font-medium leading-snug text-slate-900 md:mb-12 md:text-2xl">
        {SOLUTION.intro}
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        {SOLUTION.items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 p-6"
          >
            <h3 className="font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-xl font-medium leading-snug text-slate-900 md:text-2xl">
        {SOLUTION.closing}
      </p>
    </Section>
  );
}
