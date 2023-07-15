import React from "react";
import Image from "next/image";
import { getCoinList } from "../helper";

export default async function CoinList() {
  // const coinList = await getCoinList();

  return Array.from({ length: 10 }).map(() => {
    return (
      <article className="w-full h-32 bg-gray-500 rounded-2xl p-4">
        <span className="flex justify-between w-full">
          <p>ETH</p>
          <Image src="" alt="Ethereum" width={16} />
        </span>
      </article>
    );
  });
}
