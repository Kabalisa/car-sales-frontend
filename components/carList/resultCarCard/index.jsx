import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faTachometerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { CarImagesSlider } from "../../common";
import styles from "./styles/resultCarCard.module.scss";

const ResultCarCard = () => {
  const [activeIndex, setActiveindex] = useState(1);

  const images = [
    "/images/car1.jpeg",
    "/images/car2.jpeg",
    "/images/car3.jpeg",
    "/images/car4.jpeg",
    "/images/car5.jpeg",
  ];

  return (
    <div className="pt-1 w-full md:border-t-2 border-gray-360 mt-2">
      <div className={styles.resultCarCard}>
        <div className="flex flex-col-reverse md:flex-row md:justify-between relative">
          <button className="callButton">
            <FontAwesomeIcon icon={faPhoneAlt} className="callIcon" />
            Call
          </button>
          <div className="flex md:hidden justify-between w-2/4 md:w-3/4 md:self-center mt-2">
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
          <h1 className={styles.carName}>Harley Davidison V-ROD 2019</h1>
          <div className="flex flex-col md:items-center mt-2 md:mt-0">
            <span className="thin-text-3 text-gray-360 mb-2 md:mb-0">
              Selling Price
            </span>
            <span className="featured-title-02 text-red-450">
              RWF 6,350,000
            </span>
          </div>
          <div
            className="cardStatus bg-yellow-110 absolute hidden md:block"
            style={{ top: "-15px" }}
          >
            Promoted
          </div>
        </div>
        <div className="flex mt-3">
          <div className={styles.motorImageContainer}>
            <img
              alt="searched motor"
              src="/images/car3.jpeg"
              className="w-full h-full object-cover hidden md:block"
            />
            <CarImagesSlider images={images} setActiveindex={setActiveindex} layout="two" />
            <div className={styles.imageNumber}>11 images</div>
            <div className="sliderNumber">{`${activeIndex}/${images.length}`}</div>
          </div>
          <div className="hidden md:flex flex-col flex-1">
            <h2 className="featured-title-02 uppercase">
              harley davidson v-rod
            </h2>
            <span className="thin-text-3 text-gray-360">12 April 2021</span>
            <div className="flex justify-between w-3/5 mt-4">
              <div className="flex flex-col">
                <span className="thin-text-3">
                  Year: <b className="font-bold">2019</b>
                </span>
                <span className="thin-text-3">
                  Kilometers: <b className="font-bold">73,019</b>
                </span>
              </div>
              <span className="thin-text-3">
                Usage: <b className="font-bold">casual</b>
              </span>
            </div>
          </div>
        </div>
        <div className="md:flex items-center hidden mt-4">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className={styles.locationIcon}
          />
          <span className="thin-text-3 text-gray-360">
            Located: Kigali - Kimironko
          </span>
        </div>
      </div>
    </div>
  );
};

export { ResultCarCard };
