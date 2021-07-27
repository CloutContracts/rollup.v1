var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'ENTER PHRASE HERE';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://mainnet.infura.io/v3/-KEYHERE)
      },
      network_id: 1,
      timeoutBlocks: 4000, 
      skipDryRun: true,
      gasPrice: 34000000000,         
      gas: 14000000
    },
    bsc: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 500,
      gasPrice: 84000000000,
      skipDryRun: true
    },
    etc: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://www.ethercluster.com/etc`),
      network_id: 1,
      timeoutBlocks: 500,
      gasPrice: 5000000000,
      skipDryRun: true
    }
   },
  plugins: [
    'truffle-plugin-verify'
  ],
  
  api_keys: {
    etherscan: 'KEY HERE',
    bscscan: 'KEY HERE',
  }
};
