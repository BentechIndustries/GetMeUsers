import { Section } from "@/components/ui/Section";
import { ProblemVisual } from "@/components/ProblemVisual";
import { PROBLEM } from "@/lib/constants";

export function Problem() {
  return (
    <Section className="bg-paper-alt">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <div className="mb-5 flex items-center gap-3 text-ink-soft">
            <span className="h-2 w-2 rounded-[1px] bg-accent" />
            <span className="eyebrow">01 / The problem</span>
          </div>

          <h2 className="font-display text-4xl font-normal leading-[1.02] text-ink md:text-6xl">
            {PROBLEM.titleLine1}
            <br />
            <span className="italic">{PROBLEM.titleLine2}</span>
          </h2>

          <div className="mt-10 max-w-md space-y-4 text-lg leading-relaxed text-ink-soft md:text-xl">
            {PROBLEM.narrative.map((line) =>
              line === PROBLEM.emphasis ? (
                <p
                  key={line}
                  className="font-display text-2xl italic leading-snug text-ink md:text-3xl"
                >
                  {line}
                </p>
              ) : (
                <p key={line}>{line}</p>
              )
            )}
          </div>
        </div>

        <div className="flex items-end justify-center md:col-span-5 md:justify-end">
          <ProblemVisual />
        </div>
      </div>
    </Section>
  );
}
