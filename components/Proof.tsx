import { Fragment } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PROOF } from "@/lib/constants";

const flow = PROOF.flows[0];

const stepCardHover =
  "relative transition-[transform,box-shadow] duration-200 ease-out hover:z-10 hover:scale-[1.04] hover:shadow-md";

export function Proof() {
  return (
    <Section id="proof" className="bg-slate-50">
      <SectionHeader title={PROOF.title} subtitle={PROOF.subtitle} />

      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-indigo-600 px-3 py-1 text-sm font-semibold text-white">
            {flow.product}
          </span>
          <span className="text-sm font-medium text-slate-500">
            {flow.audience}
          </span>
        </div>

        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">
          {flow.insight}
        </p>

        <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {flow.stages.map((stage, index) => {
            const style = getStageStyle(index, flow.stages.length);

            return (
              <Fragment key={stage.label}>
                <div
                  className={`flex-1 rounded-2xl border p-5 ${stepCardHover} ${style.card}`}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ring-1 ${style.badge}`}
                  >
                    {index + 1}
                  </span>
                  <h3 className={`mt-3 font-semibold ${style.title}`}>
                    {stage.label}
                  </h3>
                </div>
                <Connector />
              </Fragment>
            );
          })}

          <div
            className={`flex-1 rounded-2xl border border-indigo-300 bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 p-5 ${stepCardHover}`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
              ✓
            </span>
            <h3 className="mt-3 font-semibold text-indigo-900">
              {flow.outcome}
            </h3>
          </div>
        </div>
      </article>
    </Section>
  );
}

function getStageStyle(index: number, total: number) {
  const progress = total > 1 ? index / (total - 1) : 1;

  if (progress <= 0) {
    return {
      card: "border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100",
      badge: "bg-white text-indigo-600 ring-slate-200",
      title: "text-slate-900",
    };
  }

  if (progress <= 0.34) {
    return {
      card: "border-slate-200 bg-gradient-to-br from-slate-50 via-slate-50 to-indigo-50/60",
      badge: "bg-white text-indigo-600 ring-indigo-100",
      title: "text-slate-900",
    };
  }

  if (progress <= 0.67) {
    return {
      card: "border-indigo-100 bg-gradient-to-br from-indigo-50/40 to-indigo-50/80",
      badge: "bg-indigo-50 text-indigo-700 ring-indigo-200",
      title: "text-slate-900",
    };
  }

  return {
    card: "border-indigo-100 bg-gradient-to-br from-indigo-50/40 to-indigo-50",
    badge: "bg-indigo-50 text-indigo-700 ring-indigo-200",
    title: "text-slate-900",
  };
}

function Connector() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center text-slate-300 lg:flex-col"
    >
      <span className="lg:hidden">↓</span>
      <span className="hidden text-lg lg:inline">→</span>
    </div>
  );
}
