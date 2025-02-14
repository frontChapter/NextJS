import { Marquee } from "./Marquee";
import TweetCard from "./TweetCard";
import { Section } from "@/components/ui/section";
import { firstMarqueetweetsData, secondMarqueetweetsData } from "@/configs/tweetsData";

const TweetSection = () => {
  return (
    <Section className="md:px-0">
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-center text-3xl font-semibold text-foreground dark:text-foreground-dark sm:text-5xl">
          درمورد <span className="text-orange-500">فرانت چپتر</span> چی
          می&#8202;گن؟
        </h2>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
          <Marquee reverse pauseOnHover className="[--duration:50s]">
            {firstMarqueetweetsData.map((review, index) => (
              <TweetCard key={index} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:50s]">
            {secondMarqueetweetsData.map((review, index) => (
              <TweetCard key={index} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-foreground"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-foreground"></div>
        </div>
      </div>
    </Section>
  );
};

export default TweetSection;
