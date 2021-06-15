import Head from "next/head";
import { useRouter } from "next/router";
import { PayComponent } from "../../../components";

const Pay = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Head>
        <title>Pay for {category} Ad | Best Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PayComponent />
    </>
  );
};

Pay.getInitialProps = () => {
  return { layout: "fourthType" };
};

export default Pay;
