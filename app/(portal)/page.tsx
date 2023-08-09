"use client";

import React, { Suspense, useState } from "react";
import WalletConnect from "@/components/WalletConnect";
import { getCoinList } from "@/helper";
import Coin from "@/components/Coin";
import { CoinData } from "@/interfaces";
import { v4 as uuid } from "uuid";

export default function RootPage() {
  const [coinList, setCoinList] = useState<CoinData[] | undefined>();
  getCoinList().then((res) => {
    setCoinList(res);
  });

  const loadingItems = (
    <main className="w-full h-full pt-24">
      <h1 className="w-full max-w-screen-xl mx-auto h-20 pl-4 pt-4 text-4xl font-semibold fixed bg-black top-0 shadow-xl">
        Overview
      </h1>
      <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 w-full h-fit justify-items-center">
        {Array.from({ length: 50 }).map(() => {
          return (
            <article
              key={uuid()}
              className="animate-pulse bg-gray-200 w-full h-40 rounded-2xl p-2 flex flex-col justify-between relative"
            />
          );
        })}
      </section>
    </main>
  );

  return (
    <Suspense fallback={loadingItems}>
      <main className="relative w-full h-full pt-24 px-4 max-w-screen-lg mx-auto">
        <div className="w-full py-4 shadow-xl z-10 bg-black fixed top-0 max-w-screen-lg mx-auto">
          <h1 className="text-4xl font-semibold ">Overview</h1>
        </div>
        <WalletConnect />
        {/* <CustomConnectButton /> */}
        <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 w-full h-fit justify-items-center">
          {coinList?.map((coin) => {
            return <Coin key={coin.id} coin={coin} />;
          })}
        </section>
      </main>
    </Suspense>
  );
}
