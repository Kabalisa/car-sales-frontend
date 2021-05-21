import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/sort.module.scss";

const Sort = () => {
  return (
    <div className="flex mb-0 md:mr-6 relative">
      <label className="flex self-center mr-2" htmlFor="order">
        <FontAwesomeIcon icon={faSortAmountDown} className={styles.sortIcon} />
        <span className={styles.sortText}>Sort</span>
      </label>
      <select name="order" id="order" className={styles.orderSelect}>
        <option value="volvo">Default</option>
        <option value="saab">Newest to oldest</option>
        <option value="mercedes">Oldest to Newest</option>
        <option value="audi">Price highest to lowest</option>
        <option value="audi">Price lowest to highest</option>
      </select>
    </div>
  );
};

export { Sort };
