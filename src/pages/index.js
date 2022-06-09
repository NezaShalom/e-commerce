import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home() {
  return (
    <div>
      <Head>
        <title>E-commerce</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed />
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();

    return {
      props: {
        products,
      },
    };
  };