import "../styles/globals.scss";
import { AppLayout } from "../components";

const AppComponent = ({ Component, pageProps }) => {
  return (
    <AppLayout layout={pageProps.layout}>
      <Component {...pageProps} />
    </AppLayout>
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
