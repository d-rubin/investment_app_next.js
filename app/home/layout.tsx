"use client";

import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";
import { CoinData } from "../../interfaces";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [coinList, setCoinList] = useState<CoinData[]>();
  const currency = "eur";
  const count = 50;
  const locale = "de";

  useEffect(() => {
    try {
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${count}&page=1&sparkline=true&price_change_percentage=24h&locale=${locale}`
      ).then(async (res) => {
        const json = await res.json();
        console.log(json);
        setCoinList(json);
      });
    } catch (error) {
      console.error("Das waren zu viele Anfragen ", error);
    }
  }, []);

  return (
    <>
      <Header />
      {coinList ? <Carousel /> : null}
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-4 mb-4">
        {children}
      </div>
    </>
  );
};

export default HomeLayout;
