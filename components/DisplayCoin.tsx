"use client";

import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Link from "next/link";
import Image from "next/image";
import { CoinData } from "../interfaces";

const DisplayCoin = ({ data }: { data: CoinData }) => {
  const currency = "eur";
  const locals = "de-DE";
  const currencyOptions = { style: "currency", currency: `${currency}` };
  const currentPrice = new Intl.NumberFormat(locals, currencyOptions).format(
    data.current_price
  );
  const priceChange24hEur = new Intl.NumberFormat(
    locals,
    currencyOptions
  ).format(data.price_change_24h);
  const priceChange24hPercentage =
    data.price_change_percentage_24h_in_currency.toFixed(2);

  return (
    <div className="flex justify-center w-full rounded-lg p-6 shadow-xl bg-white flex-col relative ">
      {/* <Image */}
      {/*  src={close} */}
      {/*  className="absolute right-0 top-0 mr-6 mt-6" */}
      {/*  width={32} */}
      {/*  height={32} */}
      {/*  alt="Close" */}
      {/* /> */}
      <h2 className="mb-2 flex text-2xl font-bold leading-tight justify-center cursor-default">
        {data.name}{" "}
        <Image
          src={data.image}
          alt={data.name}
          width={25}
          height={25}
          className="ml-2"
        />
      </h2>
      <div className="flex flex-col">
        <h3 className="text-center">Letzte 7 Tage</h3>
        <div className="w-full h-40">
          <Sparklines data={data.sparkline_in_7d.price} width={100} height={25}>
            <SparklinesLine color="#3396FF" />
          </Sparklines>
        </div>
        <span className="w-full text-center cursor-default">
          <p>Aktueller Preis:</p>
          <p>{currentPrice}</p>
          <p>Preisänderung 24h:</p>
          <p>
            {priceChange24hEur} | {priceChange24hPercentage} %
          </p>
        </span>
      </div>
      <Link href={`home/coinDetails/${data.id}`} className="text-center">
        <button
          type="button"
          className="cursor-pointer mt-2 rounded-lg bg-blue-400 p-2 uppercase
                        text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600
                        hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600
                        focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none
                        focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-ripple-color="light"
        >
          Details
        </button>
      </Link>
    </div>
  );
  //   <div className="flex justify-center items-center w-full rounded-lg p-6 shadow-xl bg-white flex-col relative ">
  //     <h1>Lade Daten...</h1>
  //   </div>
  // );
};

export { DisplayCoin };
