import styles from "./styles/footer.module.scss";
import { MobileFooter } from "./mobileFooter";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <MobileFooter />
    </footer>
  );
};

export { Footer };
