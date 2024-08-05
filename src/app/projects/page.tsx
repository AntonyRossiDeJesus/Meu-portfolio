import { HeroScrollDemo } from "../components/ContainerScroll/ContainerScrollProjects";
import { HeroParallaxDemo } from "../components/HeroParallax/heroParallax";
import { ImagesSliderDemo } from "../components/ImagemSlider/imagemSlider";

export default function Projects() {
  return (
    <section className="">
      <HeroParallaxDemo />
      <HeroScrollDemo />
      <ImagesSliderDemo />
    </section>
  );
}
