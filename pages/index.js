import Head from 'next/head';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import { getProductsInCollection } from '../lib/shopify';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Jual Beli</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          name="description"
          content="Modern eCommerce focusing on Shopify, Next.js, TailwindCSS, GraphQL."
        />
        <meta property="og:title" content="Jual Beli" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jual-beli.vercel.app/" />
        <meta
          property="og:image"
          content="https://jual-beli.vercel.app/images/share.png"
        />
        <meta
          property="og:description"
          content="Modern eCommerce focusing on Shopify, Next.js, TailwindCSS, GraphQL."
        />
        <meta property="og:determiner" content="the" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Jual Beli" />
      </Head>
      <Hero />
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
