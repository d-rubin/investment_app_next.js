"use client";

import React from "react";
import "../styles/globals.css";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Button, Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon, optimism } from "wagmi/chains";

const projectId = process.env.PROJECT_ID!;
const chains = [mainnet, polygon, arbitrum, optimism];

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ chains, projectId }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

const WalletConnect = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <div>
        <Web3Button icon="show" label="Connect Wallet" balance="show" />
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </div>
    </WagmiConfig>
  );
};

export default WalletConnect;
