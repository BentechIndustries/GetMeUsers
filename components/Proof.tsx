import { Fragment } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { BeforeAfterVisual } from "@/components/BeforeAfterVisual";
import { PROOF } from "@/lib/constants";

const flow = PROOF.flows[0];

export function Proof() {
  return (
    <Section id="proof">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center md:gap-10">
        <div className="md:col-span-7">
          <SectionHeader
            eyebrow="04 / A worked example"
            title={PROOF.title}
            subtitle={PROOF.subtitle}
          />

          <div className="mt-8 flex items-center gap-3">
            <span className="bg-ink px-3 py-1 text-sm font-medium text-paper">
              {flow.product}
            </span>
            <span className="eyebrow text-ink-soft">{flow.audience}</span>
          </div>

          <p className="mt-6 max-w-xl text-xl leading-relaxed text-ink">
            {flow.insight}
          </p>
        </div>

        <div className="md:col-span-5">
          <BeforeAfterVisual />
        </div>
      </div>

      <div className="mt-14 flex flex-wrap items-stretch gap-x-1 gap-y-4">
        {flow.stages.map((stage, index) => (
          <Fragment key={stage.label}>
            <div className="flex w-[7.5rem] flex-col border border-ink/15 bg-paper px-4 py-5 sm:w-[8.5rem]">
              <span className="font-display text-2xl leading-none text-ink-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-sm font-medium leading-snug text-ink">
                {stage.label}
              </h3>
            </div>
            <Connector />
          </Fragment>
        ))}

        <div className="flex w-[7.5rem] flex-col border border-accent/40 bg-accent/[0.06] px-4 py-5 sm:w-[8.5rem]">
          <span className="font-display text-2xl leading-none text-accent">
            &#10003;
          </span>
          <h3 className="mt-3 text-sm font-medium leading-snug text-accent-ink">
            {flow.outcome}
          </h3>
        </div>
      </div>

      <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft">
        {flow.loop}
      </p>
    </Section>
  );
}

function Connector() {
  return (
    <div
      aria-hidden
      className="flex shrink-0 items-center justify-center px-0.5 text-ink-soft"
    >
      <span className="text-base">&#8594;</span>
    </div>
  );
}
