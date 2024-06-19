import Image from "next/image";

import Project01Img from "@/assets/project01.webp";

export function Projects() {
  return (
    <section className="flex itens-center justify-center w-full bg-black px-2 py-12 ">
      <div className="container flex flex-col gap-4">
        <h2 className="text-center text-4xl">Projetos</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className=" flex flex-col md:flex-row gap-4 w-[100%] md:w-[50%]">
            <div className="p-4 border rounded-xl">
              <div className="flex flex-col gap-sm pb-2">
                <h3>Nome do projeto</h3>
                <p>Jun 2023 - Dez 2023</p>
              </div>
              <div className="w-full bg-cover bg-no-repeat bg-center pb-5">
                <Image
                  className="w-full bg-cover bg-no-repeat bg-current"
                  src={Project01Img}
                  alt="Imagem do primeiro projeto"
                />
              </div>
              <p className="pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo suscipit minus incidunt perferendis placeat voluptatum
                veritatis, dolorem debitis laborum molestiae minima iusto,
                excepturi illum. Culpa autem ipsa beatae accusantium hic?
              </p>
              <p className="pb-4">Tecnologias: TypeScript, Next, HTML, CSS</p>

              <div className="flex gap-4">
                <button className="border py-2 px-4 hover:bg-gray-400 transition duration-300 ease-in-out">
                  VER PROJETO
                </button>

                <button className="border py-2 px-4 hover:bg-gray-400 transition duration-300 ease-in-out">
                  VER CÓDIGO
                </button>
              </div>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row gap-4 w-[100%] md:w-[50%]">
            <div className="p-4 border rounded-xl">
              <div className="flex flex-col gap-sm pb-2">
                <h3>Nome do projeto</h3>
                <p>Jun 2023 - Dez 2023</p>
              </div>
              <div className="w-full bg-cover bg-no-repeat bg-center pb-5">
                <Image
                  className="w-full bg-cover bg-no-repeat bg-current"
                  src={Project01Img}
                  alt="Imagem do primeiro projeto"
                />
              </div>
              <p className="pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo suscipit minus incidunt perferendis placeat voluptatum
                veritatis, dolorem debitis laborum molestiae minima iusto,
                excepturi illum. Culpa autem ipsa beatae accusantium hic?
              </p>
              <p className="pb-4">Tecnologias: TypeScript, Next, HTML, CSS</p>

              <div className="flex gap-4">
                <button className="border py-2 px-4 hover:bg-gray-400 transition duration-300 ease-in-out">
                  VER PROJETO
                </button>

                <button className="border py-2 px-4 hover:bg-gray-400 transition duration-300 ease-in-out">
                  VER CÓDIGO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
