import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginActions from "../../../redux/actions/loginActions";
import styles from "./styles/header.module.scss";

const Header = ({ layout, modalOpen, actions }) => {
  const router = useRouter();

  return (
    <nav className={styles.headerContainer}>
      <div
        className={`${layout && layout !== "thirdType" ? styles.goBackContainer : "hidden"} ${
          layout === "secondType"
            ? "absolute"
            : layout === "fourthType"
            ? styles.goBackContainer__fourth
            : ""
        }`}
      >
        <div className={styles.goBack} onClick={() => router.back()}>
          <FontAwesomeIcon
            icon={faLongArrowAltLeft}
            className={styles.longArrowLeft}
          />
        </div>
      </div>
      <div
        className={`${styles.header} ${
          layout === "secondType"
            ? styles.headerHidden
            : layout === "fourthType"
            ? styles.fourthHeaderLayout
            : ""
        }`}
      >
        <h1 className={styles.title}>
          <Link href="/">
            <a>
              Best ca<span className="border-t-2 border-red-600">rs</span>
            </a>
          </Link>
        </h1>
        <div className={`${layout === "fourthType" ? "hidden" : ""} flex`}>
          <div
            className={styles.loginSignup}
            onClick={() => actions.toggleLoginModal()}
          >
            Login or sign up
          </div>
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
          <button
            className="hidden md:block self-center p-2 red-button"
            onClick={() => router.push("/post-an-ad")}
          >
            Post an ad
          </button>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ loginReducer }) => ({
  modalOpen: loginReducer.modalOpen,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(loginActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
