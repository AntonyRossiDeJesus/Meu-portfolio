import { Benefits } from "@/app/pages/sections/benefits/benefits";
import { About } from "./pages/sections/about/about";
import { Cards } from "./pages/sections/cards/cards";
import { Hero } from "./pages/sections/hero/hero";
import HeroRodape from "./pages/sections/heroRodape/heroRodape";
import { Projects } from "./pages/sections/projects/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroRodape />
      <About />
      <Benefits />
      <Cards />
      <Projects />
    </>
  );
}
