import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/filter.module.scss";

const Filter = () => {
  return (
    <div className="md:hidden">
      <label className="flex">
        <FontAwesomeIcon icon={faFilter} className={styles.filtertIcon} />
        <span className={styles.sortText}>Filters</span>
      </label>
    </div>
  );
};

export { Filter };
