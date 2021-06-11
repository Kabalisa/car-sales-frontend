import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { PostAdLayout } from "../common";
import styles from "./styles/postAnAd.module.scss";

const PostAnAdComponent = () => {
  const categories = [
    { name: "Cars", url: "/post-an-ad/car" },
    { name: "Motorcyles", url: "/post-an-ad/Motorcyle" },
    { name: "Car Accessories & Parts", url: "/post-an-ad/car" },
    { name: "MotorCyle Accessories & Parts", url: "/post-an-ad/Motorcyle" },
    { name: "Car leasing", url: "/post-an-ad/car" },
  ];

  return (
    <PostAdLayout title="Choose the right category for your ad">
      <ul className="flex flex-col px-4 border-t border-gray-230 ">
        {categories.map((item, index) => {
          return (
            <li className="py-4 border-b border-gray-230" key={index}>
              <Link href={item.url}>
                <a className={styles.category}>
                  <span className={styles.category__title}>{item.name}</span>
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
    </PostAdLayout>
  );
};

export { PostAnAdComponent };
