import Head from "next/head";
import { useRouter } from "next/router";
import { MoreDetailsComponent } from "../../../components";

const MoreDetails = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Head>
        <title> {category} Ad | Best Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MoreDetailsComponent />
    </>
  );
};

MoreDetails.getInitialProps = () => {
  return { layout: "fourthType" };
};

export default MoreDetails;
