import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["melhor", "fofo", "bonito", "moderno"];

  return (
    <div className="h-[6rem] flex justify-center items-center">
      <div className="text-[27px] md:text-[29px] mx-auto font-normal text-neutral-600 dark:text-white">
        Construir
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
