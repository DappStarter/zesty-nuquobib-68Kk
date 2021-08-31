require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture street deny shift pupil give enrich metal gasp'; 
let testAccounts = [
"0xaf71c018ff800375b58c8b80be1cefad97a2fc7cf578ffa9fec6e00a0d89babe",
"0xe079b903b15ae1c6f1f96cdfcc2f266edf4d5d279cb5f4bba4dea7efab8b7819",
"0x04846184e595a5cd6eea61d96074fbfd5bdb0edd92a7354679c515c28509d3d2",
"0x11758762b4eede1ed5ff15ba29697612b074f91f19b079134f8b42f09a925810",
"0x5db7450eaa39a80f9157ba7e29ebf6dc7d4a1554df2115b3052e359d6d13fa43",
"0xca81a53dfe00c783fa66dd82cc02ce545e72e32b4af3653abee47ec44594d5d5",
"0x61d9006c2e3ad60c654042557ced711815b2c59cf63dd6a3de7aea3c927a4538",
"0x42179bab9506d92b4bcf056a3a81b0bbcdf7285adcde447cc801c651693235aa",
"0xca291bda634a59d23e01344f61070d136413bafaa18285a5a30b0a3068e2f00c",
"0xe6ae90d831f782bae4d360bc4887f1b68e9e269e84e4e9c1bdc21bcdd697377b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

