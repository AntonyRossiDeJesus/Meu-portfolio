import Image from "next/image";

import { AnimatedBackground } from "@/app/components/AnimatedBackground/animatedBackground";
import downloadIcon from "@/assets/Download-check.svg";
import contactIcon from "@/assets/ICONE-MAIL.svg";
import avatarHero from "@/assets/IMG-TON-2.webp";

export function Hero() {
  return (
    <section className="flex justify-center p-4 pt-10 bg-black">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-4 ">
        <div className="relative w-[100%] sm:w-[60%] md:w-[60%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%] h-96">
          <div className="absolute w-[100%]  top-0 right-0">
            <AnimatedBackground />
          </div>

          <div className="absolute w-[100%] z-10 ">
            <Image
              className="rounded-full max-h-1/2"
              src={avatarHero}
              alt="Avatar hero"
            />
          </div>
        </div>
        <div className="flex justify-center flex-col gap-4">
          <h1 className="text-4xl md:text-5xl xl:text-7xl">
            Antony rossi de jesus
          </h1>
          <h2 className="text-2xl md:text-4xl">Desenvolvedor Front-end</h2>
          <div className="flex items-center justify-center flex-col md:flex-row gap-4">
            <button className="flex w-[100%] items-center justify-center gap-2 border-2 border-solid py-2 px-7 text-xs hover:bg-green-700">
              <Image src={downloadIcon} alt="Download icone" />
              <span>DOWNLOAD CV</span>
            </button>
            <button className="flex w-[100%] items-center justify-center gap-2 border-2 border-solid py-2 px-7 text-xs hover:bg-green-700">
              <a
                href="https://api.whatsapp.com/send?phone=5548988046418"
                className="flex gap-2 items-center"
              >
                <Image src={contactIcon} alt="Download icone" />
                <span>CONTATO</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
