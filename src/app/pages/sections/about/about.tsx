export function About() {
  return (
    <section className="flex py-12 items-center justify-center w-full bg-white h-auto p-4 text-black">
      <div className="container">
        <div className="flex items-center flex-col w-full gap-4">
          <h2 className="text-center text-4xl">Sobre mim</h2>
          <div className="flex gap-2 max-w-[100%] md:max-w-[60%]">
            <div className="border p-2 rounded-lg w-[50%] text-center text-sm md:text-base">
              <img src="" alt="" />
              <h4>Experiencia</h4>
              <p>2+ anos</p>
              <p>Desenvolvedor Fontend</p>
            </div>

            <div className="border p-4 rounded-lg w-[50%]  text-center text-sm md:text-base">
              <img src="" alt="" />
              <h4>Educação</h4>
              <p>Desenvolvimento web</p>
              <p>Análise de dados</p>
            </div>
          </div>
          <p className="max-w-[100%] md:max-w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            commodi, doloribus corrupti dolorum tenetur nam ad ducimus at iure
            sapiente saepe alias beatae aspernatur nihil delectus optio quae
            iste blanditiis.
          </p>
          <hr className=" bg-black border-2 border-solid" />
          <h2 className="text-center text-4xl">Tecnologias</h2>

          <div className="w-full flex flex-wrap md:flex-nowrap text-center gap-2 md:gap-4 text-sm md:text-base">
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

          <div className="w-full flex flex-wrap md:flex-nowrap text-center gap-2 md:gap-4 text-sm md:text-base">
            <div className="w-[30%] md:w-[16%] p-2 border rounded-lg">
              JavaScript
            </div>
            <div className="w-[30%] md:w-[16%] p-2 border rounded-lg">
              Typescript
            </div>
            <div className="w-[30%] md:w-[16%] p-2 border rounded-lg">
              React
            </div>
            <div className="w-[30%] md:w-[16%] p-2 border rounded-lg">Next</div>
            <div className="w-[30%] md:w-[16%] p-2 border rounded-lg">Git</div>
            <div className="w-[30%] md:w-[16%] p-2 border rounded-lg">HTML</div>
          </div>
        </div>
      </div>
    </section>
  );
}
