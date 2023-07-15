"use client";

import React, { useEffect, useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { getCoinList } from "../helper";
import { CoinData } from "../interfaces";
import upImage from "../img/arrowUp.svg";
import downImage from "../img/arrowDown.svg";

export default function CoinList() {
  const [coinList, setCoinList] = useState<CoinData[]>();

  useEffect(() => {
    getCoinList().then((res) => {
      console.log(res);
      setCoinList(res);
    });
  }, []);

  return coinList?.map((coin) => {
    const positive = coin.price_change_percentage_24h > 0;

    const sparklinestyle = {
      position: "absolute",
      left: "0",
      top: "30%",
      width: "100%",
      height: "35%",
      fill: positive ? "#61c0b0" : "#db8d3f",
    };

    return (
      <article
        key={uuidv4()}
        className="w-full h-40 bg-gray-800 rounded-2xl p-2 flex flex-col justify-between relative"
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Sparklines style={sparklinestyle} data={coin.sparkline_in_7d.price}>
          <SparklinesLine color={positive ? "#61c0b0" : "#db8d3f"} />
        </Sparklines>
        <div className="flex justify-between w-full">
          <p className="text-lg font-semibold">{coin.symbol.toUpperCase()}</p>
          <Image src={coin.image} alt={coin.name} width={30} height={30} />
        </div>
        <div>
          <p className="ml-1.5 text-lg font-bold">
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(coin.current_price)}
          </p>
          <span
            className={`flex-row flex gap-0.5 whitespace-nowrap items-center ${
              positive ? "text-[--color-positive]" : "text-[--color-negative]"
            }`}
          >
            <Image
              src={positive ? upImage : downImage}
              alt={positive ? "positive" : "negative"}
              width={24}
              height={24}
            />
            <p className="font-semibold text-xs">
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(coin.price_change_24h)}
            </p>
            <p className="text-xs">
              ({coin.price_change_percentage_24h.toFixed(2)} %)
            </p>
          </span>
        </div>
      </article>
    );
  });
}
