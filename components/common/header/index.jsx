import Link from "next/link";
import styles from "./styles/header.module.scss";

const Header = () => {
  return (
    <nav className="container flex justify-center pt-6">
      <h1 className={styles.title}>
        <Link href="/">
          <a>
            Best ca<span className="border-t-2 border-red-600">rs</span>
          </a>
        </Link>
      </h1>
      <div></div>
    </nav>
  );
};

export { Header };
