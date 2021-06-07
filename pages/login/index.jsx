import Head from "next/head";
import { Mobilelogin } from "../../components";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | Best Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Mobilelogin />
    </>
  );
};

Login.getInitialProps = () => {
  return { layout: "thirdType" };
};

export default Login;
