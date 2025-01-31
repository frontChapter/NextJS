import Speaker from "./Speaker";
import { speakersData } from "@/configs/speakers";

const Speakers = () => {
  return (
    <section
      id="speakers"
      className="flex flex-col items-center gap-12 px-[32px] py-20"
    >
      <h3 className="text-center text-[48px] font-[800]">سخنرانان همایش</h3>
      <div className="speakers-wrapper flex max-w-[1080px] flex-wrap justify-center gap-[20px]">
        {speakersData.map((info, idx) => (
          <Speaker key={idx} speakerInfo={info} />
        ))}
      </div>
    </section>
  );
};

export default Speakers;
