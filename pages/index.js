import Head from 'next/head';
import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';

export default function Home({ products }) {
  console.log(products);
  return (
    <div>
      <Head>
        <title>Jual Beli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
}
