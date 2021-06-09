import styles from "./styles/footer.module.scss";
import { MobileFooter } from "./mobileFooter";
import { DesktopFooter } from "./desktopFooter";

const Footer = ({ layout }) => {
  return (
    <footer className={`${styles.footer} ${layout ? styles.footerHidden : ""}`}>
      <MobileFooter />
      <DesktopFooter />
    </footer>
  );
};

export { Footer };
