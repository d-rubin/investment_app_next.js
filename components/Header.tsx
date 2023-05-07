"use client";

import React from "react";
import { Web3Button, Web3Modal } from "@web3modal/react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { configureChains, createClient } from "wagmi";
import {
  arbitrum,
  avalanche,
  bsc,
  fantom,
  gnosis,
  mainnet,
  optimism,
  polygon,
} from "wagmi/chains";

const Header = () => {
  const projectId = "53b0e45dd04a766a00067d2074ee3938";
  const chains = [
    mainnet,
    polygon,
    avalanche,
    arbitrum,
    bsc,
    optimism,
    gnosis,
    fantom,
  ];
  const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ version: 2, chains, projectId }),
    provider,
  });
  const ethereumClient = new EthereumClient(wagmiClient, chains);

  return (
    <>
      <header className="w-full h-14 bg-white border-b-2 px-4 relative flex justify-between items-center">
        <div className="flex justify-between gap-2">
          <h1 className="text-xl">Hey Tobi</h1>
          {/* {children} */}
        </div>
        <div className="flex justify-between items-center gap-2">
          <Web3Button icon="show" label="Connect Wallet" balance="show" />
        </div>
      </header>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export { Header };
