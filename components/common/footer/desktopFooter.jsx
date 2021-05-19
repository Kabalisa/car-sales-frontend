import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./styles/desktopFooter.module.scss";

const DesktopFooter = () => {
  const arr = [
    {
      column: "company",
      content: ["About us", "Advertising", "Terms of use", "Privacy policy"],
    },
    { column: "Get social", content: ["Facebook", "Instagram", "Twitter"] },
    { column: "Support", content: ["Help"] },
  ];

  return (
    <div className="hidden md:flex flex-col items-center bg-gray-380 w-full py-10">
      <div className={styles.footerColumnContent}>
        <ul className="flex justify-between">
          {arr.map((item, index) => {
            return (
              <li className="flex flex-col" key={index}>
                <h1 className={styles.footerColumnTitle}>{item.column}</h1>
                <ul className="flex flex-col">
                  {item.content.map((el, i) => {
                    return (
                      <li className={styles.footerColumnItem} key={i}>
                        <Link href="/">
                          <a>{el}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <div className={styles.copyright}>
          <FontAwesomeIcon
            icon={faCopyright}
            className={styles.copyrightIcon}
          />
          <span className={styles.copyrightText}>
            Cars sell 2021, All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export { DesktopFooter };
