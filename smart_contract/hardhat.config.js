// https://eth-ropsten.alchemyapi.io/v2/q2mqZfcyKWnzhZW6shpviMK1Got_LthC

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/q2mqZfcyKWnzhZW6shpviMK1Got_LthC',
      accounts: [ '5cac045a546f21a9dc01ef981360fefab99d8d99b33bcac3c3838059194a9871' ]
    }
  }
}