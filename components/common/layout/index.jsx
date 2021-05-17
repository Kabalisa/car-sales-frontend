import { Header } from "../header";
import { Footer } from "../footer";
import { Filter } from "../filter";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Filter />
      {children}
      <Footer />
    </>
  );
};

export { AppLayout };
