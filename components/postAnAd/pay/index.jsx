import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { PostAdLayout } from "../../common";
import styles from "./styles/pay.module.scss";

const PayComponent = () => {
  return (
    <PostAdLayout title="Complete Payment">
      <section className="px-4 flex flex-col">
        <div className={styles.titleCard}>
          <FontAwesomeIcon className={styles.cardIcon} icon={faCreditCard} />
          Credit/Debit Card
        </div>
        <ul className="mt-2">
          <li className="mt-4 flex flex-col">
            <label className={styles.label}>Name on Card</label>
            <input
              placeholder="Your Name"
              type="text"
              className={styles.input}
            />
          </li>
          <li className="mt-4 flex flex-col">
            <label className={styles.label}>Card Number</label>
            <input
              placeholder="0000-0000-0000-0000"
              maxLength="19"
              type="tel"
              className={styles.input}
            />
          </li>
          <li className="mt-4 flex">
            <div className="w-2/4 flex flex-col">
              <label className={styles.label}>Card Number</label>
              <div className="flex">
                <input
                  placeholder="mm"
                  maxLength="2"
                  type="tel"
                  className={styles.timeInput}
                />
                <span className={styles.separator}>/</span>
                <input
                  placeholder="yy"
                  maxLength="2"
                  type="tel"
                  className={styles.timeInput}
                />
              </div>
            </div>
            <div className="w-2/4 flex flex-col">
              <label className={styles.label}>CVV</label>
              <input
                placeholder="000"
                maxLength="3"
                type="tel"
                className={styles.input}
              />
            </div>
          </li>
        </ul>
        <button className={styles.payButton}>pay - 20000 rwf</button>
      </section>
    </PostAdLayout>
  );
};

export { PayComponent };
