import Head from "next/head";
import { useRouter } from "next/router";
import { CarListComponent } from "../../../components";

const CarList = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Head>
        <title>{category} | Best Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CarListComponent />
    </>
  );
};

export default CarList;
