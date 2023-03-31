"use client";

import React, { useEffect, useState } from "react";
import { ChartData } from "chart.js";
import Link from "next/link";
import Image from "next/image";
import close from "../img/close.png";
import { CoinChart } from "./Chart";
import { MarketData } from "../interfaces";

interface DisplayCoinProps {
  id: string;
}

const DisplayCoin: React.FC<DisplayCoinProps> = ({ id }) => {
  const [chartData, setChartData] = useState<{
    prices: number[];
    labels: string[];
  }>();
  const [marketData, setMarketData] = useState<MarketData>();
  const currency = "eur";
  const locals = "de-DE";
  const currencyOptions = { style: "currency", currency: `${currency}` };
  const currentPrice =
    marketData &&
    new Intl.NumberFormat(locals, currencyOptions).format(
      marketData.market_data.current_price.eur
    );
  const priceChange24hEur =
    marketData &&
    new Intl.NumberFormat(locals, currencyOptions).format(
      marketData.market_data.price_change_24h_in_currency.eur
    );
  const priceChange24hPercentage =
    marketData && marketData.market_data.price_change_percentage_24h.toFixed(2);
  const data: ChartData<"line"> = {
    labels: chartData ? chartData.labels : [],
    datasets: [
      {
        data: chartData ? chartData.prices : [],
        fill: false,
        borderColor: "#76A9FA",
        backgroundColor: "#76A9FA",
        pointHitRadius: 3,
        pointRadius: 0,
        hoverBorderWidth: 5,
      },
    ],
  };

  const closeCard = () => {
    fetch("userData", { body: id, method: "DELETE" });
  };
  const fetchMarketData = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`;
    // const url = "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false";
    const response = await fetch(url);
    const dataList = await response.json();
    setMarketData(dataList);
  };
  const fetchChartData = async () => {
    await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=1`
    )
      .then((res) => res.json())
      .then((res) => {
        const price: number[] = [];
        const label: string[] = [];
        for (let i = 0; i < res.prices.length; i += 1) {
          if (i % 3 === 0) {
            price.push(res.prices[i][1]);
            label.push(
              new Date(res.prices[i][0]).toLocaleTimeString("de-DE", {
                hour: "2-digit",
                minute: "2-digit",
              })
            );
          }
        }
        setChartData({ prices: price, labels: label });
      });
  };
  useEffect(() => {
    fetchMarketData();
    fetchChartData();
  }, []);
  return marketData && chartData ? (
    <div className="flex justify-center w-full rounded-lg p-6 shadow-xl bg-white flex-col relative ">
      <Image
        src={close}
        className="absolute right-0 top-0 mr-6 mt-6"
        width={32}
        height={32}
        onClick={closeCard}
        alt="Close"
      />
      <h2 className="mb-2 flex text-2xl font-bold leading-tight justify-center cursor-default">
        {marketData.name}{" "}
        <Image
          src={marketData.image.small}
          alt={marketData.name}
          width={25}
          height={25}
          className="ml-2"
        />
      </h2>
      <div className="flex flex-col">
        <div className="w-full h-40">
          <CoinChart data={data} yTicksLimit={10} xTicksLimit={4} />
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
      <Link href={`/coinDetails/${id}`} className="text-center">
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
  ) : (
    <h1>Lade Daten...</h1>
  );
};

export { DisplayCoin };
