/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const { API_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${API_KEY}`,
      accounts: [`${PRIVATE_KEY}`]
    }
  }
};
