import Head from 'next/head';
import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Jual Beli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
}
