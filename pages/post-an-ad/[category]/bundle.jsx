import Head from "next/head";
import { useRouter } from "next/router";
import { BundleComponent } from "../../../components";

const Bundle = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Head>
        <title>{category} Ad Bundle | Best Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BundleComponent />
    </>
  );
};

Bundle.getInitialProps = () => {
  return { layout: "fourthType" };
};

export default Bundle;
