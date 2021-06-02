import Head from "next/head";
import { useRouter } from "next/router";
import { CarDetailsComponent } from "../../../components";

const CarDetails = () => {
  const router = useRouter();
  const { carName } = router.query;

  return (
    <>
      <Head>
        <title>{carName} | Best Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CarDetailsComponent />
    </>
  );
};

CarDetails.getInitialProps = () => {
  return { layout: "secondType" };
};

export default CarDetails;
