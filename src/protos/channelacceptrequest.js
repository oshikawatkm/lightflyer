// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.ChannelAcceptRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ChannelAcceptRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ChannelAcceptRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.ChannelAcceptRequest.displayName = 'proto.lnrpc.ChannelAcceptRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ChannelAcceptRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ChannelAcceptRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.ChannelAcceptRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodePubkey: msg.getNodePubkey_asB64(),
    chainHash: msg.getChainHash_asB64(),
    pendingChanId: msg.getPendingChanId_asB64(),
    fundingAmt: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pushAmt: jspb.Message.getFieldWithDefault(msg, 5, 0),
    dustLimit: jspb.Message.getFieldWithDefault(msg, 6, 0),
    maxValueInFlight: jspb.Message.getFieldWithDefault(msg, 7, 0),
    channelReserve: jspb.Message.getFieldWithDefault(msg, 8, 0),
    minHtlc: jspb.Message.getFieldWithDefault(msg, 9, 0),
    feePerKw: jspb.Message.getFieldWithDefault(msg, 10, 0),
    csvDelay: jspb.Message.getFieldWithDefault(msg, 11, 0),
    maxAcceptedHtlcs: jspb.Message.getFieldWithDefault(msg, 12, 0),
    channelFlags: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ChannelAcceptRequest}
 */
proto.lnrpc.ChannelAcceptRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ChannelAcceptRequest;
  return proto.lnrpc.ChannelAcceptRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ChannelAcceptRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ChannelAcceptRequest}
 */
proto.lnrpc.ChannelAcceptRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNodePubkey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChainHash(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPendingChanId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFundingAmt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPushAmt(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDustLimit(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxValueInFlight(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChannelReserve(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinHtlc(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFeePerKw(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCsvDelay(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxAcceptedHtlcs(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChannelFlags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.ChannelAcceptRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ChannelAcceptRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.ChannelAcceptRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodePubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getChainHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPendingChanId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getFundingAmt();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getPushAmt();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getDustLimit();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getMaxValueInFlight();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getChannelReserve();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getMinHtlc();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getFeePerKw();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getCsvDelay();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getMaxAcceptedHtlcs();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getChannelFlags();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
};


/**
 * optional bytes node_pubkey = 1;
 * @return {string}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getNodePubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes node_pubkey = 1;
 * This is a type-conversion wrapper around `getNodePubkey()`
 * @return {string}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getNodePubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNodePubkey()));
};


/**
 * optional bytes node_pubkey = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNodePubkey()`
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getNodePubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNodePubkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.lnrpc.ChannelAcceptRequest} returns this
 */
proto.lnrpc.ChannelAcceptRequest.prototype.setNodePubkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes chain_hash = 2;
 * @return {string}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getChainHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes chain_hash = 2;
 * This is a type-conversion wrapper around `getChainHash()`
 * @return {string}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getChainHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChainHash()));
};


/**
 * optional bytes chain_hash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChainHash()`
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getChainHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChainHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.lnrpc.ChannelAcceptRequest} returns this
 */
proto.lnrpc.ChannelAcceptRequest.prototype.setChainHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes pending_chan_id = 3;
 * @return {string}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getPendingChanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes pending_chan_id = 3;
 * This is a type-conversion wrapper around `getPendingChanId()`
 * @return {string}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getPendingChanId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPendingChanId()));
};


/**
 * optional bytes pending_chan_id = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPendingChanId()`
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getPendingChanId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPendingChanId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.lnrpc.ChannelAcceptRequest} returns this
 */
proto.lnrpc.ChannelAcceptRequest.prototype.setPendingChanId = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint64 funding_amt = 4;
 * @return {number}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getFundingAmt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.ChannelAcceptRequest} returns this
 */
proto.lnrpc.ChannelAcceptRequest.prototype.setFundingAmt = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 push_amt = 5;
 * @return {number}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getPushAmt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.ChannelAcceptRequest} returns this
 */
proto.lnrpc.ChannelAcceptRequest.prototype.setPushAmt = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 dust_limit = 6;
 * @return {number}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getDustLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.ChannelAcceptRequest} returns this
 */
proto.lnrpc.ChannelAcceptRequest.prototype.setDustLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 max_value_in_flight = 7;
 * @return {number}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getMaxValueInFlight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.ChannelAcceptRequest} returns this
 */
proto.lnrpc.ChannelAcceptRequest.prototype.setMaxValueInFlight = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 channel_reserve = 8;
 * @return {number}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getChannelReserve = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.ChannelAcceptRequest} returns this
 */
proto.lnrpc.ChannelAcceptRequest.prototype.setChannelReserve = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 min_htlc = 9;
 * @return {number}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getMinHtlc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.ChannelAcceptRequest} returns this
 */
proto.lnrpc.ChannelAcceptRequest.prototype.setMinHtlc = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 fee_per_kw = 10;
 * @return {number}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getFeePerKw = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.ChannelAcceptRequest} returns this
 */
proto.lnrpc.ChannelAcceptRequest.prototype.setFeePerKw = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 csv_delay = 11;
 * @return {number}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getCsvDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.ChannelAcceptRequest} returns this
 */
proto.lnrpc.ChannelAcceptRequest.prototype.setCsvDelay = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 max_accepted_htlcs = 12;
 * @return {number}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getMaxAcceptedHtlcs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.ChannelAcceptRequest} returns this
 */
proto.lnrpc.ChannelAcceptRequest.prototype.setMaxAcceptedHtlcs = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint32 channel_flags = 13;
 * @return {number}
 */
proto.lnrpc.ChannelAcceptRequest.prototype.getChannelFlags = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.ChannelAcceptRequest} returns this
 */
proto.lnrpc.ChannelAcceptRequest.prototype.setChannelFlags = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


