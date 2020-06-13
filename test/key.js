var bitcoin = require('bitcoinjs-lib');


let privateKey = new bitcore.PrivateKey(network);
let iditity_pubkey = privateKey.toPublicKey();
let address =  publicKey.toAddress(network);


console.log(privateKey)
console.log(iditity_pubkey)
console.log(address)