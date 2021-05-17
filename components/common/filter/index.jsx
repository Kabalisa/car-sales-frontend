import styles from "./styles/filter.module.scss";

const Filter = () => {
  return (
    <div className="md:border-b">
      <div className={styles.filter}>
        <div className={`${styles.filterItem} ${styles.active}`}>Used Cars</div>
        <div className={styles.filterItem}>New Cars</div>
        <div className={styles.filterItem}>Motorcycles</div>
        <div className={styles.filterItem}>Heavy vehicles</div>
        <div className={styles.filterItem}>Auto accessories & parts</div>
        <div className={styles.filterItem}>Vehicle leasing</div>
      </div>
    </div>
  );
};

export { Filter };
