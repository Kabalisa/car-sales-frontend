import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/resultFilter.module.scss";

const ResultFilter = ({ handleToggleModlal }) => {
  return (
    <form className="w-full h-full">
      <div className={styles.fiterHearder}>
        <FontAwesomeIcon
          icon={faTimes}
          className={styles.timesIcon}
          onClick={() => handleToggleModlal()}
        />
        <h1 className={styles.headerTitle}>Filters</h1>
        <span className={styles.headerClear}>Clear</span>
      </div>
      <div className={styles.filterBody}>
        {["1", "2", "3", "4"].map((item, index) => {
          return (
            <select
              name="order"
              id="order"
              className="app-select w-full p-3 md:p-2 mb-6"
              key={index}
            >
              <option value="volvo">Default</option>
              <option value="saab">Newest to oldest</option>
            </select>
          );
        })}
        <div className="flex flex-col mb-6">
          <span className={styles.filterSectionTitle}>Price (RWF)</span>
          <div className="flex justify-between">
            <input placeholder="price from" className="app-input w-5/12 p-2" />
            <input placeholder="price to" className="app-input w-5/12 p-2" />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <span className={styles.filterSectionTitle}>Kilometers</span>
          <div className="flex justify-between">
            <input placeholder="KM from" className="app-input w-5/12 p-2" />
            <input placeholder="KM to" className="app-input w-5/12 p-2" />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <span className={styles.filterSectionTitle}>Year</span>
          <div className="flex justify-between">
            <select name="order" id="order" className="app-select w-5/12 p-3 md:p-2">
              <option value="volvo">Default</option>
              <option value="saab">Newest to oldest</option>
            </select>
            <select name="order" id="order" className="app-select w-5/12 p-3 md:p-2">
              <option value="volvo">Default</option>
              <option value="saab">Newest to oldest</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <span className={styles.filterSectionTitle}>Seller type</span>
          <select name="order" id="order" className="app-select w-full p-3 md:p-2">
            <option value="volvo">Default</option>
            <option value="saab">Newest to oldest</option>
          </select>
        </div>
        <div className="flex flex-col mb-6">
          <span className={styles.filterSectionTitle}>Badges</span>
          <ul className="flex flex-col">
            <li>
              <input type="checkbox" id="badges1" name="badges1" value="1" className="mr-2" />
              <label htmlFor="badges1">Full service history</label>
            </li>
            <li>
              <input type="checkbox" id="badges2" name="badges2" value="2" className="mr-2" />
              <label htmlFor="badges2">Urgent</label>
            </li>
            <li>
              <input type="checkbox" id="badges3" name="badges3" value="3" className="mr-2" />
              <label htmlFor="badges3">Warranty</label>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mb-20 md:mb-6">
          <span className={styles.filterSectionTitle}>Keyword</span>
          <input placeholder="keyword" className="app-input w-full p-2" />
        </div>
        <button className="red-button p-3 w-full mb-6 self-center hidden md:block">
          Search
        </button>
      </div>
      <div className={styles.filterFooter}>
        <button className="red-button p-3 w-10/12">Search</button>
      </div>
    </form>
  );
};

export { ResultFilter };
