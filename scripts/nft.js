import { Box, Spinner } from "@chakra-ui/react";
import {
  ChainId,
  ConnectWallet,
  ThirdwebNftMedia,
  ThirdwebProvider,
  useAddress,
  useClaimNFT,
  useContract,
  useNFT,
} from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const elements = document.querySelectorAll(".nft");

const RenderNFT = () => {
  // Get your NFT Collection using it's contract address
  const { contract } = useContract(
    "0xFBF12b183f201Ca48F8eC6DA39F00Ce25d3BD2ef"
  );
  const address = useAddress();
  const { mutateAsync } = useClaimNFT(contract);
  const [owned, setOwned] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (address && contract) {
      contract.getOwned(address).then((owned) => {
        if (owned.length) {
          setOwned(owned);
        } else {
          setOwned(false);
        }
      });
    }
  }, [address, contract]);

  const claimNFT = async () => {
    if (!address) return;
    try {
      setLoading(true);
      await mutateAsync({ tokenId: 0, quantity: 1, to: address });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Load (and cache) the metadata for the NFT with token ID
  const { data: nft, isLoading } = useNFT(contract, 0);
  return !isLoading && nft ? (
    <div>
      <Box p={4} bg="whiteAlpha.800" roundedTop="lg">
        <ThirdwebNftMedia height="200px" metadata={nft.metadata} />
      </Box>
      <ConnectWallet />
      <button
        onClick={claimNFT}
        style={{
          background: "black",
          color: "white",
          width: "100%",
          padding: "11.25px",
          borderRadius: "0.5rem",
          marginTop: "1rem",
          cursor: "pointer",
        }}
        disabled={!address || owned}
      >
        {!address
          ? "Connect Wallet"
          : owned
          ? "Claimed"
          : loading
          ? "claiming..."
          : "Claim NFT"}
      </button>
    </div>
  ) : (
    <Spinner />
  );
};

const MyFirstWeb3Island = () => {
  return (
    <ThirdwebProvider activeChain={ChainId.Mumbai}>
      <div
        style={{
          display: "flex",
          color: "white",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RenderNFT />
      </div>
    </ThirdwebProvider>
  );
};

elements &&
  [...elements].forEach((node) => {
    const root = createRoot(node);
    root.render(<MyFirstWeb3Island />);
  });
