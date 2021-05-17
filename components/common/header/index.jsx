import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/header.module.scss";

const Header = () => {
  return (
    <nav className="border-b">
      <div className="container flex justify-center md:justify-between pt-6 md:pt-3">
        <h1 className={styles.title}>
          <Link href="/">
            <a>
              Best ca<span className="border-t-2 border-red-600">rs</span>
            </a>
          </Link>
        </h1>
        <div className="flex md:pb-3">
          <div className={styles.loginSignup}>Login or sign up</div>
          <div className={styles.dropdown}>
            <div className="flex">
              <div className={styles.userAvatar}>KI</div>
              <span className={styles.username}>Kabalisa</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={styles.arrowDown}
              />
            </div>
            <div className={styles.dropdownContainer}>
              <ul className={styles.dropdownList}>
                <li className={styles.dropdownItem}>
                  <Link href="/">
                    <a className={styles.dropdownItem__link}>My Ads</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/">
                    <a className={styles.dropdownItem__link}>My Profile</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/">
                    <a className={styles.dropdownItem__link}>
                      Account Settings
                    </a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/">
                    <a className={styles.dropdownItem__link}>Signout</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <button className={styles.button}>Sell my car</button>
        </div>
      </div>
    </nav>
  );
};

export { Header };
