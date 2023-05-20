import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Gallery from "./Gallery";
import PopularRobot from "./PopularRobot";
import FighterRobot from "./FighterRobot";
import Product from "./Product";
import useTitle from "../hooks/useTitle";




const Home = () => {
  useTitle("Home");
  const slides = [
    {
      url: "https://images.pexels.com/photos/8294594/pexels-photo-8294594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/8294615/pexels-photo-8294615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/8294652/pexels-photo-8294652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },

    {
      url: "https://images.pexels.com/photos/8294660/pexels-photo-8294660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/8294615/pexels-photo-8294615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    // banner
    <>
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <div className="absolute w-full h-full text-center text-gray-200 max-h-[650px] rounded-2xl bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Kids<span className="text-indigo-400"> Popular</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {" "}
            <span className="text-indigo-600"> Toys</span> Robot 2.0
          </h1>
        </div>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <section>
        <Gallery></Gallery>
        <Product />
        

        <FighterRobot />
        <PopularRobot />
      </section>
    </>
  );
};

export default Home;
