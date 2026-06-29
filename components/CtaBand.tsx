import { Button } from "@/components/ui/Button";
import { CALENDLY_URL, CTA_BAND } from "@/lib/constants";

type CtaBandContent = {
  headline: string;
  subheadline: string;
  cta: string;
};

export function CtaBand({ content = CTA_BAND }: { content?: CtaBandContent }) {
  return (
    <section className="bg-indigo-600 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left md:px-8">
        <div>
          <p className="text-lg font-semibold text-white">{content.headline}</p>
          <p className="mt-1 text-indigo-200">{content.subheadline}</p>
        </div>
        <Button href={CALENDLY_URL} external variant="secondary" className="shrink-0 bg-white hover:bg-indigo-50">
          {content.cta}
        </Button>
      </div>
    </section>
  );
}
