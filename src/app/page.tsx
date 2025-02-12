import TopNavigation from "./components/top-navigation/top-navigation";
import Sponsers from "./components/Sponsers/Sponsers";
import FAQ from "@/app/components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <TopNavigation />
      <FAQ />
      <Sponsers />
    </>
  );
}
