import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/postAnAd.module.scss";

const PostAnAdComponent = () => {
  const categories = [
    "Cars",
    "Motorcyles",
    "Car Accessories & Parts",
    "MotorCyle Accessories & Parts",
    "Car leasing",
  ];

  return (
    <main className="flex">
      <section className={styles.container}>
        <h1 className={styles.title}>Choose the rigth category for your ad</h1>
        <ul className="flex flex-col px-4 border-t border-gray-230 ">
          {categories.map((item, index) => {
            return (
              <li className="py-4 border-b border-gray-230" key={index}>
                <Link href="/cars/used-cars">
                  <a className={styles.category}>
                    <span className={styles.category__title}>{item}</span>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className={styles.category__icon}
                    />
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export { PostAnAdComponent };
