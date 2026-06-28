import { Section, SectionHeader } from "@/components/ui/Section";
import { PROOF } from "@/lib/constants";

export function Proof() {
  return (
    <Section id="proof" className="bg-slate-50">
      <SectionHeader title={PROOF.title} subtitle={PROOF.subtitle} />

      <div className="grid gap-6 md:grid-cols-2">
        {PROOF.cases.map((study) => (
          <article
            key={study.title}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-medium text-indigo-600">
              {study.title}
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              {study.result}
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              {study.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
