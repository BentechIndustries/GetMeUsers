import { Section, SectionHeader } from "@/components/ui/Section";
import { SOLUTION } from "@/lib/constants";

export function Solution() {
  return (
    <Section className="bg-paper-alt">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
        <SectionHeader
          eyebrow="03 / What you get"
          title={SOLUTION.title}
          className="md:col-span-7"
        />
        <p className="text-lg leading-relaxed text-ink-soft md:col-span-5">
          {SOLUTION.intro}
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 border-l border-t border-ink/12 sm:grid-cols-2">
        {SOLUTION.items.map((item, index) => (
          <div
            key={item.title}
            className="group border-b border-r border-ink/12 p-7 transition-colors hover:bg-paper md:p-9"
          >
            <span className="eyebrow text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-2xl leading-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-14 max-w-3xl font-display text-2xl italic leading-snug text-ink md:text-3xl">
        {SOLUTION.closing}
      </p>
    </Section>
  );
}
