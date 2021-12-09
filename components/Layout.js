import Footer from './Footer';
import Hero from './Hero';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <Hero />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
