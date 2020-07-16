



const lnrpc = require("../src/lib/grpcServer/protos/rpc_pb");
const lnrpcService = require("../src/lib/grpcServer/protos/rpc_grpc_pb");

var grpc = require("grpc");

let fs = require("fs");

let credentials = grpc.credentials.createSsl(
  fs.readFileSync("../certs/ca.crt"),
  fs.readFileSync("../certs/client.key"),
  fs.readFileSync("../certs/client.crt")
);
let unsafCreds = grpc.credentials.createInsecure();



function callListChannel() {
  let client = new lnrpcService.LightningClient("localhost:10001", unsafCreds);
  let listChannelsRequest = new lnrpc.listChannelsRequest();
  client.listChannels(listChannelsRequest, (error, response) => {
    if (!error) {
      console.log(response.toString());
    } else {
      if (error.code === grpc.status.NOT_FOUND) {
        console.log("Not found");
      } else {
        //do something else...
      }
    }
  });
}

function main() {
  callListChannel();
}
main();