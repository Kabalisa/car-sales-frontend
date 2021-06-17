import { LoginLayout } from "./layout";
import styles from "./styles/loginComponent.module.scss";

const EmailSignup = () => {
  return (
    <LoginLayout title="Sign up to post an ad">
      <ul className="flex flex-col">
        <li className="mt-6">
          <input placeholder="Name" className={styles.loginInput}></input>
        </li>
        <li className="mt-6">
          <input placeholder="Email" className={styles.loginInput}></input>
        </li>
        <li className="mt-6 relative">
          <input placeholder="Password" className={styles.loginInput}></input>
          <span className={styles.show}>Show</span>
        </li>
      </ul>
      <button className={`red-button ${styles.loginRedButton}`}>Sign Up</button>
    </LoginLayout>
  );
};

export { EmailSignup };
