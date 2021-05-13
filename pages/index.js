import Head from "next/head";
import { LandingPageComponent } from "../components";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPageComponent />
    </>
  );
};

export default LandingPage;
