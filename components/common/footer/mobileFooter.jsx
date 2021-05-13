import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faPlusCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./styles/mobileFooter.module.scss";

const MobileFooter = () => {
  return (
    <div className="w-full flex justify-between">
      <Link href="/">
        <a className={styles.link}>
          <FontAwesomeIcon icon={faHome} className={styles.linkIcon} />
          <span className={styles.linkTitle}>Home</span>
        </a>
      </Link>
      <Link href="/">
        <a className={styles.link}>
          <FontAwesomeIcon icon={faSearch} className={styles.linkIcon} />
          <span className={styles.linkTitle}>Search</span>
        </a>
      </Link>
      <Link href="/">
        <a className={styles.link}>
          <FontAwesomeIcon
            icon={faPlusCircle}
            className={styles.linkIcon}
            style={{ color: "#E03529" }}
          />
          <span className={styles.linkTitle}>Post an ad</span>
        </a>
      </Link>
      <Link href="/">
        <a className={styles.link}>
          <FontAwesomeIcon icon={faUser} className={styles.linkIcon} />
          <span className={styles.linkTitle}>Profile</span>
        </a>
      </Link>
    </div>
  );
};

export { MobileFooter };
