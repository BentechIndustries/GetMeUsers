import { Section, SectionHeader } from "@/components/ui/Section";
import { PROBLEM } from "@/lib/constants";

export function Problem() {
  return (
    <Section className="bg-slate-50">
      <SectionHeader
        title={
          <>
            {PROBLEM.titleLine1}
            <br />
            {PROBLEM.titleLine2}
          </>
        }
      />

      <ul className="space-y-6">
        {PROBLEM.points.map((point) => (
          <li
            key={point}
            className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
              !
            </span>
            <p className="text-lg leading-relaxed text-slate-700">{point}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
