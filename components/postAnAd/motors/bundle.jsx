import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { PostAdLayout } from "../../common";
import styles from "./styles/motors.module.scss";

const BundleComponent = () => {
  return (
    <PostAdLayout title="Select a bundle that is right for you">
      <section className="px-4 flex flex-col">
        <div className={styles.bundle}>
          <div className="flex justify-between">
            <span className={styles.title_text1}>Basic</span>
            <span className={styles.title_text2}>20000 RWF</span>
          </div>
          <div className={styles.paragraph}>Available to clients</div>
          <div className="flex justify-between mt-3">
            <div className={styles.benefits}>
              <FontAwesomeIcon
                className={`${styles.beforeIcon} mt-0.5`}
                icon={faTimes}
              />
              no featured days
            </div>
            <div className={styles.selectBundle}>
              <FontAwesomeIcon
                className={styles.arrowIcon}
                icon={faArrowRight}
              />
            </div>
          </div>
        </div>
        <div className={styles.bundle}>
          <div className="flex justify-between">
            <span className={styles.title_text1}>Featured</span>
            <span className={styles.title_text2}>40000 RWF</span>
          </div>
          <div className={styles.paragraph}>
            Available to clients with high exposure
          </div>
          <div className="flex justify-between mt-3">
            <div className={styles.benefits}>
              <FontAwesomeIcon
                className={`${styles.beforeIcon} mt-0.5 text-green-500`}
                icon={faCheck}
              />
              featured days
            </div>
            <div className={styles.selectBundle}>
              <FontAwesomeIcon
                className={styles.arrowIcon}
                icon={faArrowRight}
              />
            </div>
          </div>
        </div>
      </section>
    </PostAdLayout>
  );
};

export { BundleComponent };
