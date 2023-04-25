"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  LineController,
  ChartDataset,
  ChartData,
} from "chart.js";
import { Search } from "./Search";

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

interface ChartResponse {
  prices: [[number, number]];
  market_caps: [[number, number]];
  total_volumes: [[number, number]];
}

function CoinChart({ id }: { id: string }) {
  const [ids, setIds] = useState<string[]>([id]);
  const [days, setDays] = useState<number>(7);
  const [data, setData] = useState<ChartData<"line">>();
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    locale: "de",
    interaction: {
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
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
          maxTicksLimit: 8,
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

  const handleClick = (number: number) => {
    setDays(number);
  };

  const handleSearchClick = (coin: string) => {
    setIds([...ids, coin]);
  };

  useEffect(() => {
    const fetchChartData = async () => {
      let labels: string[] = [];
      const chartDataSets: ChartDataset<"line">[] = [];
      const colors: string[] = [
        "blue",
        "green",
        "red",
        "yellow",
        "purple",
        "black",
        "lightgrey",
      ];

      for (let i = 0; i < ids.length; i += 1) {
        const color = colors[i];
        let k: number;
        // eslint-disable-next-line no-await-in-loop
        const pointData: ChartResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/${ids[i]}/market_chart?vs_currency=eur&days=${days}`
        ).then((res) => res.json());

        const prices: number[] = [];
        labels = [];

        for (k = 0; k < pointData.prices.length; k += 1) {
          prices.push(pointData.prices[k][1]);
          labels.push(new Date(pointData.prices[k][0]).toLocaleDateString());
        }

        chartDataSets.push({
          data: prices,
          label: ids[i],
          fill: false,
          pointBackgroundColor: color,
          borderColor: color,
          pointHitRadius: 3,
          pointRadius: 0,
          hoverBorderWidth: 5,
        });
      }

      return { labels, datasets: chartDataSets };
    };

    fetchChartData().then((result) => setData(result));
  }, [days, ids]);

  return (
    <div className="flex flex-col items-center gap-2">
      <Search onClick={(coin) => handleSearchClick(coin)} />
      <div className="flex flex-wrap justify-center w-full gap-2">
        <button
          onClick={() => handleClick(1825)}
          className="row bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2
                      rounded-lg shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          5 Jahre
        </button>
        <button
          onClick={() => handleClick(1095)}
          className="row bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2
                      rounded-lg shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          3 Jahre
        </button>
        <button
          onClick={() => handleClick(365)}
          className="row bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2
                      rounded-lg shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          1 Jahr
        </button>
        <button
          onClick={() => handleClick(90)}
          className="row bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2
                      rounded-lg shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          3 Monate
        </button>
        <button
          onClick={() => handleClick(30)}
          className="row bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2
                      rounded-lg shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          1 Monat
        </button>
        <button
          onClick={() => handleClick(7)}
          className="row bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2
                      rounded-lg shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          7 Tage
        </button>
        <button
          onClick={() => handleClick(1)}
          className="row bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2
                      rounded-lg shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          1 Tag
        </button>
      </div>
      <div className="h-80 w-full">
        {data && (
          <Line className="h-full w-full" data={data} options={options} />
        )}
      </div>
    </div>
  );
}

export { CoinChart };
