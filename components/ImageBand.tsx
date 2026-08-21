import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CALENDLY_URL, CTA_BAND_SECONDARY } from "@/lib/constants";

/* Full-bleed landscape breather, echoing the hero art before the final ask. */
export function ImageBand() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-bg.jpg)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-paper) 0%, transparent 30%, transparent 70%, var(--color-paper) 100%)",
        }}
      />
      <Reveal className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-32 md:px-10 md:py-44">
        <h2 className="max-w-2xl font-display text-4xl font-normal leading-[1.05] text-ink md:text-6xl">
          {CTA_BAND_SECONDARY.headline}
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-ink-soft md:text-xl">
          {CTA_BAND_SECONDARY.subheadline}
        </p>
        <Button href={CALENDLY_URL} external>
          {CTA_BAND_SECONDARY.cta}
        </Button>
      </Reveal>
    </section>
  );
}
