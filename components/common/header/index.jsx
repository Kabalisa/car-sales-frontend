import Link from "next/link";
import styles from "./styles/header.module.scss";

const Header = () => {
  return (
    <nav className="container flex justify-center pt-6">
      <h1 className={styles.title}>
        <Link href="/">
          <a>
            cars sal<span className="border-t-2 border-red-600">es</span>
          </a>
        </Link>
      </h1>
      <div></div>
    </nav>
  );
};

export { Header };
