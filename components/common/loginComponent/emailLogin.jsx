import Link from "next/link";
import { LoginLayout } from "./layout";
import styles from "./styles/loginComponent.module.scss";

const EmailLogin = () => {
  return (
    <LoginLayout title="Log in with your email">
      <ul className="flex flex-col">
        <li className="mt-6">
          <input placeholder="Email" className={styles.loginInput}></input>
        </li>
        <li className="mt-6 relative">
          <input placeholder="Password" className={styles.loginInput}></input>
          <span className={styles.show}>Show</span>
        </li>
      </ul>
      <button className={`red-button ${styles.loginRedButton}`}>Log In</button>
      <Link href="/">
        <a className={styles.redText}>Forgot your password?</a>
      </Link>
    </LoginLayout>
  );
};

export { EmailLogin };
