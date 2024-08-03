import Image from "next/image";

import Project02Img from "@/assets/bg-avanti-nvv.webp";
import Project01Img from "@/assets/project01.webp";

export function Projects() {
  return (
    <section className="flex itens-center justify-center w-full bg-black px-2 py-12 ">
      <div className="container flex flex-col gap-4">
        <h2 className="text-center text-6xl mb-8">Projetos</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className=" flex flex-col md:flex-row gap-4 w-[100%] md:w-[50%]">
            <div className="p-4 border rounded-xl">
              <div className="flex flex-col gap-sm pb-2">
                <h2 className="text-2xl">Landing Page</h2>
                <h3 className="text-2xl">Nutri Suplementos</h3>
              </div>
              <div className="w-full bg-cover bg-no-repeat bg-center pb-5">
                <Image
                  className="w-full bg-cover bg-no-repeat bg-current"
                  src={Project01Img}
                  alt="Imagem do primeiro projeto"
                />
              </div>
              <p className="pb-4">
                Landing page para vendas de encapsulados. O foco é destacar o
                produto e guiar o cliente diretamente para a compra. Com um
                design otimizado e call-to-actions estratégicos, aumentamos as
                chances de conversão, transformando visitantes em clientes. A
                navegação é intuitiva e responsiva, garantindo a melhor
                experiência em qualquer dispositivo.
              </p>
              <p className="pb-4">Tecnologias: ✏ HTML 🖌 SCSS 💻 JavaScript</p>

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
                <h2 className="text-2xl">Página Institucional</h2>
                <h3 className="text-2xl">Avanti</h3>
              </div>
              <div className="w-full bg-cover bg-no-repeat bg-center pb-5">
                <Image
                  className="w-full bg-cover bg-no-repeat bg-current"
                  src={Project02Img}
                  alt="Imagem do primeiro projeto"
                />
              </div>
              <p className="pb-4">
                Empresa Avanti, uma versão fiel dessa página utilizando Next.js
                e Tailwind CSS. No desenvolvimento, apliquei conceitos
                importantes como estados do React, validação de dados,
                responsividade, componentes modulares e rotas.
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
