import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@components/Layout";

const DynamicProducts = dynamic(() => import("@modules/Products"));

const ProductsPage = () => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <DynamicProducts />
      </Layout>
    </>
  );
};

export default ProductsPage;