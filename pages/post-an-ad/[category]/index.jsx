import Head from "next/head";
import { useRouter } from "next/router";
import { Motors } from "../../../components";

const AdCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Head>
        <title> {category} Ad | Best Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Motors category={category} />
    </>
  );
};

AdCategory.getInitialProps = () => {
  return { layout: "fourthType" };
};

export default AdCategory;
