import { LoginLayout } from "./layout";
import styles from "./styles/loginComponent.module.scss";

const BusinessSignup = () => {
  return (
    <LoginLayout title="Sign up to post an ad">
      <ul className="flex flex-col">
        <li className="mt-6">
          <input placeholder="Business Name" className={styles.loginInput}></input>
        </li>
        <li className="mt-6">
          <input placeholder="Business Email" className={styles.loginInput}></input>
        </li>
        <li className="mt-6">
          <input placeholder="Phone Number" className={styles.loginInput}></input>
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

export { BusinessSignup };
