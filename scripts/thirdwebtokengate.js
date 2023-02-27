import {
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
} from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const elements = document.querySelectorAll(".thirdwebtokengate");

const TokenGate = () => {
  const { onClose } = useDisclosure();

  const { contract } = useContract(
    "0xFBF12b183f201Ca48F8eC6DA39F00Ce25d3BD2ef"
  );
  const address = useAddress();
  const [owned, setOwned] = useState(false);
  const [loading, setLoading] = useState(false);

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
          <ModalBody
            minH="250px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Flex
              p={8}
              h="full"
              minW="xl"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              mx="auto"
              my="auto"
            >
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
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

const Wrapper = () => {
  return (
    <ChakraProvider
      colorModeManager={{
        type: "localStorage",
        get: () => "dark",
        set: () => {},
      }}
    >
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
