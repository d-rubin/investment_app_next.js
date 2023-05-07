"use client";

import React, { useEffect, useState } from "react";
import { DisplayCoin } from "../../components/DisplayCoin";
import { CoinData } from "../../interfaces";

const HomePage = () => {
  const [coinList, setCoinList] = useState<CoinData[]>();
  const currency = "eur";
  const count = 50;

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${count}&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y&locale=de`
    ).then(async (res) => {
      if (res.status !== 200) {
        console.log("Das waren wsl zu viele Anfragen: ", res.json());
      } else {
        const json = await res.json();
        setCoinList(json);
      }
    });
  }, []);

  return (
    coinList &&
    coinList.map((coin) => <DisplayCoin data={coin} key={coin.id} />)
  );
};

export default HomePage;
