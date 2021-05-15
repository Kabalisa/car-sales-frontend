import Link from "next/link";
import styles from "./styles/carDealer.module.scss";

const CarDealer = () => {
  const dealers = [
    { src: "/images/maserati.png", alt: "cars from maserati" },
    { src: "/images/toyota.png", alt: "cars from toyota" },
    { src: "/images/hyundai.png", alt: "cars from hyundai" },
    { src: "/images/ford.png", alt: "cars from ford" },
  ];
  return (
    <div className="flex flex-col mt-4">
      <h1 className="featured-title">
        <Link href="/">
          <a>Featured Dealers</a>
        </Link>
      </h1>
      <div className={styles.dealerCardContainer}>
        {dealers.map((item, index) => {
          return (
            <Link href="/">
              <a className={styles.dealerCard} key={index}>
                <img
                  src={item.src}
                  className={styles.dealerIcon}
                  alt={item.alt}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export { CarDealer };
