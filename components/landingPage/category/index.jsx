import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/category.module.scss";

const Category = ({ category, key }) => {
  return (
    <Link href="/">
      <a className={styles.category} key={key}>
        <span className={styles.category__title}>{category}</span>
        <FontAwesomeIcon
          icon={faAngleRight}
          className={styles.category__icon}
        />
      </a>
    </Link>
  );
};

export { Category };
