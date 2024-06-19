export function Contato() {
  return (
    <section className="flex py-12 items-center justify-center">
      <div className="container p-4 max-w-4xl">
        <form
          className="flex flex-col w-full items-center justify-start gap-2 px-6"
          action="https://formsubmit.co/5afcb85b01770da252dd6fad06cb6003"
          method="POST"
        >
          <div className="w-full flex flex-row gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="">Nome</label>
              <input
                className="w-full rounded-sm p-1"
                type="text"
                name="name"
                required
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="">E-mail</label>
              <input
                className="w-full rounded-sm p-1"
                id="email"
                type="email"
                name="email"
                required
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="">Mensagem</label>
            <input
              className="w-full rounded-sm p-1 h-20 text-black"
              type="text"
              name="textarea"
              required
            />
          </div>

          <button
            className="w-full p-1 mt-6 font-bold rounded-sm bg-blue-600"
            type="submit"
          >
            ENVIAR
          </button>

          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/thanks"
          />
        </form>
      </div>
    </section>
  );
}
