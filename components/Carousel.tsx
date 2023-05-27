"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CoinData } from "../interfaces";

const Carousel = () => {
  const [coinList, setCoinList] = useState<CoinData[]>();
  const currency = "eur";
  const count = 50;
  const locale = "de";

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${count}&page=1&sparkline=true&price_change_percentage=24h&locale=${locale}`
    ).then(async (res) => {
      const json = await res.json();
      setCoinList(json);
    });
  }, []);

  return (
    <div className="w-full flex items-center flex-row bg-white h-10 overflow-hidden mb-4 shadow-xl">
      <ul className="flex gap-10 carousel w-max">
        {coinList &&
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
              <p
                style={{
                  color: `${
                    coin.price_change_percentage_24h >= 0 ? "green" : "red"
                  }`,
                }}
              >
                {coin.price_change_percentage_24h.toFixed(2)} %
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { Carousel };
