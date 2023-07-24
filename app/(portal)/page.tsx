import React from "react";
import WalletConnect from "@/components/WalletConnect";
import { getCoinList } from "@/helper";
import Coin from "@/components/Coin";
import CustomConnectButton from "@/components/CustomConnectButton";

export default async function RootPage() {
  // const coinList = await getCoinList();

  return (
    <main className="relative w-full h-full pt-24 px-4 max-w-screen-lg mx-auto">
      <div className="w-full py-4 shadow-xl z-10 bg-black fixed top-0 max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-semibold ">Overview</h1>
      </div>
      {/* <WalletConnect /> */}
      <CustomConnectButton />
      <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 w-full h-fit justify-items-center">
        {/* {coinList?.map((coin) => { */}
        {/*  return <Coin key={coin.id} coin={coin} />; */}
        {/* })} */}
      </section>
    </main>
  );
}
