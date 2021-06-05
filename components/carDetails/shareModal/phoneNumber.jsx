import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/phoneNumber.module.scss";

const PhoneModal = ({ isPhoneModalOpen, handleTogglePhoneModal }) => {
  return (
    <Modal
      isOpen={isPhoneModalOpen}
      overlayClassName={styles.overlay}
      className={styles.content}
      onRequestClose={() => handleTogglePhoneModal()}
    >
      <section className="flex flex-col">
        <div className="flex justify-end relative">
          <FontAwesomeIcon
            icon={faTimes}
            className={styles.timesIcon}
            onClick={() => handleTogglePhoneModal()}
          />
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex">
            <FontAwesomeIcon className={styles.userIcon} icon={faUserCircle} />
            <div className="flex flex-col">
              <span className="thin-text-3">posted by</span>
              <h1 className="featured-title-02">Akagera Motors</h1>
            </div>
          </div>
          <span className="thin-text-3">Seller</span>
        </div>
        <button className="red-button w-full p-4 mt-4">+250785382213</button>
        <div className={styles.tips}>
          <h1>Tips for a safer transaction:</h1>
          <ul>
            <li>Check the condition of the item</li>
            <li>Meet the seller in person</li>
            <li>Don’t wire money online</li>
          </ul>
        </div>
      </section>
    </Modal>
  );
};

export { PhoneModal };
