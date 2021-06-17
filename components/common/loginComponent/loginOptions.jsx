import Link from "next/link";
import { LoginLayout } from "./layout";
import styles from "./styles/loginComponent.module.scss";

const LoginOptions = ({ view, setView }) => {
  return (
    <LoginLayout title="Log in to post an ad">
      <ul className="flex flex-col">
        <li className="mt-6">
          <button className={styles.loginButton}>
            <img
              alt="facebook icon"
              className={styles.loginIcon}
              src="/images/facebook.svg"
            />
            Continue with facebook
          </button>
        </li>
        <li className="mt-6">
          <button className={styles.loginButton}>
            <img
              alt="facebook icon"
              className={styles.loginIcon}
              src="/images/google.svg"
            />
            Continue with google
          </button>
        </li>
        <li className="mt-6">
          <button
            className={styles.loginButton}
            onClick={() =>
              setView({
                ...view,
                options: false,
                login: true,
              })
            }
          >
            <img
              alt="facebook icon"
              className={styles.loginIcon}
              src="/images/email.svg"
            />
            Continue with Email
          </button>
        </li>
      </ul>
      <span
        className={styles.redText}
        onClick={() =>
          setView({
            ...view,
            options: false,
            choose: true
          })
        }
      >
        Don’t have an account? create one
      </span>
    </LoginLayout>
  );
};

export { LoginOptions };
