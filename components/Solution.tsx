import { Section, SectionHeader } from "@/components/ui/Section";
import { SOLUTION } from "@/lib/constants";

export function Solution() {
  return (
    <Section>
      <SectionHeader
        title={SOLUTION.title}
        subtitle={SOLUTION.description}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {SOLUTION.items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
