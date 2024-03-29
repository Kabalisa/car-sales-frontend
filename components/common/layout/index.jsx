import Header from "../header";
import { Footer } from "../footer";
import { Filter } from "../filter";

const AppLayout = ({ children, layout }) => {
  return (
    <>
      <Header layout={layout} />
      <Filter layout={layout} />
      {children}
      <Footer layout={layout} />
    </>
  );
};

export { AppLayout };
