import { CALENDLY_URL, LAUNCH_OFFER } from "@/lib/constants";

export function LaunchOffer() {
  return (
    <section className="relative z-10 bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:gap-5 md:px-10">
        <span className="inline-flex w-fit shrink-0 items-center gap-2 bg-accent px-3 py-1 text-white">
          <span className="eyebrow text-[0.68rem]">{LAUNCH_OFFER.badge}</span>
        </span>
        <p className="text-sm leading-relaxed text-paper/85 md:text-base">
          {LAUNCH_OFFER.lead}{" "}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-paper underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            {LAUNCH_OFFER.cta}
          </a>
          {LAUNCH_OFFER.tail}
        </p>
      </div>
    </section>
  );
}
