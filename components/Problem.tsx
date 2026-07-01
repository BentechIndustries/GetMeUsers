import { Section, SectionHeader } from "@/components/ui/Section";
import { ProblemVisual } from "@/components/ProblemVisual";
import { PROBLEM } from "@/lib/constants";

export function Problem() {
  return (
    <Section className="bg-slate-50" py="pt-20 pb-10 md:pt-24 md:pb-12">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div>
          <SectionHeader
            className="mb-8 md:mb-10"
            title={
              <>
                {PROBLEM.titleLine1}
                <br />
                {PROBLEM.titleLine2}
              </>
            }
          />

          <div className="space-y-4 text-xl leading-snug text-slate-700 md:text-2xl md:leading-snug">
            {PROBLEM.narrative.map((line) => (
              <p
                key={line}
                className={
                  line === PROBLEM.emphasis ? "font-bold text-slate-900" : ""
                }
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <ProblemVisual />
        </div>
      </div>
    </Section>
  );
}
