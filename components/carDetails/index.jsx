import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { CarImagesSlider, Advertise } from "../common";
import { ShareModal } from "./shareModal";
import styles from "./styles/carDetails.module.scss";

const CarDetailsComponent = () => {
  const [activeIndex, setActiveindex] = useState(1);
  const [ismodalOpen, setIsmodalOpen] = useState(false);

  const images = [
    "/images/car1.jpeg",
    "/images/car2.jpeg",
    "/images/car3.jpeg",
    "/images/car4.jpeg",
    "/images/car5.jpeg",
  ];

  const handleToggleModlal = () => {
    setIsmodalOpen(!ismodalOpen);
  };

  return (
    <main className={styles.carDetails}>
      <section className={styles.carImageSlider}>
        <CarImagesSlider images={images} setActiveindex={setActiveindex} />
        <div
          className={styles.slidesNumber}
        >{`${activeIndex} of ${images.length} images`}</div>
        <div className={styles.iconsContainer}>
          <div className={styles.iconHolder}>
            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
          </div>
          <div
            className={styles.iconHolder}
            onClick={() => handleToggleModlal()}
          >
            <FontAwesomeIcon icon={faShareAlt} className={styles.icon} />
          </div>
          <ShareModal ismodalOpen={ismodalOpen} handleToggleModlal={handleToggleModlal} />
        </div>
      </section>
      <section className={styles.carDetails__upperPart}>
        <Advertise />
      </section>
      <section className={styles.carDetails__detailsList}>detailsList</section>
    </main>
  );
};

export { CarDetailsComponent };
