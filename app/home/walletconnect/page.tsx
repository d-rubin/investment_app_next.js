import React from "react";
import { Core } from "@walletconnect/core";
import { Web3Wallet } from "@walletconnect/web3wallet";

const core = new Core({
  projectId: process.env.PROJECT_ID,
});

const WalletConnectPage = async () => {
  const web3wallet = await Web3Wallet.init({
    core, // <- pass the shared `core` instance
    metadata: {
      name: "Demo app",
      description: "Demo Client as Wallet/Peer",
      url: "www.walletconnect.com",
      icons: [],
    },
  });

  const handleClick = async () => {
    web3wallet.on("session_proposal", async (proposal) => {
      const session = await web3wallet.approveSession({
        id: proposal.id,
        namespaces,
      });
    });
    await web3wallet.core.pairing.pair({ uri });
  };
  return <Button onClick={handleClick}>Wallet Connnect</Button>;
};

export default WalletConnectPage;
