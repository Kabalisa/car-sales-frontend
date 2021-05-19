import Link from "next/link";
import styles from "./styles/advertise.module.scss";

const Advertise = () => {
  return (
    <div className={styles.advertise}>
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
  );
};

export { Advertise };
