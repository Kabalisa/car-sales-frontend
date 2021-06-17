import { useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import * as loginActions from "../../redux/actions/loginActions";
import { LoginComponent } from "../common";
import styles from "./styles/desktopLogin.module.scss";

const DesktopLogin = ({ modalOpen, actions }) => {
  const [view, setView] = useState({
    options: true,
    login: false,
    choose: false,
    businessSignup: false,
  });

  const handleBack = () => {
    if (view.login || view.choose) {
      setView({
        ...view,
        options: true,
        login: false,
      });
    } else {
      setView({
        ...view,
        businessSignup: false,
        choose: true,
      });
    }
  };

  return (
    <Modal
      isOpen={modalOpen}
      overlayClassName={styles.overlay}
      className={styles.content}
      onRequestClose={() => actions.toggleLoginModal()}
    >
      <section className="h-full">
        <div className="flex justify-between">
          <FontAwesomeIcon
            icon={faLongArrowAltLeft}
            className={`${view.options ? "hidden" : "block"} ${
              styles.backIcon
            }`}
            onClick={() => handleBack()}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={styles.timesIcon}
            onClick={() => actions.toggleLoginModal()}
          />
        </div>
        <LoginComponent view={view} setView={setView} />
      </section>
    </Modal>
  );
};

const mapStateToProps = ({ loginReducer }) => ({
  modalOpen: loginReducer.modalOpen,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(loginActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DesktopLogin);
