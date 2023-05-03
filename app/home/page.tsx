"use client";

import React, { useEffect, useState } from "react";
import { DisplayCoin } from "../../components/DisplayCoin";
import { CoinData } from "../../interfaces";

const HomePage = () => {
  const [coinList, setCoinList] = useState<CoinData[]>();
  const currency = "eur";
  const count = 10;
  const locale = "de";

  useEffect(() => {
    try {
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${count}&page=1&sparkline=true&price_change_percentage=24h&locale=${locale}`
      ).then(async (res) => {
        const json = await res.json();
        setCoinList(json);
      });
    } catch (e) {
      console.error("Das waren zu viele Anfragen ", e);
    }
  }, []);

  return (
    coinList &&
    coinList.map((coin) => <DisplayCoin data={coin} key={coin.id} />)
  );
};

export default HomePage;
