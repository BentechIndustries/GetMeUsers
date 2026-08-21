import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LaunchOffer } from "@/components/LaunchOffer";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { CtaBand } from "@/components/CtaBand";
import { Solution } from "@/components/Solution";
import { Proof } from "@/components/Proof";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { ImageBand } from "@/components/ImageBand";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LaunchOffer />
        <Problem />
        <HowItWorks />
        <CtaBand />
        <Solution />
        <Proof />
        <ImageBand />
        <Faq />
        <FinalCta />
      </main>
    </>
  );
}
