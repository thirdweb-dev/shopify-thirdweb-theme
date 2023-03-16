import {
  Box,
  Button,
  ChakraProvider,
  Spinner,
  useToast,
} from "@chakra-ui/react";
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
import CustomToast from "./components/Toast";
import { desiredChain, isValidAddress, isValidChainName } from "./constants";

const elements = document.querySelectorAll(".claim");

const ClaimNFT = ({ contractAddress, tokenId, chainName }) => {
  const { contract } = useContract(contractAddress);
  const address = useAddress();
  const { mutateAsync } = useClaimNFT(contract);
  const [owned, setOwned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, switchNetwork] = useNetwork();
  const isMismatched = useNetworkMismatch();
  const { data: nft, isLoading, status } = useNFT(contract, tokenId);
  const isValidContractAddress = isValidAddress(contractAddress);
  const _isValidChainName = isValidChainName(chainName);
  const toast = useToast();

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
      await mutateAsync({ tokenId: tokenId, quantity: 1, to: address });
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

  useEffect(() => {
    if (!isValidContractAddress) {
      toast({
        status: "error",
        duration: 7000,
        isClosable: true,
        position: "top",
        render: () => (
          <CustomToast
            title="Invalid contract address"
            description="Please check the contract address in the token gate section"
          />
        ),
      });
    } else if (!_isValidChainName) {
      toast({
        status: "error",
        duration: 7000,
        isClosable: true,
        position: "top",
        render: () => (
          <CustomToast
            title="Invalid chain name"
            description="Please check the chain name in the token gate section"
          />
        ),
      });
    }
  }, [isValidContractAddress, _isValidChainName]);

  if (!isValidContractAddress || !_isValidChainName) return null;

  // Load (and cache) the metadata for the NFT with token ID
  return !isLoading && nft ? (
    <div>
      <ThirdwebNftMedia height="200px" metadata={nft.metadata} />
      <ConnectWallet />
      <Button
        onClick={handleClaim}
        style={{
          background: "black",
          color: "white",
          width: "100%",
          borderRadius: "0.5rem",
          marginTop: "1rem",
          cursor: "pointer",
        }}
        isDisabled={!address || (!isMismatched && owned)}
        isLoading={loading}
        _hover={{ background: "blackAlpha.700" }}
        size="lg"
        fontSize="2xl"
        py={8}
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
      </Button>
    </div>
  ) : (
    <Box
      h={48}
      w="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner h={24} w={24} mx="auto" />
    </Box>
  );
};

const Claim = ({ contractAddress, tokenId, chainName }) => {
  return (
    <ThirdwebProvider activeChain={chainName}>
      <div
        style={{
          display: "flex",
          color: "white",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ChakraProvider
          colorModeManager={{
            type: "localStorage",
            get: () => "dark",
            set: () => {},
          }}
        >
          <ClaimNFT
            contractAddress={contractAddress}
            tokenId={tokenId}
            chainName={chainName}
          />
        </ChakraProvider>
      </div>
    </ThirdwebProvider>
  );
};

elements &&
  [...elements].forEach((node) => {
    const root = createRoot(node);
    const contractAddress = node.getAttribute("data-contract-address");
    const tokenId = node.getAttribute("data-token-id");
    const chainName = node.getAttribute("data-chain-name");
    root.render(
      <Claim
        contractAddress={contractAddress}
        tokenId={tokenId}
        chainName={chainName}
      />
    );
  });
