require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require("hardhat-deploy-ethers")
//require("./tasks")
require("dotenv").config()

module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
        details: { yul: false },
      },
    },
  },
  
  defaultNetwork: "testnet",
  networks: {
    hardhat: {
      chainId: 1337
    },
    testnet: {
      url: "https://filecoin-calibration.chainup.net/rpc/v1",
      accounts: [process.env.PRIVATE_KEY],
    },
    FilecoinMainnet: {
      chainId: 314,
      url: "https://api.node.glif.io",
      accounts: [process.env.PRIVATE_KEY],
    },

  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
