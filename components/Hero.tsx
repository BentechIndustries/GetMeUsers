import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/HeroVisual";
import { CALENDLY_URL, HERO, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-36">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[65%] bg-cover bg-bottom opacity-70"
        style={{
          backgroundImage: "url(/hero-bg.jpg)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 55%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 55%, black 100%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-12 md:items-end md:gap-10 md:px-10">
        <div className="reveal md:col-span-7">
          <div className="mb-6 flex items-center gap-3 text-ink-soft">
            <span className="h-2 w-2 rounded-[1px] bg-accent" />
            <span className="eyebrow">{SITE.tagline}</span>
          </div>

          <h1 className="font-display text-6xl font-normal leading-[0.98] text-ink md:text-7xl lg:text-[5.5rem]">
            {HERO.headline}
            <br />
            <span className="italic text-ink-soft">{HERO.subheadline}</span>
          </h1>

          <p className="mt-8 max-w-md text-2xl leading-tight text-ink md:text-3xl">
            {HERO.descriptor}
          </p>

          <div className="mt-10 flex flex-col items-start gap-4">
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Button href={CALENDLY_URL} external>
                {HERO.primaryCta}
              </Button>
              <Button href="#how-it-works" variant="ghost">
                {HERO.secondaryCta}
              </Button>
            </div>
            <p className="text-sm text-ink-soft">{HERO.note}</p>
          </div>
        </div>

        <div className="reveal hidden md:col-span-5 md:block" style={{ animationDelay: "120ms" }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
