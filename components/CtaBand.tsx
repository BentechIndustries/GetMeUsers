import { Button } from "@/components/ui/Button";
import { CALENDLY_URL, CTA_BAND } from "@/lib/constants";

type CtaBandContent = {
  headline: string;
  subheadline: string;
  cta: string;
};

export function CtaBand({ content = CTA_BAND }: { content?: CtaBandContent }) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-10 md:py-20">
        <div className="max-w-xl">
          <p className="font-display text-3xl leading-tight text-paper md:text-4xl">
            {content.headline}
          </p>
          <p className="mt-3 text-lg text-paper/65">{content.subheadline}</p>
        </div>
        <Button
          href={CALENDLY_URL}
          external
          variant="invert"
          className="shrink-0"
        >
          {content.cta}
        </Button>
      </div>
    </section>
  );
}
