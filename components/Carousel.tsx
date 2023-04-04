"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CoinData } from "../interfaces";

const Carousel = () => {
  const [coinList, setCoinList] = useState<CoinData[]>();
  const getCoins = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h&locale=de"
    ).then((response) => response.json());
    setCoinList(res);
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <div className="w-full flex items-center flex-row bg-white h-10 block overflow-hidden mb-4 shadow-xl">
      <ul className="flex gap-10 carousel w-max">
        {coinList ? (
          coinList.map((coin: CoinData) => (
            <li
              className="w-fit flex flex-row items-center justify-between gap-1 whitespace-nowrap"
              key={coin.id}
            >
              <p>{coin.market_cap_rank}</p>
              <Image
                src={coin.image}
                alt={coin.name}
                width={25}
                height={25}
                loading="eager"
              />
              <p className="w-fit">{coin.name}</p>
            </li>
          ))
        ) : (
          <li />
        )}
      </ul>
    </div>
  );
};

export { Carousel };