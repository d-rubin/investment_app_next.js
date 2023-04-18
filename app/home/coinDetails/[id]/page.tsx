"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import back from "../../../../img/back.png";
import { MarketData } from "../../../../interfaces";
import { Header } from "../../../../components/Header";

const CoinDetails = async ({ params }: { params: { id: string } }) => {
  // const [chartDataSets, setChartDataSets] = useState<ChartDataset<"line">[]>(
  //   []
  // );
  const [marketData, setMarketData] = useState<MarketData>();
  const ids: string[] = [params.id];
  // let url: string;
  // const days = 1;
  // const labels: string[] = [];
  // let interval: string;
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
    console.log("Fetching market data");
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    const newData = await response.json();
    setMarketData(newData);
  };

  console.log("before useEffect");
  useEffect(() => {
    console.log("use Effect");
    // fetchChartData();
    fetchMarketData();
  }, []);
  // const chartData: ChartData<"line"> = {
  //   labels,
  //   datasets: chartDataSets,

  // };
  // const fetchChartData = () => {
  //   ids.forEach(async (id) => {
  //     if (interval === "daily") {
  //       url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=${days}&interval=daily`;
  //     } else {
  //       url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=${days}`;
  //     }
  //
  //     await fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const prices: number[] = [];
  //         labels = [];
  //
  //         for (let i = 0; i < data.prices.length; i += 1) {
  //           prices.push(data.prices[i][1]);
  //           labels.push(
  //             new Date(data.prices[i][0]).toLocaleDateString("de-DE")
  //           );
  //         }
  //
  //         setChartDataSets([
  //           ...chartDataSets,
  //           ...[
  //             {
  //               data: prices,
  //               label: id,
  //               fill: false,
  //               pointBackgroundColor: Math.floor(
  //                 Math.random() * 16777215
  //               ).toString(16),
  //               borderColor: Math.floor(Math.random() * 16777215).toString(16),
  //               pointHitRadius: 3,
  //               pointRadius: 0,
  //               hoverBorderWidth: 5,
  //             },
  //           ],
  //         ]);
  //       });
  //   });
  // };
  //

  //
  const handleClick = (nr: number) => {
    console.log(nr);
    // days = nr;
    // setChartDataSets([]);
    // fetchChartData();
  };
  const handleSearchClick = (id: string) => {
    ids.push(id);
    // setChartDataSets([]);
    // fetchChartData();
  };

  return (
    marketData && (
      <>
        <Header onClick={() => handleSearchClick}>
          <div className="flex items-center">
            <Image
              src={marketData.image.large}
              alt={marketData.name}
              width={36}
              height={36}
              className="mr-2"
            />
            <h1>
              <b>{marketData.name}</b>
            </h1>
          </div>
        </Header>
        <Link href="/home">
          <Image
            className="cursor-pointer"
            src={back}
            width={32}
            height={32}
            alt="Back"
          />
        </Link>
        <div className="px-4 ">
          <div className="px-4 flex flex-wrap justify-center">
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
          <div className="h-80">
            {/* <CoinChart data={chartData} xTicksLimit={8} /> */}
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
        </div>
      </>
    )
  );
};

export default CoinDetails;
