import { Section } from "@/components/ui/section";
import sponsersData from "@/configs/sponsersData";
import Image from "next/image";

export default function Sponsers() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-14 text-center">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-md font-semibold sm:text-xl">
            حامیان همایش فرانت چپتر
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {sponsersData.map((sponser, index) => (
            <div className="flex items-center gap-2" key={index}>
              <div className="border-2 border-gray-800 p-1">
                <Image
                  src={sponser.image}
                  width={21}
                  height={21}
                  alt={sponser.title}
                />
              </div>

              <span className="font-bold">{sponser.title}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
