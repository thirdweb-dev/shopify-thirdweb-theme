import { Box, Spinner } from "@chakra-ui/react";
import {
  ConnectWallet,
  ThirdwebNftMedia,
  ThirdwebProvider,
  useAddress,
  useClaimNFT,
  useContract,
  useNetwork,
  useNetworkMismatch,
  useNFT,
} from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { contractAddress, desiredChain } from "./constants";

const elements = document.querySelectorAll(".nft");

const RenderNFT = () => {
  const { contract } = useContract(contractAddress);
  const address = useAddress();
  const { mutateAsync } = useClaimNFT(contract);
  const [owned, setOwned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, switchNetwork] = useNetwork();
  const isMismatched = useNetworkMismatch();

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

  const handleClaim = async () => {
    if (isMismatched) {
      try {
        await switchNetwork(desiredChain);
      } catch (err) {
        console.error(err);
      }
    } else {
      claimNFT();
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
        onClick={handleClaim}
        style={{
          background: "black",
          color: "white",
          width: "100%",
          padding: "11.25px",
          borderRadius: "0.5rem",
          marginTop: "1rem",
          cursor: "pointer",
        }}
        disabled={!address || (!isMismatched && owned)}
      >
        {!address
          ? "Connect Wallet"
          : isMismatched
          ? "Switch Network"
          : owned
          ? "Claimed"
          : loading
          ? "claiming..."
          : "Claim NFT"}
      </button>
    </div>
  ) : (
    <Box h={48} w="full">
      <Spinner h={24} w={24} />
    </Box>
  );
};

const MyFirstWeb3Island = () => {
  return (
    <ThirdwebProvider activeChain={desiredChain}>
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
