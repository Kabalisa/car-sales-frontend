import "../styles/globals.css";
import { AppLayout } from "../components";

const AppComponent = ({ Component, pageProps }) => {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
};

export default AppComponent;
