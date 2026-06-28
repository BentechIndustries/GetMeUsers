import { Button } from "@/components/ui/Button";
import { CALENDLY_URL, HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl md:leading-[1.1]">
          {HERO.headline}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
          {HERO.subheadline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={CALENDLY_URL} external>
            {HERO.primaryCta}
          </Button>
          <Button href="#how-it-works" variant="secondary">
            {HERO.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
