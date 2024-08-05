"use client";

import { Vortex } from "../ui/vortex";

export function VortexDemo() {
  return (
    <div className="mx-auto rounded-md h-[40rem]  sm:h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center md:px-10 w-full h-full"
      ></Vortex>
    </div>
  );
}
