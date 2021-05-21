import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { ResultFilter } from "../../../components";
import styles from "./styles/filter.module.scss";

const Filter = () => {
  const [ismodalOpen, setIsmodalOpen] = useState(false);

  const handleToggleModlal = () => {
    setIsmodalOpen(!ismodalOpen);
  };

  return (
    <div className="md:hidden">
      <label className="flex" onClick={() => handleToggleModlal()}>
        <FontAwesomeIcon icon={faFilter} className={styles.filtertIcon} />
        <span className={styles.sortText}>Filters</span>
      </label>
      <Modal
        isOpen={ismodalOpen}
        overlayClassName={styles.overlay}
        className={styles.content}
      >
        <ResultFilter handleToggleModlal={handleToggleModlal} />
      </Modal>
    </div>
  );
};

export { Filter };
