const fs = require('fs');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// process.env.GRPC_SSL_CIPHER_SUITES = 'HIGH+ECDSA'

// const lndCert = fs.readFileSync(" # tls.certのpathを記述　");
// const sslCreds = grpc.credentials.createSsl(lndCert);
// const macaroonCreds = grpc.credentials.createFromMetadataGenerator(function(args, callback) {
//   const macaroon = fs.readFileSync("# macaroon.adminのpathを記述").toString('hex');
//   const metadata = new grpc.Metadata()
//   metadata.add('macaroon', macaroon);
//   callback(null, metadata);
// });

//const credentials = grpc.credentials.combineChannelCredentials(sslCreds, macaroonCreds);
const packageDefinition  = protoLoader.loadSync("../src/protos/rpc.proto");
const rpcProto = grpc.loadPackageDefinition(packageDefinition);

const lnrpc = rpcProto.lnrpc;
const lightning = new lnrpc.Lightning('localhost:10001', credentials);