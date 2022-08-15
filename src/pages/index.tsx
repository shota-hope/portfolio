import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Title } from "../components/Title";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Title />
      <Footer />
    </div>
  );
};

export default Home;
