import Sponsors from "./components/Sponsors/Sponsors";
import TopNavigation from "./components/top-navigation/top-navigation";
import FAQ from "@/app/components/FAQ/FAQ";
import TweetSection from "@/app/components/TweetSection/TweetSection";
import Speakers from "@/app/components/speakers/Speakers";

export default function Home() {
  return (
    <>
      <TopNavigation />
      <Speakers />
      <Sponsors />
      <TweetSection />
      <FAQ />
    </>
  );
}
