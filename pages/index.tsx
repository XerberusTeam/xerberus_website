import type { NextPage } from "next";
import Head from "next/head";
import AreaChart from "../components/charts/AreaChart";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Info from "../components/Info";
import LineChart from "../components/charts/LineChart";
import Navbar from "../components/Navbar";
import VerticalChart from "../components/charts/VerticalChart";
import PieChart from "../components/charts/PieChart";
import DoughnutChart from "../components/charts/DoughnutChart";
import PoleAreaChart from "../components/charts/PoleAreaChart";

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
      <VerticalChart />
      <AreaChart />
      <LineChart />
      <PieChart />
      <DoughnutChart />
      <PoleAreaChart />
    </>
  );
};

export default Home;

//test
