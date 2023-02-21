import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ChainId,
  ConnectWallet,
  ThirdwebNftMedia,
  ThirdwebProvider,
  useAddress,
  useContract,
  useNFT,
} from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const elements = document.querySelectorAll(".thirdwebtokengate");

const TokenGate = () => {
  const { onClose } = useDisclosure();

  const { contract } = useContract(
    "0x7C8E4993051a1e231E04Ea5BA3DC11bD8D686fd8"
  );
  const address = useAddress();
  const [owned, setOwned] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: nft } = useNFT(contract, 0);

  useEffect(() => {
    if (address && contract && address) {
      setLoading(true);
      contract
        .getOwned(address)
        .then((owned) => {
          if (owned.length) {
            setOwned(owned);
          }
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [address, contract]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "red !important",
      }}
      id="modal-container"
    >
      <Modal isOpen={!owned} onClose={onClose} isCentered size="2xl">
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
          display="block !important"
        />
        <ModalContent>
          {nft && (
            <Box p={4} bg="blackAlpha.800" roundedTop="lg">
              <ThirdwebNftMedia
                width="100%"
                height="auto"
                metadata={nft.metadata}
                style={{
                  borderRadius: "10px",
                }}
              />
            </Box>
          )}
          <ModalBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {loading ? (
              <Spinner />
            ) : !address ? (
              <>
                <Text my={4}>
                  Please connect your wallet to check if you own a membership.
                </Text>
                <ConnectWallet />
              </>
            ) : (
              !owned && (
                <Flex
                  my={4}
                  gap={2}
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Heading>You do not own a membership.</Heading>
                  <Text>
                    Please connect to a wallet that owns this nft, or go and
                    claim one
                  </Text>
                  <ConnectWallet />
                </Flex>
              )
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              variant="solid"
              colorScheme="purple"
              size="lg"
              onClick={() => {
                window.location.href =
                  "https://thirdweb.myshopify.com/pages/claim";
              }}
            >
              Go claim one
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

const Wrapper = () => {
  return (
    <ChakraProvider>
      <ThirdwebProvider activeChain={ChainId.Mumbai}>
        <TokenGate />
      </ThirdwebProvider>
    </ChakraProvider>
  );
};

elements &&
  [...elements].forEach((node) => {
    const root = createRoot(node);
    root.render(<Wrapper />);
  });
