import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/request';

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 3.0</title>
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await
    fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
      .then(res => res.json());

  return {
    props: {
      results: request.results
    }
  };
}