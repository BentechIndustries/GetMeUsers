import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { WhoItsFor } from "@/components/WhoItsFor";
import { HowItWorks } from "@/components/HowItWorks";
import { Proof } from "@/components/Proof";
import { Offer } from "@/components/Offer";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhoItsFor />
        <HowItWorks />
        <Proof />
        <Offer />
        <FinalCta />
      </main>
    </>
  );
}
