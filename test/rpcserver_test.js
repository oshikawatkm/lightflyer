const fs = require("fs");
var grpc = require("grpc");

function main() {
  let credentials = grpc.ServerCredentials.createSsl(
    fs.readFileSync("../certs/ca.crt"),
    [
      {
        cert_chain: fs.readFileSync("../certs/server.crt"),
        private_key: fs.readFileSync("../certs/server.key")
      }
    ],
    true
  );
  let unsafeCreds = grpc.ServerCredentials.createInsecure();
  const server = new grpc.Server();


  server.bind("127.0.0.1:10001", unsafeCreds);
  server.start();

  console.log("RpcServer running on port 127.0.0.1:10001");
}
main()