"use client";

import React, { useEffect, useState } from "react";
import {
  ChartData,
  ChartOptions,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
} from "chart.js";
import Link from "next/link";
import Image from "next/image";
import { Line } from "react-chartjs-2";
import { CoinData } from "../interfaces";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController
);

const DisplayCoin = ({ data }: { data: CoinData }) => {
  const [chartData, setChartData] = useState<{
    prices: number[];
    labels: string[];
  }>();
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
  const dataForChart: ChartData<"line"> = {
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
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    locale: "de",
    interaction: {
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        displayColors: false,
        mode: "nearest",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          source: "auto",
          autoSkip: true,
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit: 5,
        },
      },
      y: {
        position: "right",
        ticks: {
          autoSkip: true,
          source: "auto",
        },
      },
    },
  };

  useEffect(() => {
    const fetchChartData = async () => {
      return fetch(
        `https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=${currency}&days=1`
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
          return { prices: price, labels: label };
        });
    };

    fetchChartData().then((res) => setChartData(res));
  }, [data.id]);
  return chartData ? (
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
        <div className="w-full h-40">
          <Line data={dataForChart} options={options} />
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
  ) : (
    <div className="flex justify-center items-center w-full rounded-lg p-6 shadow-xl bg-white flex-col relative ">
      <h1>Lade Daten...</h1>
    </div>
  );
};

export { DisplayCoin };
