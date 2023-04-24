"use client";

import React from "react";
import { Web3Button, Web3Modal } from "@web3modal/react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
// eslint-disable-next-line import/no-extraneous-dependencies
import { configureChains, createClient } from "wagmi";
// eslint-disable-next-line import/no-extraneous-dependencies
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

// eslint-disable-next-line react/require-default-props
const Header = ({ children }: { children?: React.ReactNode }) => {
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
    connectors: w3mConnectors({ version: 1, chains, projectId }),
    provider,
  });
  const ethereumClient = new EthereumClient(wagmiClient, chains);

  return (
    <>
      <header className="w-full h-14 bg-white border-b-2 px-4 relative flex justify-between items-center">
        <div className="flex justify-between gap-2">
          <h1 className="text-xl">Hey Tobi</h1>
          {children}
        </div>
        <div className="flex justify-between items-center gap-2">
          {/* <Search onClick={handleClick} /> */}
          <Web3Button icon="show" label="Connect Wallet" balance="show" />
        </div>
      </header>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export { Header };
