import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';

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
      <Resultsts />
    </div>
  );
}
