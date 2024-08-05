import Image from "next/image";

import { FlipWordsDemo } from "@/app/components/AnimatedFlip/animatedFlip";
import { VortexDemo } from "@/app/components/vortex/vortex";
import downloadIcon from "@/assets/Download-check.svg";
import contactIcon from "@/assets/ICONE-MAIL.svg";

export function Hero() {
  return (
    <section className="flex relative justify-center bg-black z-20 h-[40rem]">
      <div className="container z-40 pt-5 flex flex-col md:flex-row items-center justify-center gap-4 ">
        <div className="flex justify-center flex-col gap-4 w-full sm:w-[50%]">
          <h1 className="text-5xl md:text-[1.775rem] lg:text-6xl text-center">
            Antony rossi de jesus
          </h1>
          <FlipWordsDemo />
          <h2 className="text-2xl text-center md:text-[20px]">
            Desenvolvedor Front-end
          </h2>
          <div className="flex items-center justify-center flex-col md:flex-row gap-4">
            <button className="flex w-[100%] items-center justify-center gap-2 border-2 border-solid py-2 px-7 md:px-2 text-xs hover:bg-green-700">
              <Image className="w-4" src={downloadIcon} alt="Download icone" />
              <span>DOWNLOAD CV</span>
            </button>
            <button className="flex w-[100%] items-center justify-center gap-2 border-2 border-solid py-2 px-7 text-xs hover:bg-green-700">
              <a
                href="https://api.whatsapp.com/send?phone=5548988046418"
                className="flex gap-2 items-center"
              >
                <Image className="w-4" src={contactIcon} alt="Download icone" />
                <span>CONTATO</span>
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute w-full">
        <VortexDemo />
      </div>
    </section>
  );
}
