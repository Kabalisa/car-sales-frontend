import Link from "next/link";
import styles from "./styles/featuredCar.module.scss";

const FeaturedCar = () => {
  return (
    <div className="flex flex-col mt-4 mb-20">
      <h1 className="featured-title">
        <Link href="/">
          <a>Featured Listings</a>
        </Link>
      </h1>
      <div className={styles.featuredCardContainer}>
        {["1", "2", "3", "4"].map((item) => {
          return (
            <Link href="/" key={item}>
              <a className={`${styles.featuredCard} card-shadow`}>
                <div className={styles.featuredImageContainer}>
                  <img
                    src="/images/car1.jpeg"
                    className={styles.featuredImage}
                  />
                </div>
                <span className={styles.featuredCarPrice}>RWF 8,580,000</span>
                <span className={styles.featuredCarType}>BMW x6</span>
                <div className="flex mb-0.5">
                  <span className="thin-text">Year: 2020 .</span>
                  <span className="thin-text">KM 89,232</span>
                </div>
                <div className="flex justify-between">
                  <span className="thin-text-1">Abou mousab</span>
                  <span className="thin-text-1">10 mins</span>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export { FeaturedCar };
