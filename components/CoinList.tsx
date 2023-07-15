"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { getCoinList } from "../helper";
import { CoinData } from "../interfaces";

export default function CoinList() {
  const [coinList, setCoinList] = useState<CoinData[]>(
    Array.from({ length: 8 })
  );
  //
  // useEffect(() => {
  //   getCoinList().then((res) => setCoinList(res));
  // }, []);

  return coinList?.map((coin) => {
    return (
      <article
        key={uuidv4()}
        className="w-full h-40 bg-gray-500 rounded-2xl p-2 flex flex-col justify-between"
      >
        <span className="flex justify-between w-full">
          {/* <p>{coin.symbol.toUpperCase()}</p> */}
          <Image
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
            alt="Ethereum"
            width={30}
            height={30}
          />
        </span>
        <span>
          <p className="text-xl font-bold">
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(3939.93)}
          </p>
        </span>
      </article>
    );
  });
}
