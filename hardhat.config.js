//require("@nomiclabs/hardhat-waffle");
//require('dotenv').config();

require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require("hardhat-deploy-ethers")
//require("./tasks")
require("dotenv").config()

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hyperspace",
  networks: {
    hardhat: {
      chainId: 1337
    },
    hyperspace: {
      url: "https://filecoin-calibration.chainup.net/rpc/v1",
      accounts: [PRIVATE_KEY],
    },

  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
