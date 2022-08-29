import type { NextPage } from "next";
import Head from "next/head";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Xerberus</title>
        <meta name="description" content="Xerberus.io website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <Hero />
      <Info />
      <Form />
    </>
  );
};

export default Home;

//test
