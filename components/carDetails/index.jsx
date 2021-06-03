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

  const firstDetails = [
    { title: "Trim", content: "S-500" },
    { title: "Kilometers", content: "0" },
    { title: "Warranty", content: "No" },
    { title: "Color", content: "White" },
    { title: "Year", content: "2020" },
  ];

  const secondDetails = [
    { title: "Doors", content: "4 door" },
    { title: "Body Condition", content: "perfect inside and out" },
    { title: "Mechanical condition", content: "perfect inside and out" },
    { title: "Seller Type", content: "Dealer" },
    { title: "Body type", content: "Sedan" },
    { title: "No of cylinders", content: "6" },
    { title: "Transimission", content: "Automatic Transimission" },
    { title: "Regional specs", content: "Eurpean Specs" },
    { title: "HorsePower", content: "400-500 HP" },
    { title: "Fuel type", content: "Gasoline" },
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
          <ShareModal
            ismodalOpen={ismodalOpen}
            handleToggleModlal={handleToggleModlal}
          />
        </div>
      </section>
      <section className={styles.carDetails__upperPart}>
        <Advertise />
        <span className={styles.price}>RWF 6,530,000</span>
        <h1 className={styles.carName}>
          MERCEDES BENZ S-500 | 4MATIC | 2021 | BRNAD NEW
        </h1>
        <span className={styles.postTime}>Posted About 21 hours ago</span>
      </section>
      <section className={styles.carDetails__detailsList}>
        <h1 className={`${styles.detailTitle} px-4`}>Details</h1>
        <div className="flex flex-col">
          {firstDetails.map((item, index) => {
            return (
              <div className={styles.firstDetails} key={index}>
                <span className={styles.firstDetails__title}>{item.title}</span>
                <span className={styles.firstDetails__content}>
                  {item.content}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col mb-5">
          {secondDetails.map((item, index) => {
            return (
              <div className={styles.secondDetails} key={index}>
                <span className={styles.secondDetails__title}>
                  {item.title}
                </span>
                <span className={styles.secondDetails__content}>
                  {item.content}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col px-4 mb-24">
          <h1 className={styles.detailTitle}>Description</h1>
          <span className="thin-text-3 uppercase mt-3">car info</span>
          <span className="thin-text-3 mt-3">2020 Model</span>
          <span className="thin-text-3 mt-1">Brand new</span>
          <span className="thin-text-3 mt-3">Call Our sales team Now!</span>
          <div className="flex">
            <span className="thin-text-3">Jane:</span>
            <span className="thin-text-3 text-red-450">0788992942</span>
          </div>
          <div className="flex">
            <span className="thin-text-3">Bob:</span>
            <span className="thin-text-3 text-red-450">0788992942</span>
          </div>
        </div>
      </section>
      <section className={styles.callFooter}>
        <button className="red-button p-3 w-10/12">Call</button>
      </section>
    </main>
  );
};

export { CarDetailsComponent };
