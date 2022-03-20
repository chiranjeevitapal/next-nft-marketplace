require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    kovan: {
      url: `https://kovan.infura.io/v3/4cabb4aea7f84776aa16023ace95b9a5`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://palm-mainnet.infura.io/v3/4cabb4aea7f84776aa16023ace95b9a5`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
