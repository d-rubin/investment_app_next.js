"use client";

import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";
import { CoinData } from "../../interfaces";
import { CoinArea } from "@/components/CoinArea";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [coinList, setCoinList] = useState<CoinData[]>();
  const currency = "eur";
  const count = 50;
  const locale = "de";

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${count}&page=1&sparkline=true&price_change_percentage=24h&locale=${locale}`
    ).then(async (res) => {
      const json = await res.json();
      console.log(json);
      setCoinList(json);
    });
  }, []);

  return (
    <>
      <Header />
      {coinList ? <Carousel list={coinList} /> : null}
      <CoinArea list={coinList}>{children}</CoinArea>
    </>
  );
};

export default HomeLayout;
