import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { CtaBand } from "@/components/CtaBand";
import { Solution } from "@/components/Solution";
import { Proof } from "@/components/Proof";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { CTA_BAND_SECONDARY } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <CtaBand />
        <Solution />
        <Proof />
        <CtaBand content={CTA_BAND_SECONDARY} />
        <Faq />
        <FinalCta />
      </main>
    </>
  );
}
