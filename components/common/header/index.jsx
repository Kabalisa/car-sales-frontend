import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/header.module.scss";

const Header = () => {
  return (
    <nav className="md:border-b">
      <div className={styles.header}>
        <h1 className={styles.title}>
          <Link href="/">
            <a>
              Best ca<span className="border-t-2 border-red-600">rs</span>
            </a>
          </Link>
        </h1>
        <div className="flex">
          <div className={styles.loginSignup}>Login or sign up</div>
          <div className={styles.dropdown}>
            <div className="flex h-full">
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
          <button className="hidden md:block self-center p-2 red-button">
            Sell my car
          </button>
        </div>
      </div>
    </nav>
  );
};

export { Header };
