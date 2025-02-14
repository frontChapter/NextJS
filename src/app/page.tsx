import Sponsers from "./components/Sponsers/Sponsers";
import FAQ from "@/app/components/FAQ/FAQ";
import TweetSection from "@/app/components/TweetSection/TweetSection";

export default function Home() {
  return (
    <>
      <TweetSection />
      <FAQ />
      <Sponsers />
    </>
  );
}
