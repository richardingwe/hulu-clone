import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 3.0</title>
      </Head>

      {/* header */}
      <Header />

      {/* nav */}
      <Nav />

      {/* results */}
    </div>
  );
}
