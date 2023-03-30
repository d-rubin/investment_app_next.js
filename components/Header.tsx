"use client";

import React, { ChangeEvent, useState } from "react";

const Header = () => {
  const coins: { name: string; id: string }[] = [
    { name: "Bitcoin", id: "bitcoin" },
    { name: "Ethereum", id: "ethereum" },
    { name: "Tether", id: "tether" },
    { name: "BNB", id: "binancecoin" },
    { name: "USD Coin", id: "usd-coin" },
    { name: "XRP", id: "ripple" },
    { name: "Cardano", id: "cardano" },
    { name: "Lido Staked Ether", id: "staked-ether" },
    { name: "Dogecoin", id: "dogecoin" },
    { name: "Polygon", id: "matic-network" },
    { name: "Solana", id: "solana" },
    { name: "Binance USD", id: "binance-usd" },
    { name: "Polkadot", id: "polkadot" },
    { name: "Litecoin", id: "litecoin" },
    { name: "Shiba Inu", id: "shiba-inu" },
    { name: "TRON", id: "tron" },
    { name: "Avalanche", id: "avalanche-2" },
    { name: "Dai", id: "dai" },
    { name: "Uniswap", id: "uniswap" },
    { name: "Wrapped Bitcoin", id: "wrapped-bitcoin" },
    { name: "Chainlink", id: "chainlink" },
    { name: "Cosmos Hub", id: "cosmos" },
    { name: "LEO Token", id: "leo-token" },
    { name: "Toncoin", id: "the-open-network" },
    { name: "Ethereum Classic", id: "ethereum-classic" },
    { name: "Monero", id: "monero" },
    { name: "Stellar", id: "stellar" },
    { name: "OKB", id: "okb" },
    { name: "Bitcoin Cash", id: "bitcoin-cash" },
    { name: "Filecoin", id: "filecoin" },
    { name: "TrueUSD", id: "true-usd" },
    { name: "Aptos", id: "aptos" },
    { name: "Lido DAO", id: "lido-dao" },
    { name: "Hedera", id: "hedera-hashgraph" },
    { name: "Quant", id: "quant-network" },
    { name: "Cronos", id: "crypto-com-chain" },
    { name: "Arbitrum", id: "arbitrum" },
    { name: "NEAR Protocol", id: "near" },
    { name: "VeChain", id: "vechain" },
    { name: "Algorand", id: "algorand" },
    { name: "ApeCoin", id: "apecoin" },
    { name: "Internet Computer", id: "internet-computer" },
    { name: "EOS", id: "eos" },
    { name: "Stacks", id: "blockstack" },
    { name: "The Graph", id: "the-graph" },
    { name: "Fantom", id: "fantom" },
    { name: "The Sandbox", id: "the-sandbox" },
    { name: "MultiversX", id: "elrond-erd-2" },
    { name: "Decentraland", id: "decentraland" },
    { name: "Frax", id: "frax" },
  ];
  const [results, setResults] = useState<{ name: string; id: string }[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newResults: { name: string; id: string }[] = [];
    if (e.target.value !== "") {
      coins.map((coin) => {
        if (coin.name.toLowerCase().includes(e.target.value)) {
          newResults.push(coin);
        }
      });
      setResults(newResults);
    } else {
      setResults([]);
    }
  };

  const handleClick = async (id: string) => {
    await fetch("userData", { body: id, method: "POST" });
  };

  return (
    <header className="w-full h-14 bg-white shadow-lg mb-4 px-4 relative flex justify-between items-center">
      <h1 className="text-xl">Hey Tobi</h1>
      <div className="w-48 flex border-2 border-cyan-500 rounded-lg h-8 focus:border-cyan-800">
        <input
          className="w-full h-full p-2 rounded-lg"
          placeholder="Suche nach Coins..."
          onFocus={(e) => {
            e.preventDefault();
          }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
      </div>
      <ul className="w-48 max-h-60 overflow-y-scroll bg-white shadow-xl absolute top-14 right-0 mr-4 z-10 rounded-bl-lg rounded-br-lg scollbar-none">
        {results.map((coin: { name: string; id: string }) => (
          <li
            key={coin.id}
            className="w-full gap-1 h-fit rounded-md hover:bg-blue-400 hover:text-white p-2 text-primary text-center"
            onClick={() => handleClick(coin.id)}
          >
            {coin.name}
          </li>
        ))}
      </ul>
    </header>
  );
};

export { Header };
