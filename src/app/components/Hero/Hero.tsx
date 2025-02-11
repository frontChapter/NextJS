import HeroContent from "./HeroContent";
import HeroSVG from "./HeroSVG";
import { HeroLeftTech, HeroRightTech } from "./HeroTechSVG";
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background px-4 pb-[500px] text-foreground dark:bg-background-dark dark:text-foreground-dark md:px-8">
      <HeroContent />
      <div className="absolute -left-[26%] -top-[150px] z-10 hidden items-center justify-center xl:flex min-[1440px]:-left-[22%] 2xl:-left-[18%]">
        <HeroLeftTech />
      </div>
      <div className="absolute -right-[30%] -top-[150px] z-10 hidden items-center justify-center xl:flex min-[1440px]:-right-[25%] 2xl:-right-[21.5%]">
        <HeroRightTech />
      </div>
      <div className="absolute left-1/2 top-[345px] -translate-x-1/2">
        <HeroSVG />
      </div>
    </div>
  );
};

export default Hero;
