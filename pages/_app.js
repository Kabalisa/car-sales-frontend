import { Provider } from "react-redux";
import "../styles/globals.scss";
import { AppLayout } from "../components";
import store from "../redux/store";

const AppComponent = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <AppLayout layout={pageProps.layout}>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return { pageProps };
};

export default AppComponent;
