import { Section, SectionHeader } from "@/components/ui/Section";
import { PROBLEM } from "@/lib/constants";

export function Problem() {
  return (
    <Section className="bg-slate-50" py="pt-20 pb-10 md:pt-24 md:pb-12">
      <SectionHeader
        title={
          <>
            {PROBLEM.titleLine1}
            <br />
            {PROBLEM.titleLine2}
          </>
        }
      />

      <div className="max-w-3xl space-y-4 text-xl leading-snug text-slate-700 md:text-2xl md:leading-snug">
        {PROBLEM.narrative.map((line) => (
          <p
            key={line}
            className={line === PROBLEM.emphasis ? "font-bold text-slate-900" : ""}
          >
            {line}
          </p>
        ))}
      </div>
    </Section>
  );
}
