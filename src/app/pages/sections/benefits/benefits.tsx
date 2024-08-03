"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import IconFile from "@/assets/icon-file.svg";
import IconHand02 from "@/assets/icon-hand-02.svg";
import IconHand from "@/assets/icon-hand.svg";
import IconMockup from "@/assets/mockup.svg";

import { GridContainer } from "@/app/components/grid/grid";
import gsap from "gsap";

export function Benefits() {
  const textHeroRef = useRef(null);
  const mockupLeftRef = useRef(null);
  const mockupRightRef = useRef(null);

  useEffect(() => {
    const textHero = textHeroRef.current;
    const mLeft = mockupLeftRef.current;
    const mRight = mockupRightRef.current;

    gsap.fromTo(
      textHero,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      mLeft,
      {
        rotate: 0,
      },
      {
        rotate: -10,
        duration: 1,
      }
    );

    gsap.fromTo(
      mRight,
      {
        rotate: 0,
      },
      {
        rotate: 10,
        duration: 1,
      }
    );
  }, []);

  return (
    <section className="relative w-full flex justify-center bg-black bg-hero h-section-benefits border-t border-t-green-border pt-16 overflow-hidden bg-no-repeat bg-top">
      <GridContainer className="flex flex-col items-center">
        <div
          className="w-full max-w-text-benefits text-center opacity-0"
          ref={textHeroRef}
        >
          <h3 className="text-xl font-medium text-green-actived mb-4">
            Em todos os dispositivos
          </h3>
          <h1 className="text-white text-7xl/normal font-semibold mb-2">
            Design responsivo
          </h1>

          <div className="flex items-center justify-center gap-10">
            <button>
              <a
                href="https://api.whatsapp.com/send?phone=5548988046418"
                className="flex items-center gap-2"
              >
                <Image src={IconFile} alt="icone de file" />
                <span className="text-white font-medium">
                  Assinar lista de espera
                </span>
              </a>
            </button>
          </div>
        </div>

        <div className="relative max-w-area-icons mt-4 h-28">
          <Image
            src={IconHand}
            alt="Icone palmas"
            className="absolute left-0 bottom-0"
          />
          <Image
            src={IconHand02}
            alt="Icone palmas dois"
            className="absolute top-0 right-0"
          />
        </div>

        <div className="absolute -bottom-44 max-w-area-mockups flex justify-between ">
          <Image
            src={IconMockup}
            alt="mockup"
            className="relative top-[1.1rem] left-[3.3rem]"
            ref={mockupLeftRef}
          />
          <Image
            src={IconMockup}
            alt="mockup"
            className="relative top-[1.1rem] right-[3.3rem]"
            ref={mockupRightRef}
          />
        </div>
      </GridContainer>
    </section>
  );
}
