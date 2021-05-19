import { Advertise } from "../../common";
import styles from "./styles/heroBanner.module.scss";

const HeroBanner = () => {
  return (
    <section className="flex flex-col px-4 md:px-0">
      <Advertise />
      <div className={styles.heroBanner__imageContainer}>
        <img
          alt="herobanner | car in the desert"
          className={styles.heroBanner__image}
          src="/images/banner.jpeg"
        />
        <div className={styles.heroBanner__text}>
          The Rwanda's Leading MarketPlace to buy and sell cars
        </div>
        <div className={styles.searchInputContainer}>
          <input
            type="text"
            placeholder="Enter Keywords"
            className={styles.searchInput}
          />
        </div>
      </div>
    </section>
  );
};

export { HeroBanner };
