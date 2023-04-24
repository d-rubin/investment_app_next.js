"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import back from "../../../../img/back.png";
import { MarketData } from "../../../../interfaces";
import { CoinChart } from "../../../../components/Chart";

const CoinDetails = ({ params }: { params: { id: string } }) => {
  const [marketData, setMarketData] = useState<MarketData>();
  const currency = "eur";
  const locals = "de-DE";
  const currencyOptions = { style: "currency", currency: `${currency}` };
  const allTimeHigh =
    marketData &&
    new Intl.NumberFormat(locals, currencyOptions).format(
      marketData.market_data.ath.eur
    );
  const allTimeLow =
    marketData &&
    new Intl.NumberFormat(locals, currencyOptions).format(
      marketData.market_data.atl.eur
    );
  const percentage =
    marketData &&
    (marketData.market_data.atl.eur / marketData.market_data.ath.eur) * 100;

  const fetchMarketData = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    const newData = await response.json();
    setMarketData(newData);
  };

  useEffect(() => {
    fetchMarketData();
  });

  return (
    marketData && (
      <>
        <div className="flex justify-between items-center px-4 mb-4">
          <div className="flex items-center justify-start gap-2">
            <Image
              src={marketData.image.small}
              alt={marketData.name}
              width={32}
              height={32}
            />
            <h2>{marketData.name}</h2>
          </div>
          <div className="flex justify-end items-center gap-2">
            <Link href="/home">
              <Image
                className="cursor-pointer"
                src={back}
                width={32}
                height={32}
                alt="Back"
              />
            </Link>
          </div>
        </div>

        <div className="px-4 ">
          {marketData && <CoinChart id={params.id} />}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-center">
            ATL:
            <br />
            {allTimeLow}
          </p>
          <div className="relative pt-1 w-full px-4">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div
                style={{ width: `${percentage}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400"
              />
            </div>
          </div>
          <p className="text-center">
            ATH:
            <br />
            {allTimeHigh}
          </p>
        </div>
      </>
    )
  );
};

export default CoinDetails;
