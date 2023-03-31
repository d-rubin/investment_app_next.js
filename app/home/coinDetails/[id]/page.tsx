import React, { useEffect, useState } from "react";
import { ChartData } from "chart.js";
import Link from "next/link";
import Image from "next/image";
import back from "../../../../img/back.png";
import { CoinChart } from "../../../../components/Chart";
import { MarketData } from "../../../../interfaces";

const CoinDetails = ({ id }: { id: string }) => {
  // const [chartData, setChartData] = useState<{
  //   prices: number[];
  //   labels: string[];
  // }>();
  // const [marketData, setMarketData] = useState<MarketData>();
  // let days = 1;
  // const currency = "eur";
  // const locals = "de-DE";
  // const currencyOptions = { style: "currency", currency: `${currency}` };
  // const allTimeHigh = marketData
  //   ? new Intl.NumberFormat(locals, currencyOptions).format(
  //       marketData.market_data.ath.eur
  //     )
  //   : null;
  // const allTimeLow = marketData
  //   ? new Intl.NumberFormat(locals, currencyOptions).format(
  //       marketData.market_data.atl.eur
  //     )
  //   : null;
  // const percentage = marketData
  //   ? (marketData.market_data.atl.eur / marketData.market_data.ath.eur) * 100
  //   : null;
  // const fetchChartData = async () => {
  //   let interval: string;
  //   let url: string;
  //   if (days >= 365) {
  //     interval = "daily";
  //   }
  //   switch (interval) {
  //     case "daily":
  //       url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=${days}&interval=daily`;
  //       break;
  //     default:
  //       url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;
  //       break;
  //   }
  //   await fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const price: number[] = [];
  //       const label: string[] = [];
  //       for (let i = 0; i < data.prices.length; i += 1) {
  //         price.push(data.prices[i][1]);
  //         label.push(new Date(data.prices[i][0]).toLocaleDateString("de-DE"));
  //       }
  //       setChartData({ prices: price, labels: label });
  //     });
  // };
  // const fetchMarketData = async () => {
  //   const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`;
  //   const response = await fetch(url);
  //   const newData = await response.json();
  //   setMarketData(newData);
  // };
  // const data: ChartData<"line"> = {
  //   labels: chartData ? chartData.labels : [],
  //   datasets: [
  //     {
  //       data: chartData ? chartData.prices : [],
  //       fill: false,
  //       borderColor: "#76A9FA",
  //       backgroundColor: "#76A9FA",
  //       pointHitRadius: 3,
  //       pointRadius: 0,
  //       hoverBorderWidth: 5,
  //     },
  //   ],
  // };
  // const handleClick = (nr: number) => {
  //   days = nr;
  //   fetchChartData();
  // };
  // useEffect(() => {
  //   fetchChartData();
  //   fetchMarketData();
  // }, [marketData, chartData]);
  return (
    <>
      <header className="w-full h-20 bg-white shadow-lg mb-4 px-4 flex justify-between items-center">
        {/* {marketData && ( */}
        <div className="flex">
          <img
            className="mr-2"
            // src={marketData.image.small}
            // alt={marketData.name}
            width={25}
            height={25}
          />
          <h1>{/* <b>{marketData.name}</b> */}</h1>
        </div>
        {/* )} */}
        <Link href="/home">
          <Image
            className="cursor-pointer"
            src={back}
            width={32}
            height={32}
            alt="Back"
          />
        </Link>
      </header>
      <div className="px-4">
        <div className="px-4 flex flex-wrap justify-center">
          <button
            // onClick={() => handleClick(1825)}
            className="row bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2
                    rounded-lg shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            5 Jahre
          </button>
          <button
            // onClick={() => handleClick(1095)}
            className="row bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2
                    rounded-lg shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            3 Jahre
          </button>
          <button
            // onClick={() => handleClick(365)}
            className="row bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2
                    rounded-lg shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            1 Jahr
          </button>
          <button
            // onClick={() => handleClick(90)}
            className="row bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2
                    rounded-lg shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            3 Monate
          </button>
          <button
            // onClick={() => handleClick(30)}
            className="row bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2
                    rounded-lg shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            1 Monat
          </button>
          <button
            // onClick={() => handleClick(7)}
            className="row bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2
                    rounded-lg shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            7 Tage
          </button>
          <button
            // onClick={() => handleClick(1)}
            className="row bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2
                    rounded-lg shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            1 Tag
          </button>
        </div>
        <div className="h-80">
          {/* <CoinChart data={data} xTicksLimit={8} /> */}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-center">
            ATL:
            <br />
            {/* {allTimeLow} */}
          </p>
          <div className="relative pt-1 w-full px-4">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div
                // style={{ width: `${percentage}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400"
              />
            </div>
          </div>
          <p className="text-center">
            ATH:
            <br />
            {/* {allTimeHigh} */}
          </p>
        </div>
      </div>
    </>
  );
};

export default CoinDetails;
