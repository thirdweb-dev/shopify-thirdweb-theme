import * as ethers from "ethers";

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
