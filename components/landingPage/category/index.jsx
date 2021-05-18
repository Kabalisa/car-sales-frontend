import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/category.module.scss";

const Category = ({ category }) => {
  return (
    <Link href="/cars/used-cars">
      <a className={`${styles.category} md:card-shadow`}>
        <div className={styles.category__titleNumber}>
          <span className={styles.category__title}>{category.type}</span>
          <span className={styles.category__number}>{category.number}</span>
        </div>
        <FontAwesomeIcon
          icon={faAngleRight}
          className={styles.category__icon}
        />
      </a>
    </Link>
  );
};

export { Category };
