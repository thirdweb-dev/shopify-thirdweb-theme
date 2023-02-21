import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ChainId,
  ConnectWallet,
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
      <Modal isOpen={!owned} onClose={onClose} isCentered size="3xl">
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
          display="block !important"
        />
        <ModalContent
          bg="#131313"
          minW="xl"
          rounded="3xl"
          outline="0.5px solid rgba(255, 255, 255, 0.7)"
        >
          <ModalBody>
            <Box p={8} minH="100%" minW="xl">
              {loading ? (
                <Spinner />
              ) : !address ? (
                <Flex
                  my={4}
                  gap={8}
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                >
                  <Text>STOP! We need to check if you're a member.</Text>
                  <ConnectWallet />
                </Flex>
              ) : (
                !owned && (
                  <Flex
                    my={4}
                    gap={8}
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                  >
                    <Text>To access this product, you'll need an NFT.</Text>
                    <ConnectWallet />
                    <Button
                      variant="solid"
                      w="200px"
                      h="50px"
                      bg="white"
                      color="black"
                      fontSize="2xl"
                      // fontWeight="bold"
                      rounded="2xl"
                      onClick={() => {
                        window.location.href =
                          "https://thirdweb.myshopify.com/pages/claim";
                      }}
                    >
                      Go Claim NFT
                    </Button>
                  </Flex>
                )
              )}
            </Box>
          </ModalBody>
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
