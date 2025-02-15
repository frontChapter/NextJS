import HeroContent from "./HeroContent";
import HeroSVG from "./HeroSVG";
import { HeroLeftTech, HeroRightTech } from "./HeroTechSVG";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-background px-4 pb-[400px] text-foreground dark:bg-background-dark dark:text-foreground-dark md:px-8 min-[2200px]:pb-[800px]">
      <HeroContent />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 px-16">
        <div className="absolute -right-[55%] -top-[150px] z-10 hidden items-center justify-center xl:flex">
          <HeroLeftTech />
        </div>

        <div className="absolute -left-[8%] -top-[150px] z-10 hidden items-center justify-center xl:flex">
          <HeroRightTech />
        </div>
      </div>

      <div className="absolute left-1/2 top-[345px] -translate-x-1/2 min-[1650px]:w-full min-[1650px]:max-w-[100%]">
        <HeroSVG />
      </div>
    </div>
  );
};

export default Hero;
