"use client";

import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-b from-[#17C6E2] to-white py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Sobre mim
      </motion.h1>

      <div className="flex gap-2 max-w-[100%] md:max-w-full">
        <div className=" p-2 rounded-lg w-[50%] text-center text-sm md:text-base bg-custom-gradient-sobre-mim z-10">
          <img src="" alt="" />
          <h4>Experiencia</h4>
          <p>2+ anos</p>
          <p>Desenvolvedor Frontend</p>
        </div>

        <div className=" p-4 rounded-lg w-[50%]  text-center text-sm md:text-base bg-custom-gradient-sobre-mim z-10">
          <img src="" alt="" />
          <h4>Educação</h4>
          <p>Desenvolvimento web</p>
          <p>Análise de dados</p>
        </div>
      </div>
    </LampContainer>
  );
}
