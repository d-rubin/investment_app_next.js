"use client";

import React from "react";
import { Header } from "../../components/Header";
import { CoinArea } from "../../components/CoinArea";
import { Carousel } from "../../components/Carousel";

const HomePage = () => {
  const handleClick = (id: string) => {
    console.log(id);
  };

  return (
    <>
      <Header onClick={() => handleClick} />
      <Carousel />
      <CoinArea />
    </>
  );
};

export default HomePage;
