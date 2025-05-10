import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SliderContent = ({ slides }) => {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Slides */}
      <div className="slider-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          height={50}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full max-w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide>
              <div className="relative">
                <img
                  src={slide.url}
                  alt={`Slide`}
                  className="w-full h-full lg:h-[600px] object-cover -z-10 opacity-60"
                />

                <div className="absolute  w-full md:w-1/2 top-[15%] md:top-[25%] right-[10%] md:right-[20%]  left-[0%] md:left-[25%] text-center font-sans">
                  <h1 className="text-md md:text-2xl lg:text-5xl bg-gradient-to-tr from-yellow-600 via-amber-700 to-amber-900 text-transparent bg-clip-text font-bold">
                    {slide.heading}
                  </h1>
                  <p className="mt-1 text-xs md:text-lg lg:text-lg lg:mt-8 lg:mb-8  text-amber-950">
                    {slide.paragraph}
                  </p>

                  <div className="flex justify-center space-x-3 md:mt-2">
                    <a className="bg-amber-400 hover:bg-yellow-400 cursor-pointer text-amber-100 rounded-xl  mt-1 py-1 md:py-2 px-5 md:px-12" href="#services">
                      Services
                    </a>

                    <a className="bg-amber-400 hover:bg-yellow-400 cursor-pointer text-amber-100 rounded-xl mt-1 py-1 md:py-2 px-5 md:px-12" href="#contact">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderContent;
