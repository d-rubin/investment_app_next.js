import React from "react";
import Coin from "../../components/Coin";
import { getCoinList } from "../../helper";

export default async function RootPage() {
  const coinList = await getCoinList();

  return (
    <main className="relative w-full h-full pt-24 px-4 max-w-screen-lg mx-auto">
      <div className="flex flex-row justify-between items-center py-4 shadow-xl z-10 bg-black fixed w-full pr-8 top-0 max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-semibold ">Overview</h1>
        <WalletConnect />
      </div>
      <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 w-full h-fit justify-items-center">
        {coinList.map((coin) => {
          return <Coin coin={coin} />;
        })}
      </section>
    </main>
  );
}
