import dotenv from 'dotenv'
dotenv.config()

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_GOERLI_URL,
      accounts: [
        process.env.PRIVATE_KEY ?? ''
      ]
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.EHTERSCAN_KEY ?? '',
    }
  },
};

export default config;
