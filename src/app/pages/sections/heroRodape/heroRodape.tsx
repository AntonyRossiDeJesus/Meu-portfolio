import Carousel from "../../../components/HeroRodape/Carousel";

const images = [
  "image1.webp",
  "image2.webp",
  "image3.webp",
  "image4.webp",
  "image5.webp",
  "image6.webp",
];

export default function HeroRodape() {
  return (
    <>
      <section className="w-full h-[16rem] bg-custom-gradient-hero-rodape">
        <div>
          <Carousel images={images} />
        </div>
      </section>
    </>
  );
}
