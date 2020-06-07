// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.OpenChannelRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.lnrpc.FundingShim');

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
proto.lnrpc.OpenChannelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.OpenChannelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.OpenChannelRequest.displayName = 'proto.lnrpc.OpenChannelRequest';
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
proto.lnrpc.OpenChannelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.OpenChannelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.OpenChannelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.OpenChannelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodePubkey: msg.getNodePubkey_asB64(),
    nodePubkeyString: jspb.Message.getFieldWithDefault(msg, 3, ""),
    localFundingAmount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pushSat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    targetConf: jspb.Message.getFieldWithDefault(msg, 6, 0),
    satPerByte: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pb_private: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    minHtlcMsat: jspb.Message.getFieldWithDefault(msg, 9, 0),
    remoteCsvDelay: jspb.Message.getFieldWithDefault(msg, 10, 0),
    minConfs: jspb.Message.getFieldWithDefault(msg, 11, 0),
    spendUnconfirmed: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    closeAddress: jspb.Message.getFieldWithDefault(msg, 13, ""),
    fundingShim: (f = msg.getFundingShim()) && proto.lnrpc.FundingShim.toObject(includeInstance, f)
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
 * @return {!proto.lnrpc.OpenChannelRequest}
 */
proto.lnrpc.OpenChannelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.OpenChannelRequest;
  return proto.lnrpc.OpenChannelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.OpenChannelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.OpenChannelRequest}
 */
proto.lnrpc.OpenChannelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNodePubkey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodePubkeyString(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLocalFundingAmount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPushSat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetConf(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSatPerByte(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrivate(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMinHtlcMsat(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRemoteCsvDelay(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinConfs(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSpendUnconfirmed(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCloseAddress(value);
      break;
    case 14:
      var value = new proto.lnrpc.FundingShim;
      reader.readMessage(value,proto.lnrpc.FundingShim.deserializeBinaryFromReader);
      msg.setFundingShim(value);
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
proto.lnrpc.OpenChannelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.OpenChannelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.OpenChannelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.OpenChannelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodePubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getNodePubkeyString();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLocalFundingAmount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getPushSat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTargetConf();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getSatPerByte();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getPrivate();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getMinHtlcMsat();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getRemoteCsvDelay();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getMinConfs();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getSpendUnconfirmed();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getCloseAddress();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getFundingShim();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.lnrpc.FundingShim.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes node_pubkey = 2;
 * @return {string}
 */
proto.lnrpc.OpenChannelRequest.prototype.getNodePubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes node_pubkey = 2;
 * This is a type-conversion wrapper around `getNodePubkey()`
 * @return {string}
 */
proto.lnrpc.OpenChannelRequest.prototype.getNodePubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNodePubkey()));
};


/**
 * optional bytes node_pubkey = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNodePubkey()`
 * @return {!Uint8Array}
 */
proto.lnrpc.OpenChannelRequest.prototype.getNodePubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNodePubkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.lnrpc.OpenChannelRequest} returns this
 */
proto.lnrpc.OpenChannelRequest.prototype.setNodePubkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string node_pubkey_string = 3;
 * @return {string}
 */
proto.lnrpc.OpenChannelRequest.prototype.getNodePubkeyString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.OpenChannelRequest} returns this
 */
proto.lnrpc.OpenChannelRequest.prototype.setNodePubkeyString = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 local_funding_amount = 4;
 * @return {number}
 */
proto.lnrpc.OpenChannelRequest.prototype.getLocalFundingAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.OpenChannelRequest} returns this
 */
proto.lnrpc.OpenChannelRequest.prototype.setLocalFundingAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 push_sat = 5;
 * @return {number}
 */
proto.lnrpc.OpenChannelRequest.prototype.getPushSat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.OpenChannelRequest} returns this
 */
proto.lnrpc.OpenChannelRequest.prototype.setPushSat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 target_conf = 6;
 * @return {number}
 */
proto.lnrpc.OpenChannelRequest.prototype.getTargetConf = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.OpenChannelRequest} returns this
 */
proto.lnrpc.OpenChannelRequest.prototype.setTargetConf = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 sat_per_byte = 7;
 * @return {number}
 */
proto.lnrpc.OpenChannelRequest.prototype.getSatPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.OpenChannelRequest} returns this
 */
proto.lnrpc.OpenChannelRequest.prototype.setSatPerByte = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool private = 8;
 * @return {boolean}
 */
proto.lnrpc.OpenChannelRequest.prototype.getPrivate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lnrpc.OpenChannelRequest} returns this
 */
proto.lnrpc.OpenChannelRequest.prototype.setPrivate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional int64 min_htlc_msat = 9;
 * @return {number}
 */
proto.lnrpc.OpenChannelRequest.prototype.getMinHtlcMsat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.OpenChannelRequest} returns this
 */
proto.lnrpc.OpenChannelRequest.prototype.setMinHtlcMsat = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 remote_csv_delay = 10;
 * @return {number}
 */
proto.lnrpc.OpenChannelRequest.prototype.getRemoteCsvDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.OpenChannelRequest} returns this
 */
proto.lnrpc.OpenChannelRequest.prototype.setRemoteCsvDelay = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 min_confs = 11;
 * @return {number}
 */
proto.lnrpc.OpenChannelRequest.prototype.getMinConfs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.OpenChannelRequest} returns this
 */
proto.lnrpc.OpenChannelRequest.prototype.setMinConfs = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional bool spend_unconfirmed = 12;
 * @return {boolean}
 */
proto.lnrpc.OpenChannelRequest.prototype.getSpendUnconfirmed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lnrpc.OpenChannelRequest} returns this
 */
proto.lnrpc.OpenChannelRequest.prototype.setSpendUnconfirmed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional string close_address = 13;
 * @return {string}
 */
proto.lnrpc.OpenChannelRequest.prototype.getCloseAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.OpenChannelRequest} returns this
 */
proto.lnrpc.OpenChannelRequest.prototype.setCloseAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional FundingShim funding_shim = 14;
 * @return {?proto.lnrpc.FundingShim}
 */
proto.lnrpc.OpenChannelRequest.prototype.getFundingShim = function() {
  return /** @type{?proto.lnrpc.FundingShim} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.FundingShim, 14));
};


/**
 * @param {?proto.lnrpc.FundingShim|undefined} value
 * @return {!proto.lnrpc.OpenChannelRequest} returns this
*/
proto.lnrpc.OpenChannelRequest.prototype.setFundingShim = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lnrpc.OpenChannelRequest} returns this
 */
proto.lnrpc.OpenChannelRequest.prototype.clearFundingShim = function() {
  return this.setFundingShim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lnrpc.OpenChannelRequest.prototype.hasFundingShim = function() {
  return jspb.Message.getField(this, 14) != null;
};


