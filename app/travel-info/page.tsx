import TravelInfoBanner from "../components/travel-info/banner";
import Food from "../components/travel-info/food";
import TravelBudget from "../components/travel-info/travel-budget";
import TravelInfoCards from "../components/travel-info/travel-info-cards";
import VisaInfo from "../components/travel-info/visa-info";

export default function TravelInfo() {
  return (
    <main className=" min-h-screen">
      <TravelInfoBanner />
      <div className="absolute z-[10]">
        <TravelInfoCards />
        <VisaInfo />
        <TravelBudget />
        <Food />
      </div>
    </main>
  );
}
