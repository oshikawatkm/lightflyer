// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_lib_protos_rpc_pb = require('./rpc_pb.js');

function serialize_lnrpc_AddInvoiceResponse(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.AddInvoiceResponse)) {
    throw new Error('Expected argument of type lnrpc.AddInvoiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_AddInvoiceResponse(buffer_arg) {
  return src_lib_protos_rpc_pb.AddInvoiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_CloseChannelRequest(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.CloseChannelRequest)) {
    throw new Error('Expected argument of type lnrpc.CloseChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_CloseChannelRequest(buffer_arg) {
  return src_lib_protos_rpc_pb.CloseChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_CloseStatusUpdate(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.CloseStatusUpdate)) {
    throw new Error('Expected argument of type lnrpc.CloseStatusUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_CloseStatusUpdate(buffer_arg) {
  return src_lib_protos_rpc_pb.CloseStatusUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ConnectPeerRequest(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.ConnectPeerRequest)) {
    throw new Error('Expected argument of type lnrpc.ConnectPeerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_ConnectPeerRequest(buffer_arg) {
  return src_lib_protos_rpc_pb.ConnectPeerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ConnectPeerResponse(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.ConnectPeerResponse)) {
    throw new Error('Expected argument of type lnrpc.ConnectPeerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_ConnectPeerResponse(buffer_arg) {
  return src_lib_protos_rpc_pb.ConnectPeerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_Invoice(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.Invoice)) {
    throw new Error('Expected argument of type lnrpc.Invoice');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_Invoice(buffer_arg) {
  return src_lib_protos_rpc_pb.Invoice.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ListInvoiceRequest(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.ListInvoiceRequest)) {
    throw new Error('Expected argument of type lnrpc.ListInvoiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_ListInvoiceRequest(buffer_arg) {
  return src_lib_protos_rpc_pb.ListInvoiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ListInvoiceResponse(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.ListInvoiceResponse)) {
    throw new Error('Expected argument of type lnrpc.ListInvoiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_ListInvoiceResponse(buffer_arg) {
  return src_lib_protos_rpc_pb.ListInvoiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ListPeersRequest(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.ListPeersRequest)) {
    throw new Error('Expected argument of type lnrpc.ListPeersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_ListPeersRequest(buffer_arg) {
  return src_lib_protos_rpc_pb.ListPeersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ListPeersResponse(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.ListPeersResponse)) {
    throw new Error('Expected argument of type lnrpc.ListPeersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_ListPeersResponse(buffer_arg) {
  return src_lib_protos_rpc_pb.ListPeersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_OpenChannelRequest(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.OpenChannelRequest)) {
    throw new Error('Expected argument of type lnrpc.OpenChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_OpenChannelRequest(buffer_arg) {
  return src_lib_protos_rpc_pb.OpenChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_OpenStatusUpdate(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.OpenStatusUpdate)) {
    throw new Error('Expected argument of type lnrpc.OpenStatusUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_OpenStatusUpdate(buffer_arg) {
  return src_lib_protos_rpc_pb.OpenStatusUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_SendRequest(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.SendRequest)) {
    throw new Error('Expected argument of type lnrpc.SendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_SendRequest(buffer_arg) {
  return src_lib_protos_rpc_pb.SendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_SendResponse(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.SendResponse)) {
    throw new Error('Expected argument of type lnrpc.SendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_SendResponse(buffer_arg) {
  return src_lib_protos_rpc_pb.SendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_listChannelsRequest(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.listChannelsRequest)) {
    throw new Error('Expected argument of type lnrpc.listChannelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_listChannelsRequest(buffer_arg) {
  return src_lib_protos_rpc_pb.listChannelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_listChannelsResponse(arg) {
  if (!(arg instanceof src_lib_protos_rpc_pb.listChannelsResponse)) {
    throw new Error('Expected argument of type lnrpc.listChannelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lnrpc_listChannelsResponse(buffer_arg) {
  return src_lib_protos_rpc_pb.listChannelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LightningService = exports.LightningService = {
  listChannels: {
    path: '/lnrpc.Lightning/listChannels',
    requestStream: false,
    responseStream: false,
    requestType: src_lib_protos_rpc_pb.listChannelsRequest,
    responseType: src_lib_protos_rpc_pb.listChannelsResponse,
    requestSerialize: serialize_lnrpc_listChannelsRequest,
    requestDeserialize: deserialize_lnrpc_listChannelsRequest,
    responseSerialize: serialize_lnrpc_listChannelsResponse,
    responseDeserialize: deserialize_lnrpc_listChannelsResponse,
  },
  openChannel: {
    path: '/lnrpc.Lightning/OpenChannel',
    requestStream: false,
    responseStream: true,
    requestType: src_lib_protos_rpc_pb.OpenChannelRequest,
    responseType: src_lib_protos_rpc_pb.OpenStatusUpdate,
    requestSerialize: serialize_lnrpc_OpenChannelRequest,
    requestDeserialize: deserialize_lnrpc_OpenChannelRequest,
    responseSerialize: serialize_lnrpc_OpenStatusUpdate,
    responseDeserialize: deserialize_lnrpc_OpenStatusUpdate,
  },
  connectPeer: {
    path: '/lnrpc.Lightning/ConnectPeer',
    requestStream: false,
    responseStream: false,
    requestType: src_lib_protos_rpc_pb.ConnectPeerRequest,
    responseType: src_lib_protos_rpc_pb.ConnectPeerResponse,
    requestSerialize: serialize_lnrpc_ConnectPeerRequest,
    requestDeserialize: deserialize_lnrpc_ConnectPeerRequest,
    responseSerialize: serialize_lnrpc_ConnectPeerResponse,
    responseDeserialize: deserialize_lnrpc_ConnectPeerResponse,
  },
  listPeers: {
    path: '/lnrpc.Lightning/ListPeers',
    requestStream: false,
    responseStream: false,
    requestType: src_lib_protos_rpc_pb.ListPeersRequest,
    responseType: src_lib_protos_rpc_pb.ListPeersResponse,
    requestSerialize: serialize_lnrpc_ListPeersRequest,
    requestDeserialize: deserialize_lnrpc_ListPeersRequest,
    responseSerialize: serialize_lnrpc_ListPeersResponse,
    responseDeserialize: deserialize_lnrpc_ListPeersResponse,
  },
  addInvoice: {
    path: '/lnrpc.Lightning/AddInvoice',
    requestStream: false,
    responseStream: false,
    requestType: src_lib_protos_rpc_pb.Invoice,
    responseType: src_lib_protos_rpc_pb.AddInvoiceResponse,
    requestSerialize: serialize_lnrpc_Invoice,
    requestDeserialize: deserialize_lnrpc_Invoice,
    responseSerialize: serialize_lnrpc_AddInvoiceResponse,
    responseDeserialize: deserialize_lnrpc_AddInvoiceResponse,
  },
  listInvoices: {
    path: '/lnrpc.Lightning/ListInvoices',
    requestStream: false,
    responseStream: false,
    requestType: src_lib_protos_rpc_pb.ListInvoiceRequest,
    responseType: src_lib_protos_rpc_pb.ListInvoiceResponse,
    requestSerialize: serialize_lnrpc_ListInvoiceRequest,
    requestDeserialize: deserialize_lnrpc_ListInvoiceRequest,
    responseSerialize: serialize_lnrpc_ListInvoiceResponse,
    responseDeserialize: deserialize_lnrpc_ListInvoiceResponse,
  },
  sendPaymentSync: {
    path: '/lnrpc.Lightning/SendPaymentSync',
    requestStream: false,
    responseStream: false,
    requestType: src_lib_protos_rpc_pb.SendRequest,
    responseType: src_lib_protos_rpc_pb.SendResponse,
    requestSerialize: serialize_lnrpc_SendRequest,
    requestDeserialize: deserialize_lnrpc_SendRequest,
    responseSerialize: serialize_lnrpc_SendResponse,
    responseDeserialize: deserialize_lnrpc_SendResponse,
  },
  closeChannel: {
    path: '/lnrpc.Lightning/CloseChannel',
    requestStream: false,
    responseStream: true,
    requestType: src_lib_protos_rpc_pb.CloseChannelRequest,
    responseType: src_lib_protos_rpc_pb.CloseStatusUpdate,
    requestSerialize: serialize_lnrpc_CloseChannelRequest,
    requestDeserialize: deserialize_lnrpc_CloseChannelRequest,
    responseSerialize: serialize_lnrpc_CloseStatusUpdate,
    responseDeserialize: deserialize_lnrpc_CloseStatusUpdate,
  },
};

exports.LightningClient = grpc.makeGenericClientConstructor(LightningService);
