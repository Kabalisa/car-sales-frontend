import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/resultCarCard.module.scss";

const ResultCarCard = () => {
  return (
    <div className="pt-1 w-full border-t-2 border-gray-360 mt-2">
      <div className="flex flex-col-reverse md:flex-col mt-2 border-l-4 border-yellow-110 py-2 px-4">
        <div className="flex justify-between relative">
          <h1 className={styles.carName}>Harley Davidison V-ROD 2019</h1>
          <div className="flex flex-col items-center">
            <span className="thin-text-3 text-gray-360">Selling Price</span>
            <span className="featured-title-02 text-red-450">
              RWF 6,350,000
            </span>
          </div>
          <div
            className="cardStatus bg-yellow-110 absolute"
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
              className="w-full h-full object-cover"
            />
            <div className={styles.imageNumber}>11 images</div>
          </div>
          <div className="flex flex-col flex-1">
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
