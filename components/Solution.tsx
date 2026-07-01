import { Section, SectionHeader } from "@/components/ui/Section";
import { SolutionVisual } from "@/components/SolutionVisual";
import { SOLUTION } from "@/lib/constants";

export function Solution() {
  return (
    <Section>
      <SectionHeader title={SOLUTION.title} className="mb-4 md:mb-5" />

      <div className="mb-10 grid items-center gap-8 md:mb-12 md:grid-cols-2 md:gap-12">
        <p className="text-xl font-medium leading-snug text-slate-900 md:text-2xl">
          {SOLUTION.intro}
        </p>

        <div className="flex justify-center md:justify-end">
          <SolutionVisual />
        </div>
      </div>

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
