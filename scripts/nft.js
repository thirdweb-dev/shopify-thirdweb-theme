import {
  ChainId,
  ConnectWallet,
  ThirdwebNftMedia,
  ThirdwebProvider,
  useContract,
  useNFT,
} from "@thirdweb-dev/react";
import React from "react";
import { createRoot } from "react-dom/client";

const elements = document.querySelectorAll(".nft");

const RenderNFT = () => {
  // Get your NFT Collection using it's contract address
  const { contract } = useContract(
    "0x7C8E4993051a1e231E04Ea5BA3DC11bD8D686fd8"
  );
  console.log(contract);

  // Load (and cache) the metadata for the NFT with token ID 0
  const { data: nft, isLoading } = useNFT(contract, 0);
  return !isLoading && nft ? (
    <ThirdwebNftMedia height="100px" metadata={nft.metadata} />
  ) : (
    <p>Loading...</p>
  );
};

const MyFirstWeb3Island = () => {
  return (
    <ThirdwebProvider activeChain={ChainId.Mumbai}>
      <ConnectWallet />
      <RenderNFT />
    </ThirdwebProvider>
  );
};

elements &&
  [...elements].forEach((node) => {
    const root = createRoot(node);
    root.render(<MyFirstWeb3Island />);
  });
