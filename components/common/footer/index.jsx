import styles from "./styles/footer.module.scss";
import { MobileFooter } from "./mobileFooter";
import { DesktopFooter } from "./desktopFooter";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <MobileFooter />
      <DesktopFooter />
    </footer>
  );
};

export { Footer };
