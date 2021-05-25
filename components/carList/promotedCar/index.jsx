import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/promotedCar.module.scss";

const PromotedCar = () => {
  return (
    <div className={styles.PromotedCar}>
      <div className={styles.PromotedCarImageContainer}>
        <img
          alt="promoted car"
          src="/images/moto.jpeg"
          className={styles.PromotedCarImage}
        />
        <div className={styles.cardStatusContainer}>
          <div className="cardStatus bg-red-450 mx-2">Promoted</div>
          <div className="cardStatus bg-blue-270 mx-2">Negotiable</div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-2">
        <span className={styles.sellingPrice}>Selling price</span>
        <span className="featured-title-02 text-red-450">RWF 6,530,000</span>
      </div>
      <h1 className={`featured-title-02 uppercase ${styles.carName}`}>
        2009 Harley Davidiston V...
      </h1>
      <div className="flex justify-between w-3/4 self-center mt-2">
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
    </div>
  );
};

export { PromotedCar };
