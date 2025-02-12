import Speakers from "@/app/components/speakers/Speakers";
import Sponsers from "./components/Sponsers/Sponsers";
import FAQ from "@/app/components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Speakers />
      <FAQ />
      <Sponsers />
    </>
  );
}
