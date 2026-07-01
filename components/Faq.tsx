import { Section } from "@/components/ui/Section";
import { FAQ } from "@/lib/constants";

export function Faq() {
  return (
    <Section id="faq" className="bg-paper-alt">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <div className="mb-5 flex items-center gap-3 text-ink-soft">
              <span className="h-2 w-2 rounded-[1px] bg-accent" />
              <span className="eyebrow">05 / Questions</span>
            </div>
            <h2 className="font-display text-4xl font-normal leading-[1.05] text-ink md:text-5xl">
              {FAQ.title}
            </h2>
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="border-t border-ink/12">
            {FAQ.items.map((item, index) => (
              <details key={item.question} className="group border-b border-ink/12">
                <summary className="flex cursor-pointer list-none items-start gap-5 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="mt-1 font-mono text-xs text-ink-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-xl leading-snug text-ink md:text-2xl">
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className="relative mt-2 h-4 w-4 shrink-0 text-ink transition-transform duration-300 group-open:rotate-45"
                  >
                    <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 bg-current" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pl-10 text-lg leading-relaxed text-ink-soft">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
