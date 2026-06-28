import { Section, SectionHeader } from "@/components/ui/Section";
import { AUDIENCE } from "@/lib/constants";

export function WhoItsFor() {
  return (
    <Section className="bg-slate-50">
      <SectionHeader title={AUDIENCE.title} subtitle={AUDIENCE.subtitle} />

      <div className="flex flex-wrap gap-3">
        {AUDIENCE.groups.map((group) => (
          <span
            key={group}
            className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm"
          >
            {group}
          </span>
        ))}
      </div>
    </Section>
  );
}
