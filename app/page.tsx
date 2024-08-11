import Image from "next/image";
import Banner from "@/app/components/home/hero";
import WhatToExpect from "@/app/components/home/expect";
import PlanYourTrip from "@/app/components/home/plan";
import LanguageLearner from "@/app/components/home/language-learner";
import LanguageTranslator from "@/app/components/home/language-translator";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <Banner />
      <WhatToExpect />
      <PlanYourTrip />
      <LanguageLearner />
      <LanguageTranslator />
    </main>
  );
}
