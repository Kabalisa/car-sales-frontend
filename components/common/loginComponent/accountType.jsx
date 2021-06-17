import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/loginComponent.module.scss";

const AccountType = ({ view, setView }) => {
  return (
    <section className={styles.accountTypeContainer}>
      <ul className="flex flex-col md:mb-24">
        <li className="mt-6">
          <button
            className={styles.accountButton}
            onClick={() =>
              setView({
                ...view,
                choose: false,
              })
            }
          >
            <FontAwesomeIcon className={styles.accountIcon} icon={faUserAlt} />
            Individual Account
          </button>
        </li>
        <li className="mt-6">
          <button
            className={styles.accountButton}
            onClick={() =>
              setView({
                ...view,
                choose: false,
                businessSignup: true,
              })
            }
          >
            <FontAwesomeIcon
              className={styles.accountIcon}
              icon={faUserFriends}
            />
            Group Account
          </button>
        </li>
      </ul>
    </section>
  );
};

export { AccountType };
