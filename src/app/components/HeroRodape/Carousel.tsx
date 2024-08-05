// "use client";

// import React, { useEffect, useRef } from "react";
// import styled from "styled-components";

// const CarouselWrapper = styled.div`
//   overflow: hidden;
//   height: 10rem;
//   width: 100%;
//   position: relative;
// `;

// const CarouselContent = styled.div`
//   display: flex;
//   gap: 16px;
//   height: 10rem;
//   width: max-content;
//   position: absolute;
//   animation: scroll 240s linear infinite;

//   @keyframes scroll {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-50%);
//     }
//   }
// `;

// const CarouselImage = styled.img`
//   height: 10rem;
//   width: auto;
//   flex: 0 0 auto;
// `;

// interface CarouselProps {
//   images: string[];
// }

// const Carousel: React.FC<CarouselProps> = ({ images }) => {
//   const carouselRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const carousel = carouselRef.current;
//     if (carousel) {
//       const clonedContent = carousel.innerHTML;
//       carousel.innerHTML += clonedContent;
//     }
//   }, [images]);

//   return (
//     <CarouselWrapper>
//       <CarouselContent ref={carouselRef}>
//         {images.map((src, index) => (
//           <CarouselImage
//             key={index}
//             src={src}
//             alt={`Carousel image ${index + 1}`}
//           />
//         ))}
//         {images.map((src, index) => (
//           <CarouselImage
//             key={`clone-${index}`}
//             src={src}
//             alt={`Carousel image ${index + 1}`}
//           />
//         ))}
//       </CarouselContent>
//     </CarouselWrapper>
//   );
// };

// export default Carousel;

"use client";

// import React, { useEffect, useRef, useState } from "react";
// import styled from "styled-components";
// import SkeletonLoader from "../ui/skeleton-variant";

// const CarouselWrapper = styled.div`
//   overflow: hidden;
//   height: 10rem;
//   width: 100%;
//   position: relative;
// `;

// const CarouselContent = styled.div`
//   display: flex;
//   height: 10rem;
//   width: max-content;
//   position: absolute;
//   animation: scroll 20s linear infinite;

//   @keyframes scroll {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-50%);
//     }
//   }
// `;

// const CarouselImage = styled.img`
//   height: 10rem;
//   width: auto;
//   flex: 0 0 auto;
// `;

// interface CarouselProps {
//   images: string[];
// }

// const Carousel: React.FC<CarouselProps> = ({ images }) => {
//   const [loaded, setLoaded] = useState(false);
//   const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
//   const carouselRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const allImagesLoaded = imageRefs.current.every((img) => img?.complete);
//     if (allImagesLoaded) {
//       setLoaded(true);
//       const carousel = carouselRef.current;
//       if (carousel) {
//         const clonedContent = carousel.innerHTML;
//         carousel.innerHTML += clonedContent;
//       }
//     }
//   }, []);

//   const handleImageLoad = () => {
//     const allImagesLoaded = imageRefs.current.every((img) => img?.complete);
//     if (allImagesLoaded) {
//       setLoaded(true);
//     }
//   };

//   return (
//     <CarouselWrapper>
//       {loaded ? (
//         <CarouselContent ref={carouselRef}>
//           {images.concat(images).map((src, index) => (
//             <CarouselImage
//               key={index}
//               src={src}
//               alt={`Carousel image ${index + 1}`}
//               ref={(el) => (imageRefs.current[index] = el)}
//               onLoad={handleImageLoad}
//             />
//           ))}
//         </CarouselContent>
//       ) : (
//         <SkeletonLoader />
//       )}
//     </CarouselWrapper>
//   );
// };

// export default Carousel;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SkeletonLoader from "../ui/skeleton-variant";

const CarouselWrapper = styled.div`
  overflow: hidden;
  height: 10rem;
  width: 100%;
  position: relative;
`;

const CarouselContent = styled.div`
  display: flex;
  gap: 16px;
  height: 10rem;
  width: max-content;
  position: absolute;
  animation: scroll 100s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const CarouselImage = styled.img`
  height: 10rem;
  width: auto;
  flex: 0 0 auto;
`;

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [loaded, setLoaded] = useState(false);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const allImagesLoaded = imageRefs.current.every((img) => img?.complete);
    if (allImagesLoaded) {
      setLoaded(true);
      const carousel = carouselRef.current;
      if (carousel) {
        const clonedContent = carousel.innerHTML;
        carousel.innerHTML += clonedContent;
      }
    }
  }, []);

  const handleImageLoad = () => {
    const allImagesLoaded = imageRefs.current.every((img) => img?.complete);
    if (allImagesLoaded) {
      setLoaded(true);
    }
  };

  return (
    <CarouselWrapper>
      {loaded ? (
        <CarouselContent ref={carouselRef}>
          {images.concat(images).map((src, index) => (
            <CarouselImage
              key={index}
              src={src}
              alt={`Carousel image ${index + 1}`}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              onLoad={handleImageLoad}
            />
          ))}
        </CarouselContent>
      ) : (
        <SkeletonLoader />
      )}
    </CarouselWrapper>
  );
};

export default Carousel;
