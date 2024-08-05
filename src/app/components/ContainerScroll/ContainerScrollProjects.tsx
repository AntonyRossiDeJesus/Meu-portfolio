"use client";

import Image from "next/image";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden md:pb-20 mt-4">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl md:text-4xl font-semibold text-black dark:text-white">
              landing page
            </h1>
            <br />
            <span className="text-4xl text-gray-600 sm:text-[4rem] md:text-[4.5rem] lg:text-[6rem] font-bold mt-1 leading-none">
              SEU PRODUTO <span className="text-green-500">VENDE MAIS</span>
            </span>
          </>
        }
      >
        <Image
          src={`/image3.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-center h-full object-fill"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
