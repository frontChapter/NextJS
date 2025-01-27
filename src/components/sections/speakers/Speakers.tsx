import Speaker from "./Speaker";
import { speakersData } from "@/data/speakers";

const Speakers = () => {
  {
    /* TODO: replace hard coded sizes with global props */
  }

  return (
    <section
      id="speakers"
      className="flex flex-col items-center gap-[48px] px-[32px] py-[80px] text-[#FAFAFA]"
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
