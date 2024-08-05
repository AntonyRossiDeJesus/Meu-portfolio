"use client";

import Image from "next/image";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden md:pb-20">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              landing page
            </h1>
            <br />
            <span className="text-5xl text-gray-600 md:text-[6rem] font-bold mt-1 leading-none">
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
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
