import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faTachometerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { CarImagesSlider } from "../../common";
import styles from "./styles/promotedCar.module.scss";

const PromotedCar = () => {
  const [activeIndex, setActiveindex] = useState(1);

  const images = [
    "/images/car5.jpeg",
    "/images/car3.jpeg",
    "/images/car4.jpeg",
    "/images/car1.jpeg",
    "/images/car2.jpeg",
  ];

  return (
    <div className={styles.PromotedCar}>
      <Link href="/cars/used-cars/toyota">
        <a className={styles.PromotedCarImageContainer}>
          <img
            alt="promoted car"
            src="/images/moto.jpeg"
            className={styles.PromotedCarImage}
          />
          <CarImagesSlider
            images={images}
            setActiveindex={setActiveindex}
            layout="two"
          />
          <div className={styles.cardStatusContainer}>
            <div className="cardStatus bg-red-450 mx-2">Promoted</div>
            <div className="cardStatus bg-blue-270 mx-2">Negotiable</div>
          </div>
          <div className="sliderNumber">{`${activeIndex}/${images.length}`}</div>
        </a>
      </Link>
      <div className="w-full flex flex-col md:items-center mt-2">
        <span className="thin-text-3 text-gray-360 mb-2">Selling price</span>
        <span className="featured-title-02 text-red-450">RWF 6,530,000</span>
      </div>
      <h1 className={`featured-title-02 uppercase ${styles.carName}`}>
        2009 Harley Davidiston V
      </h1>
      <div className="flex justify-between w-2/4 md:w-3/4 md:self-center mt-2">
        <div className="flex">
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className={styles.promoteCarIcon}
          />
          <span className="thin-text-2 self-end">2019</span>
        </div>
        <div className="flex">
          <FontAwesomeIcon
            icon={faTachometerAlt}
            className={styles.promoteCarIcon}
          />
          <span className="thin-text-2 self-end">72,000</span>
        </div>
      </div>
      <button className="callButton self-end py-1 px-4 md:hidden mt-4 font-medium">
        <FontAwesomeIcon icon={faPhoneAlt} className="callIcon" />
        Call
      </button>
    </div>
  );
};

export { PromotedCar };
