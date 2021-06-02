import Head from "next/head";
import { useRouter } from "next/router";
import { CarListComponent } from "../../../components";

const CarList = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <>
      <Head>
        <title>{type} | Best Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CarListComponent />
    </>
  );
};

export default CarList;
