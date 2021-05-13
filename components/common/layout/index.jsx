import {Header} from "../header";
import {Footer} from "../footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { AppLayout };
