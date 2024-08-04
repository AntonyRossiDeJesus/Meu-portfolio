import { LampDemo } from "@/app/components/Lamp/lamp";

export function About() {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-[#020617] h-auto pb-10 pt-20 sm:pt-0 text-white z-10">
      <LampDemo />
      <div className="container -mt-72 z-50">
        <div className="flex items-center justify-center flex-col w-full gap-4">
          <p className="max-w-[100%] md:max-w-[70%] text-center">
            Com mais de 2 anos de experiência no desenvolvimento web, aplicando
            as melhores práticas, tendências e soluções mais eficazes para
            atender às suas necessidades, já trabalhei em uma ampla variedade de
            projetos, desde sites corporativos, gerenciamento de cursos até
            lojas online, criando soluções personalizadas que se adaptam às
            especificidades do seu negócio, com agilidade e eficácia, garantindo
            que seu projeto seja concluído dentro do cronograma estabelecido,
            além de criar seu site oferecemos suporte contínuo para resolver
            problemas, fazer atualizações e garantir que sua presença online
            esteja sempre funcionando perfeitamente.
          </p>

          <h2 className="text-center text-4xl pt-10">Tecnologias</h2>

          <div className="w-full flex flex-col gap-4 p-4">
            <div className="w-full justify-center flex flex-wrap md:flex-nowrap text-center gap-2 md:gap-4 text-xs md:text-sm lg:text-base">
              <div className="w-[30%] md:w-[16%] p-2 py-2 border rounded-lg">
                JavaScript
              </div>
              <div className="w-[30%] md:w-[16%] p-2 py-2 border rounded-lg">
                Typescript
              </div>
              <div className="w-[30%] md:w-[16%] p-2 py-2 border rounded-lg">
                React
              </div>
              <div className="w-[30%] md:w-[16%] p-2 py-2 border rounded-lg">
                Next
              </div>
              <div className="w-[30%] md:w-[16%] p-2 py-2 border rounded-lg">
                Git
              </div>
              <div className="w-[30%] md:w-[16%] p-2 py-2 border rounded-lg">
                HTML
              </div>
            </div>
            <div className="w-full justify-center flex flex-wrap md:flex-nowrap text-center gap-2 md:gap-4 text-xs md:text-sm lg:text-base">
              <div className="w-[30%] md:w-[16%] p-2 border rounded-lg">
                SCSS
              </div>
              <div className="w-[30%] md:w-[16%] p-2 border rounded-lg">UI</div>
              <div className="w-[30%] md:w-[16%] py-2 px-1 border rounded-lg">
                Tailwind CSS
              </div>
              <div className="w-[30%] md:w-[16%] p-2 border rounded-lg">
                Figma
              </div>
              <div className="w-[30%] md:w-[16%] p-2 border rounded-lg">
                Photoshop
              </div>
              <div className="w-[30%] md:w-[16%] py-2 px-[2px] md:px-2 border rounded-lg">
                Illustration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
