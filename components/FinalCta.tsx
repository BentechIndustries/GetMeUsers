import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CALENDLY_URL, FINAL_CTA, SITE } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="pt-24 md:pt-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mb-5 flex items-center gap-3 text-ink-soft">
              <span className="h-2 w-2 rounded-[1px] bg-accent" />
              <span className="eyebrow">06 / Get started</span>
            </div>
            <h2 className="font-display text-5xl font-normal leading-[1.0] text-ink md:text-7xl">
              {FINAL_CTA.headline}
            </h2>
            <p className="mt-6 max-w-lg text-lg text-ink-soft">
              {FINAL_CTA.subheadline}
            </p>
            <div className="mt-8">
              <Button href={CALENDLY_URL} external>
                {FINAL_CTA.cta}
              </Button>
            </div>
          </div>

          <aside className="border-l-2 border-accent/50 pl-5 text-base leading-relaxed text-ink-soft md:col-span-4">
            {FINAL_CTA.ps}
          </aside>
        </div>

        <footer className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ink/12 py-8 text-sm text-ink-soft sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-md bg-ink">
              <Image
                src="/logo.png"
                alt=""
                width={28}
                height={28}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="font-medium text-ink">{SITE.name}</span>
          </div>
          <span>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
        </footer>
      </div>
    </section>
  );
}
