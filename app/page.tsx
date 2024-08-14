import Image from "next/image";
import Banner from "@/components/home/hero";
import WhatToExpect from "@/components/home/expect";
import PlanYourTrip from "@/components/home/plan";
import LanguageLearner from "@/components/home/language-learner";
import LanguageTranslator from "@/components/home/language-translator";
import HowItWorks from "@/components/home/how-travelingo-works";
import Footer from "../components/shared/footer";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <Banner />
      <WhatToExpect />
      <PlanYourTrip />
      <LanguageLearner />
      <LanguageTranslator />
      <HowItWorks />

      <Footer
        heading={"Travelingo API"}
        description={""}
        buttonLabel={"Get Our API"}
      />
    </main>
  );
}
