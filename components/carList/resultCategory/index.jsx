import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./styles/resultCategory.module.scss";

const ResultCategory = () => {
  const [show, setshow] = useState(false);

  const arr = [
    { car: "Sportster", number: "12" },
    { car: "Sportster", number: "12" },
    { car: "Sportster", number: "12" },
    { car: "Sportster", number: "12" },
    { car: "V-Rod", number: "26" },
    { car: "V-Rod", number: "26" },
    { car: "V-Rod", number: "26" },
    { car: "V-Rod", number: "26" },
    { car: "V-Rod", number: "26" },
    { car: "CVO", number: "1" },
    { car: "CVO", number: "1" },
    { car: "CVO", number: "1" },
    { car: "CVO", number: "1" },
    { car: "Softail", number: "113" },
    { car: "Softail", number: "113" },
    { car: "Softail", number: "113" },
    { car: "Softail", number: "113" },
    { car: "Softail", number: "113" },
  ];

  return (
    <section className={styles.resultCategory}>
      <div className="flex justify-between w-full border-b border-gray-180 p-3">
        <h1 className={styles.resultCategoryTitle}>
          Most Popular Used Cars for sale
        </h1>
        <div
          className="flex text-red-450 md:hidden"
          onClick={() => setshow(!show)}
        >
          <span className={styles.showText}>Show All</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${styles.showIcon} ${
              show ? styles.resultExpanded : ""
            }`}
          />
        </div>
      </div>
      <div className={`${styles.results} ${show ? styles.resultExpanded : ""}`}>
        {arr.map((item, index) => {
          return (
            <Link href="/" key={index}>
              <a className={styles.category}>
                <span>{item.car}</span>
                <span className={styles.categoryNumber}>{item.number}</span>
              </a>
            </Link>
          );
        })}
      </div>
      <button className={styles.toggleShow} onClick={() => setshow(!show)}>
        {!show ? "Show All" : "Hide"}
      </button>
    </section>
  );
};

export { ResultCategory };
