import { Marquee } from "./Marquee";
import TweetCard from "./TweetCard";
import { tweetsData } from "@/data/tweets";

const TweetSection = () => {
  const firstRow = tweetsData.slice(0, tweetsData.length / 2);
  const secondRow = tweetsData.slice(tweetsData.length / 2);

  return (
    <div>
      <h2 className="mb-14 mt-28 text-center text-4xl font-bold">
        درمورد <span className="text-orange-500">فرانت چپتر</span> چی
        می&#8202;گن؟
      </h2>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <TweetCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <TweetCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default TweetSection;
