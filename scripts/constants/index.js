import { ChainId } from "@thirdweb-dev/sdk";
import * as ethers from "ethers";

export const contractAddress = "0x72B2D0c6Eab55028463037a5Bb22A58810105355";
export const desiredChain = ChainId.Polygon;

export const ChainNames = [
  "mainnet",
  "ethereum",
  "goerli",
  "polygon",
  "matic",
  "mumbai",
  "fantom",
  "fantom-testnet",
  "avalanche",
  "avalanche-testnet",
  "avalanche-fuji",
  "optimism",
  "optimism-goerli",
  "arbitrum",
  "arbitrum-goerli",
  "binance",
  "binance-testnet",
  "hardhat",
  "localhost",
];

export const isValidChainName = (chainName) => {
  return ChainNames.find((name) => name === chainName);
};
export const isValidAddress = (address) => {
  return ethers.utils.isAddress(address);
};
