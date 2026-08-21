import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CALENDLY_URL, FINAL_CTA, SITE } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="pt-24 md:pt-32">
      <Reveal className="mx-auto max-w-6xl px-6 md:px-10">
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

        <footer className="mt-20 border-t border-ink/12 py-10 text-sm text-ink-soft">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div className="max-w-xs">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt=""
                    width={28}
                    height={28}
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="font-medium text-ink">{SITE.name}</span>
              </div>
              <p className="mt-4 leading-relaxed">{SITE.tagline}</p>
            </div>

            <div className="flex gap-16">
              <div>
                <p className="eyebrow mb-4 text-ink">Site</p>
                <ul className="space-y-2.5">
                  <li>
                    <a href="#how-it-works" className="transition-colors hover:text-ink">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a href="#proof" className="transition-colors hover:text-ink">
                      Example
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="transition-colors hover:text-ink">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-4 text-ink">Get started</p>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-ink"
                    >
                      Book a growth call
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-ink/12 pt-6">
            <span>
              &copy; {new Date().getFullYear()} {SITE.name}. All rights
              reserved.
            </span>
          </div>
        </footer>
      </Reveal>
    </section>
  );
}
