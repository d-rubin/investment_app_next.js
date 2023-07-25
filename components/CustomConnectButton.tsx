"use client";

import { SignClient } from "@walletconnect/sign-client";
import { useEffect, useState } from "react";
import { SignClient as SignClientType } from "@walletconnect/sign-client/dist/types/client";
import { Web3Modal } from "@web3modal/standalone";
// eslint-disable-next-line import/no-extraneous-dependencies
import { SessionTypes } from "@walletconnect/types";

const projectId = process.env.PROJECT_ID!;

// @ts-ignore
const web3modal = new Web3Modal({
  projectId,
  standaloneChains: ["eip155:1"],
});

const CustomConnectButton = () => {
  const [signClient, setSignClient] = useState<SignClientType>();
  const [sessions, setSessions] = useState<SessionTypes.Struct>();
  const [accounts, setAccounts] = useState<string>();
  const [transactionHash, setTransactionHash] = useState();

  const reset = () => {
    setAccounts(undefined);
    setSessions(undefined);
  };

  const subscribeToEvents = async (client: SignClientType) => {
    if (!client) throw Error("No events to subscribe to b/c the client does not exist");
    try {
      client.on("session_delete", () => {
        console.log("usr disconnected the session from the wallet");
        reset();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSend = async () => {
    try {
      const transaction = {
        from: accounts,
        to: "",
        data: "0x",
        gasPrice: "0x029104e28c",
        gasLimit: "0x5208",
        value: "0x00",
      };
      const result = await signClient?.request({
        topic: sessions!.topic,
        request: {
          method: "eth_sendTransaction",
          params: [transaction],
        },
        chainId: "eip155:1",
      });
      // @ts-ignore
      setTransactionHash(result);
    } catch (error) {
      console.log(error);
    }
  };

  const createClient = async () => {
    try {
      const client = await SignClient.init({
        projectId,
      });
      // @ts-ignore
      setSignClient(client);
      await subscribeToEvents(client);
    } catch (error) {
      console.log(error);
    }
  };

  const onSessionConnect = async (session: SessionTypes.Struct) => {
    if (!session) throw new Error("client doesn't exist");
    try {
      setSessions(session);
      setAccounts(session.namespaces.eip155.accounts[0].slice(9));
    } catch (e) {
      console.log(e);
    }
  };
  const handleConnect = async () => {
    if (!signClient) throw new Error("Cannot connect. Sign Client is not created");
    try {
      const proposalNamespace = {
        eip155: {
          chains: ["eip155:1"],
          methods: ["eth_sendTransaction"],
          events: ["connect", "disconnect"],
        },
      };

      const { uri, approval } = await signClient.connect({
        requiredNamespaces: proposalNamespace,
      });

      if (uri) {
        await web3modal.openModal({ uri });
        const sessionNamespace = await approval();
        onSessionConnect(sessionNamespace);
        web3modal.closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await signClient?.disconnect({
        topic: sessions!.topic,
        reason: { message: "User disconnected", code: 6000 },
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!signClient) {
      createClient();
    }
  }, [signClient]);

  return accounts?.length ? (
    <>
      <p>{accounts}</p>
      <button onClick={handleDisconnect}>Disconnect</button>
      <button onClick={handleSend}>Send Transaction</button>
      {transactionHash && (
        <p>
          View your transaction <a href="/register">here</a>
        </p>
      )}
    </>
  ) : (
    <button onClick={handleConnect} disabled={!signClient}>
      Connect
    </button>
  );
};

export default CustomConnectButton;
