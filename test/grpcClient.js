const fs = require('fs');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const loaderOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};
const packageDefinition = protoLoader.loadSync(__dirname + '/../src/lib/protos/rpc.proto', loaderOptions);
const lnrpc = grpc.loadPackageDefinition(packageDefinition).lnrpc;
// const macaroon = fs.readFileSync("LND_DIR/data/chain/bitcoin/simnet/admin.macaroon").toString('hex');
process.env.GRPC_SSL_CIPHER_SUITES = 'HIGH+ECDSA';
const lndCert = fs.readFileSync(__dirname + '/../certs/client.crt');
const sslCreds = grpc.credentials.createSsl(lndCert);
const macaroonCreds = grpc.credentials.createFromMetadataGenerator(function(args, callback) {
  let metadata = new grpc.Metadata();
  metadata.add('macaroon', macaroon);
  callback(null, metadata);
});
let creds = grpc.credentials.combineChannelCredentials(sslCreds, macaroonCreds);
let lightning = new lnrpc.Lightning('localhost:10001', creds);
console.log(lightning)
let request = { 
  active_only: true, 
  inactive_only: false, 
  public_only: true, 
  private_only: false, 
  peer: "0264b6ec7e7419f6dc078b6941a6f9f96a31de1ee67688f0189c853144989720d1@192.168.0.1", 
}; 
lightning.listChannels(request, function(err, response) {
  console.log(response);
});