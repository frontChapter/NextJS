import { speakerInfoType } from "../types";
import Image from "next/image";

const Speaker = ({ speakerInfo }: { speakerInfo: speakerInfoType }) => {
  {
    /* TODO: replace hard coded styles with global props */
  }

  const { name, role, company, imageUrl } = speakerInfo;
  return (
    <div className="speaker-card flex w-[138px] flex-col gap-[12px]">
      {/* speaker picture */}
      <div className="relative flex items-center justify-center rounded-[8px] p-[5px]">
        {/* Gradient */}
        <div
          className="absolute inset-0 z-0 rounded-md"
          style={{
            background:
              "radial-gradient(82.48% 67.73% at 8.62% 87.5%, #ECD8C6 0%, #A77344 49.5%, #222223 100%)",
          }}
        />
        {/* Black Background */}
        <div className="absolute inset-[1px] z-0 rounded-md bg-background" />

        <Image
          src={imageUrl ?? null}
          width={100}
          height={100}
          alt={name}
          className="rounded-inherit z-[1] w-[128px]"
        />
      </div>
      {/* info section*/}
      <div className="info-wrapper flex flex-col items-center font-[400]">
        {/* speaker name*/}
        <span className="text-[20px]">{name}</span>
        {/* speaker role (stack)*/}
        <span className="w-max text-[16px] text-[#A1A1AA]">{role}</span>
        {/* speaker company details */}
        <div className="mt-[12px] flex items-center gap-[16px]">
          <span className="text-[16px]">در</span>
          <div className="flex items-center gap-[4px]">
            <Image
              width={100}
              height={100}
              src={company.logo ?? null}
              alt={company.name}
              className="w-[20px] rounded-[2px] border-[1px] border-[#FFFFFF1A] p-[2px]"
            />
            <span className="text-[14px] font-[500]">{company.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
