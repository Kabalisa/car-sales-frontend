import Link from "next/link";
import styles from "./styles/heroBanner.module.scss";

const HeroBanner = () => {
  return (
    <section className="flex flex-col px-4">
      <div className={styles.heroBanner__advertise}>
        <div className={styles.advertise__title}>
          Advetise Your Business Here !
        </div>
        <div className={styles.advertise__subTitle}>
          Start as low as RWF 20.000
        </div>
        <Link href="/">
          <a className={styles.advertise__book}>Book Now</a>
        </Link>
      </div>
      <div className={styles.heroBanner__text}>
        The Rwandan Leading MarketPlace to buy and sell cars
      </div>
    </section>
  );
};

export { HeroBanner };
