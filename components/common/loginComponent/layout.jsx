import Link from "next/link";
import styles from "./styles/loginComponent.module.scss";

const LoginLayout = ({ children, title }) => {
  return (
    <section className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>{title}</h1>
      {children}
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

export { LoginLayout };
