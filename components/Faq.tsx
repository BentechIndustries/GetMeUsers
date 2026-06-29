import { Section, SectionHeader } from "@/components/ui/Section";
import { FAQ } from "@/lib/constants";

export function Faq() {
  return (
    <Section id="faq">
      <SectionHeader title={FAQ.title} />

      <div className="mx-auto max-w-2xl divide-y divide-slate-200">
        {FAQ.items.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="cursor-pointer list-none font-medium text-slate-900 [&::-webkit-details-marker]:hidden">
              {item.question}
            </summary>
            <p className="mt-3 leading-relaxed text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
