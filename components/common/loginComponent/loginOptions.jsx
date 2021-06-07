import Link from "next/link";
import styles from "./styles/loginComponent.module.scss";

const LoginOptions = () => {
  return (
    <section className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Log in to post an ad</h1>
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
          <button className={styles.loginButton}>
            <img
              alt="facebook icon"
              className={styles.loginIcon}
              src="/images/email.svg"
            />
            Continue with Email
          </button>
        </li>
      </ul>
      <span className={styles.createAccount}>
        Don’t have an account? create one
      </span>
      <span className={styles.footerText}>
        By signing up I agree to the{" "}
        <Link href="/">
          <a className="text-blue-270">terms and condition </a>
        </Link>
        and{" "}
        <Link href="/">
          <a className="text-blue-270">privacy piolicy</a>
        </Link>
      </span>
    </section>
  );
};

export { LoginOptions };
