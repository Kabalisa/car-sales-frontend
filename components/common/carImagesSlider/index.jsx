import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import styles from "./styles/carImagesSlider.module.scss";

SwiperCore.use([Pagination]);

const CarImagesSlider = ({ images, setActiveindex, layout }) => {
  return (
    <Swiper
      id="main"
      tag="section"
      wrapperTag="ul"
      pagination={{ clickable: true, dynamicBullets: true }}
      onSlideChangeTransitionEnd={({ activeIndex }) => {
        if (setActiveindex) {
          setActiveindex(activeIndex + 1);
        }
      }}
      className={layout === "two" ? styles.layoutTwo : ""}
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
