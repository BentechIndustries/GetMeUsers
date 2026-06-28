import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { CALENDLY_URL, OFFER } from "@/lib/constants";

export function Offer() {
  return (
    <Section id="offer">
      <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-lg md:p-10">
        <p className="text-sm font-medium uppercase tracking-wide text-indigo-600">
          {OFFER.title}
        </p>
        <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          {OFFER.price}
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          {OFFER.description}
        </p>

        <ul className="mt-8 space-y-3">
          {OFFER.includes.map((item) => (
            <li key={item} className="flex items-center gap-3 text-slate-700">
              <svg
                className="h-5 w-5 shrink-0 text-indigo-600"
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
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Button href={CALENDLY_URL} external className="w-full">
            {OFFER.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
