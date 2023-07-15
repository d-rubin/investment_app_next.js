import React from "react";
import CoinList from "../../components/CoinList";

export default function RootPage() {
  return (
    <main className="w-full h-full pt-24">
      <h1 className="w-full max-w-screen-xl mx-auto h-20 pl-4 pt-4 text-4xl font-semibold fixed bg-black top-0 shadow-xl">
        Overview
      </h1>
      <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 w-full h-fit justify-items-center">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <CoinList />
      </section>
    </main>
  );
}
