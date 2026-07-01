import { Section, SectionHeader } from "@/components/ui/Section";
import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeader eyebrow="02 / How it works" title={STEPS.title} />

      <div className="mt-14 border-t border-ink/12">
        {STEPS.items.map((item, index) => (
          <div
            key={item.step}
            className="grid grid-cols-1 gap-4 border-b border-ink/12 py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
          >
            <div className="flex items-baseline gap-4 md:col-span-4">
              <span className="font-display text-5xl leading-none text-accent md:text-6xl">
                {item.step}
              </span>
              <h3 className="font-display text-2xl leading-tight text-ink md:text-3xl">
                {item.title}
              </h3>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft md:col-span-7 md:col-start-6">
              {item.description}
            </p>
            <span
              aria-hidden
              className="hidden text-right text-sm text-ink-soft md:col-span-1 md:block"
            >
              {index < STEPS.items.length - 1 ? "\u2193" : "\u25A0"}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
