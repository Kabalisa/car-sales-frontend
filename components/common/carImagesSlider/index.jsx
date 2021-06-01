import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const CarImagesSlider = ({ images, setActiveindex }) => {
  return (
    <Swiper
      id="main"
      tag="section"
      wrapperTag="ul"
      pagination={{ clickable: true, dynamicBullets: true }}
      onSlideChangeTransitionEnd={({ activeIndex }) => {
        setActiveindex(activeIndex + 1);
      }}
    >
      {images.map((item, index) => {
        return (
          <SwiperSlide tag="li" key={index}>
            <img src={item} alt={item} className="w-full h-full object-cover" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export { CarImagesSlider };
