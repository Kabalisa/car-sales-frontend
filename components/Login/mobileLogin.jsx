import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { LoginComponent } from "../common";
import styles from "./styles/mobileLogin.module.scss";

const Mobilelogin = () => {
  const [view, setView] = useState({
    options: true,
    login: false,
    choose: false,
    businessSignup: false,
  });

  const router = useRouter();

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
    <main>
      <FontAwesomeIcon
        icon={faLongArrowAltLeft}
        className={styles.backIcon}
        onClick={() => {
          if (view.options) {
            router.back();
          } else {
            handleBack();
          }
        }}
      />
      <LoginComponent view={view} setView={setView} />
    </main>
  );
};

export { Mobilelogin };
