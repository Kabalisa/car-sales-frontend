import Modal from "react-modal";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/shareModal.module.scss";

const ShareModal = ({ ismodalOpen, handleToggleModal }) => {
  return (
    <Modal
      isOpen={ismodalOpen}
      overlayClassName={styles.overlay}
      className={styles.content}
      onRequestClose={() => handleToggleModal()}
    >
      <section className="flex flex-col">
        <div className="flex justify-center relative">
          <h1 className={styles.shareTile}>Share car</h1>
          <FontAwesomeIcon
            icon={faTimes}
            className={styles.timesIcon}
            onClick={() => handleToggleModal()}
          />
        </div>
        <div className="flex justify-center mt-5">
          <input
            readOnly
            className={styles.sharedUrl}
            value="https://tnydu.biz/DOywUh"
          />
          <button className="red-button p-3">Copy</button>
        </div>
        <div className="flex justify-center mt-7">
          <Link href="www.facebook.com">
            <a className={styles.socialLink}>
              <img
                alt="share with facebook"
                className={styles.socialIcon}
                src="/images/facebook.svg"
              />
            </a>
          </Link>
          <Link href="www.facebook.com">
            <a className={styles.socialLink}>
              <img
                alt="share with twitter"
                className={styles.socialIcon}
                src="/images/twitter.svg"
              />
            </a>
          </Link>
          <Link href="www.facebook.com">
            <a className={styles.socialLink}>
              <img
                alt="share with email"
                className={styles.socialIcon}
                src="/images/email.svg"
              />
            </a>
          </Link>
        </div>
      </section>
    </Modal>
  );
};

export { ShareModal };
