import { Benefits } from "@/app/pages/sections/benefits/benefits";
import { About } from "./pages/sections/about/about";
import { Cards } from "./pages/sections/cards/cards";
import { Contato } from "./pages/sections/contato/contato";
import { Hero } from "./pages/sections/hero/hero";
import { Projects } from "./pages/sections/projects/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <Cards />
      <Projects />
      <Contato />
    </>
  );
}
