import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/HeroVisual";
import { CALENDLY_URL, HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="hero-glow pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="flex flex-col gap-8 text-center md:gap-10 md:text-left">
          <div className="flex flex-col gap-1 md:gap-2">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl md:leading-[1.1] lg:text-6xl">
              {HERO.headline}
            </h1>
            <p className="text-2xl font-medium leading-snug text-slate-600 md:text-3xl md:leading-snug">
              {HERO.subheadline}
            </p>
          </div>

          <p className="text-2xl font-semibold leading-snug text-slate-900 md:text-3xl md:leading-snug">
            {HERO.descriptor}
          </p>

          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row md:justify-start">
              <Button href={CALENDLY_URL} external>
                {HERO.primaryCta}
              </Button>
              <Button href="#how-it-works" variant="secondary">
                {HERO.secondaryCta}
              </Button>
            </div>
            <p className="text-sm text-slate-500">{HERO.note}</p>
          </div>
        </div>

        <div className="hidden md:block">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
