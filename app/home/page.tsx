import React from "react";
import { Header } from "../../components/Header";
import { CoinArea } from "../../components/CoinArea";
import { Carousel } from "../../components/Carousel";

const Home = () => {
  // const getUserData = async () => {
  //   const res = await fetch("/userData", {
  //     mode: "no-cors",
  //     method: "GET",
  //   });
  //   const json = await res.json();
  //   console.log(json);
  // };

  return (
    <>
      <Header />
      <Carousel />
      <CoinArea />
    </>
  );
};

export default Home;
