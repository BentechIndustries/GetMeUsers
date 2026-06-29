import { Button } from "@/components/ui/Button";
import { CALENDLY_URL, FINAL_CTA, SITE } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="cta-glow py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {FINAL_CTA.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
          {FINAL_CTA.subheadline}
        </p>
        <div className="mt-10">
          <Button href={CALENDLY_URL} external>
            {FINAL_CTA.cta}
          </Button>
        </div>
        <p className="mx-auto mt-8 max-w-lg text-sm text-slate-500">
          {FINAL_CTA.ps}
        </p>
      </div>

      <footer className="mx-auto mt-16 max-w-5xl border-t border-slate-200 px-6 pt-8 text-center text-sm text-slate-500 md:px-8">
        &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </footer>
    </section>
  );
}
