#!/bin/sh

# protoc -I=. ./rpc.proto --js_out=import_style=commonjs,binary:./server --grpc_out=. --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`

protoc -I=. ./protos/rpc.proto   --js_out=import_style=commonjs,binary:./protos --grpc_out=./protos --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plug`