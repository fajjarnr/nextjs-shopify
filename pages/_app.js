import { useRouter } from 'next/router';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import ShopProvider from '../context/ShopProvider';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider>
  );
}

export default MyApp;
