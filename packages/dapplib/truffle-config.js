require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture struggle deny muscle pulp gesture pave army gas'; 
let testAccounts = [
"0xf9851da2e3a9aacf0fbc9fa89c0da0cc0196b0382f6f1931c46ee38a0515a073",
"0x3bb68e756083d243477ef5ba4cb963c8fe8fba621424f138a04388388d414498",
"0xc7246c3cc6f9ab733604a757cb95c6e6087740c3411d1c0e6621c9be6d0a73ea",
"0xf88a972eb6f50f781fd0fcd3c5f88b1e0a4c79246929b6bc73af0aa6e01de618",
"0x42352d0338428d9dcbdee4cca6d961624d803a93503ea06b40c4abe5a060f68f",
"0x4d88d8901c3271b24725b1bdc6a8ad2276bcc7276814518368de8b119f7cca0d",
"0x098f5b019719333edab1b8f819f14e6d4ae94e1098ce87b3dedea91b0e6ca075",
"0x07538ffc1d4764ecc8eae99197b44ba402a1ad2d44117efba7b2f213f9bd5063",
"0xeb77f400322dade09e1e2a96c4706d6b648dde9472f5179c8683a2c5914f8a34",
"0xc056de6494001acc62f66859ad6a6c4a64f0c9323d25171b080088e9374a9715"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


