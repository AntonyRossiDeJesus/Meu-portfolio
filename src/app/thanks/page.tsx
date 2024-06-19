import Image from "next/image";

import avatarHero from "@/assets/IMG-TON-2.webp";
import { AnimatedBackground } from "@/app/components/AnimatedBackground/animatedBackground";

export default function Thanks() {
  return (
    <section className="flex justify-center p-4 mt-10 ">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-4 ">
        <div className="relative w-[80%] md:w-[75%] lg:w-[60%] xl:w-[30%] h-96">
          <div className="absolute w-[100%]  top-0 right-0">
            <AnimatedBackground />
          </div>

          <div className="absolute w-[80%] z-10 right-12">
            <Image
              className="rounded-full max-h-1/2"
              src={avatarHero}
              alt="Avatar hero"
            />
          </div>
        </div>
        <div className="flex justify-center flex-col gap-4">
          <h1 className="text-4xl md:text-6xl xl:text-7xl">
            Obrigado pelo seu contato
          </h1>
          <h2 className="text-2xl md:text-5xl">Retornarei em breve!</h2>
        </div>
      </div>
    </section>
  );
}
