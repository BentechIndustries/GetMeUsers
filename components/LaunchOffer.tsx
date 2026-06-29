import { CALENDLY_URL, LAUNCH_OFFER } from "@/lib/constants";

export function LaunchOffer() {
  return (
    <section className="border-y border-amber-200 bg-amber-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:gap-4 md:px-8">
        <span className="inline-flex w-fit shrink-0 rounded-full bg-amber-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {LAUNCH_OFFER.badge}
        </span>
        <p className="text-base font-medium leading-relaxed text-amber-950 md:text-lg">
          {LAUNCH_OFFER.lead}{" "}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-900 underline decoration-amber-400 underline-offset-2 transition-colors hover:text-amber-950"
          >
            {LAUNCH_OFFER.cta}
          </a>
          {LAUNCH_OFFER.tail}
        </p>
      </div>
    </section>
  );
}
