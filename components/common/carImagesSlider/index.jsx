import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import styles from "./styles/carImagesSlider.module.scss";

SwiperCore.use([Pagination]);

const CarImagesSlider = ({ images, setActiveindex, layout }) => {
  const slides = [];

  images.map((item, index) => {
    slides.push(
      <SwiperSlide tag="li" key={index}>
        <img src={item} alt={item} className="w-full h-full object-cover" />
      </SwiperSlide>
    );
  });

  const handleSlideChangeEnd = ({ activeIndex }) => {
    if (setActiveindex) {
      setActiveindex(activeIndex + 1);
    }
  };

  return layout === "two" ? (
    <Swiper
      id="main"
      tag="section"
      wrapperTag="ul"
      pagination={{ clickable: true, dynamicBullets: true }}
      onSlideChangeTransitionEnd={handleSlideChangeEnd}
      className={styles.layoutTwo}
    >
      {slides}
    </Swiper>
  ) : (
    <Swiper
      id="main"
      tag="section"
      wrapperTag="ul"
      onSlideChangeTransitionEnd={handleSlideChangeEnd}
    >
      {slides}
    </Swiper>
  );
};

export { CarImagesSlider };
