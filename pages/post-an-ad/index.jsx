import Head from "next/head";
import { PostAnAdComponent } from "../../components";

const PostAnAd = () => {
  return (
    <>
      <Head>
        <title>Post An Ad | Best Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostAnAdComponent />
    </>
  );
};

PostAnAd.getInitialProps = () => {
  return { layout: "fourthType" };
};

export default PostAnAd;
