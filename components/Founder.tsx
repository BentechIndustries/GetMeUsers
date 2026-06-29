import { Section } from "@/components/ui/Section";
import { FOUNDER } from "@/lib/constants";

export function Founder() {
  return (
    <Section>
      <div className="flex flex-col items-start gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 md:flex-row md:items-center md:gap-10 md:p-10">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
          {FOUNDER.initials}
        </div>
        <div>
          <p className="text-lg leading-relaxed text-slate-700">
            {FOUNDER.statement}
          </p>
          <p className="mt-3 text-sm font-medium text-slate-900">
            {FOUNDER.name}, {FOUNDER.role}
          </p>
        </div>
      </div>
    </Section>
  );
}
