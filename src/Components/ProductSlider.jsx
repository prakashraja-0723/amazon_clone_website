import React, {useEffect, useState} from "react";
import Larr from "../assets/svg/Larr.svg";
import Rarr from "../assets/svg/Rarr.svg";
import slide1 from "/src/assets/images/image_slider/01.jpg";
import slide2 from "/src/assets/images/image_slider/02.png";
import slide3 from "/src/assets/images/image_slider/03.png";
import slide4 from "/src/assets/images/image_slider/04.png";
import slide5 from "/src/assets/images/image_slider/05.png";
import slide6 from "/src/assets/images/image_slider/06.png";
import slide7 from "/src/assets/images/image_slider/07.png";

const ProductSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [slide1, slide2, slide3, slide4,slide5,slide6,slide7];
  const nextSlide = () => {
    console.log(currentImage)
    currentImage === images.length - 1
      ? setCurrentImage(0)
      : setCurrentImage(currentImage + 1);
    console.log(currentImage);
  };

  const prevSlide = () => {
    currentImage === 0
      ? setCurrentImage(images.length - 1)
      : setCurrentImage(currentImage - 1);
    console.log(currentImage);
    
  };
    // const interval = setInterval(() => {
    // if (currentImage >= 0 && currentImage < images.length -1){
    //   setCurrentImage(currentImage + 1)
    //   console.log(currentImage)
    // } else{
    //   setCurrentImage(0)
    //   console.log(currentImage)
    // }
    // }, 3000);
  return (
    <>
      <div
        className={`w-full h-[600px] mx-auto bg-blue-400 slide relative overflow-x-hidden`}
      >
        <div className={`h-[260px] relative z-50`}>
          <div
            className={`absolute h-full w-full flex items-center justify-between m-auto`}
          >
            <button
              className={`h-full flex items-center justify-center px-6 opacity-0 hover:opacity-100 transition-all hover:border hover:border-white border-transparent`}
              onClick={prevSlide}
            >
              <img src={Larr} alt="" className={`w-7`} />
            </button>
            <button
              className={`h-full flex items-center justify-center px-6 opacity-0 hover:opacity-100 hover:border hover:border-white border-transparent`}
              onClick={nextSlide}
            >
              <img src={Rarr} alt="" className={`w-7`} />
            </button>
          </div>
        </div>
        <div
          className={`absolute top-0 inline-flex transition ease-in-out duration-500 w-full h-full`}
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {images.map((image) => {
            return <img src={image} alt="" className={`h-full`} key={Math.random() }/>;
          })}
        </div>
      </div>
    </>
  );
};
export default ProductSlider;
