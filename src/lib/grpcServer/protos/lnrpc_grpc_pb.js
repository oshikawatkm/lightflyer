// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_lib_protos_lnrpc_pb = require('./lnrpc_pb.js');

function serialize_lnrpc_listChannelsRequest(arg) {
  if (!(arg instanceof src_lib_protos_lnrpc_pb.listChannelsRequest)) {
    throw new Error('Expected argument of type lnrpc.listChannelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_listChannelsRequest(buffer_arg) {
  return src_lib_protos_lnrpc_pb.listChannelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_listChannelsResponse(arg) {
  if (!(arg instanceof src_lib_protos_lnrpc_pb.listChannelsResponse)) {
    throw new Error('Expected argument of type lnrpc.listChannelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_listChannelsResponse(buffer_arg) {
  return src_lib_protos_lnrpc_pb.listChannelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_openChannelRequest(arg) {
  if (!(arg instanceof src_lib_protos_lnrpc_pb.openChannelRequest)) {
    throw new Error('Expected argument of type lnrpc.openChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_openChannelRequest(buffer_arg) {
  return src_lib_protos_lnrpc_pb.openChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_openChannelResponse(arg) {
  if (!(arg instanceof src_lib_protos_lnrpc_pb.openChannelResponse)) {
    throw new Error('Expected argument of type lnrpc.openChannelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_openChannelResponse(buffer_arg) {
  return src_lib_protos_lnrpc_pb.openChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LightningService = exports.LightningService = {
  listChannels: {
    path: '/lnrpc.Lightning/listChannels',
    requestStream: false,
    responseStream: false,
    requestType: src_lib_protos_lnrpc_pb.listChannelsRequest,
    responseType: src_lib_protos_lnrpc_pb.listChannelsResponse,
    requestSerialize: serialize_lnrpc_listChannelsRequest,
    requestDeserialize: deserialize_lnrpc_listChannelsRequest,
    responseSerialize: serialize_lnrpc_listChannelsResponse,
    responseDeserialize: deserialize_lnrpc_listChannelsResponse,
  },
  openChannel: {
    path: '/lnrpc.Lightning/openChannel',
    requestStream: false,
    responseStream: false,
    requestType: src_lib_protos_lnrpc_pb.openChannelRequest,
    responseType: src_lib_protos_lnrpc_pb.openChannelResponse,
    requestSerialize: serialize_lnrpc_openChannelRequest,
    requestDeserialize: deserialize_lnrpc_openChannelRequest,
    responseSerialize: serialize_lnrpc_openChannelResponse,
    responseDeserialize: deserialize_lnrpc_openChannelResponse,
  },
};

exports.LightningClient = grpc.makeGenericClientConstructor(LightningService);
