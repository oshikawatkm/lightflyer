// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.ChannelPoint');
goog.provide('proto.lnrpc.ChannelPoint.FundingTxidCase');

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
proto.lnrpc.ChannelPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.lnrpc.ChannelPoint.oneofGroups_);
};
goog.inherits(proto.lnrpc.ChannelPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.ChannelPoint.displayName = 'proto.lnrpc.ChannelPoint';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.lnrpc.ChannelPoint.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.lnrpc.ChannelPoint.FundingTxidCase = {
  FUNDING_TXID_NOT_SET: 0,
  FUNDING_TXID_BYTES: 1,
  FUNDING_TXID_STR: 2
};

/**
 * @return {proto.lnrpc.ChannelPoint.FundingTxidCase}
 */
proto.lnrpc.ChannelPoint.prototype.getFundingTxidCase = function() {
  return /** @type {proto.lnrpc.ChannelPoint.FundingTxidCase} */(jspb.Message.computeOneofCase(this, proto.lnrpc.ChannelPoint.oneofGroups_[0]));
};



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
proto.lnrpc.ChannelPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ChannelPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ChannelPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.ChannelPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    fundingTxidBytes: msg.getFundingTxidBytes_asB64(),
    fundingTxidStr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    outputIndex: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.lnrpc.ChannelPoint}
 */
proto.lnrpc.ChannelPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ChannelPoint;
  return proto.lnrpc.ChannelPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ChannelPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ChannelPoint}
 */
proto.lnrpc.ChannelPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFundingTxidBytes(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFundingTxidStr(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOutputIndex(value);
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
proto.lnrpc.ChannelPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.ChannelPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ChannelPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.ChannelPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOutputIndex();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional bytes funding_txid_bytes = 1;
 * @return {string}
 */
proto.lnrpc.ChannelPoint.prototype.getFundingTxidBytes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes funding_txid_bytes = 1;
 * This is a type-conversion wrapper around `getFundingTxidBytes()`
 * @return {string}
 */
proto.lnrpc.ChannelPoint.prototype.getFundingTxidBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFundingTxidBytes()));
};


/**
 * optional bytes funding_txid_bytes = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFundingTxidBytes()`
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelPoint.prototype.getFundingTxidBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFundingTxidBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.lnrpc.ChannelPoint} returns this
 */
proto.lnrpc.ChannelPoint.prototype.setFundingTxidBytes = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.lnrpc.ChannelPoint.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lnrpc.ChannelPoint} returns this
 */
proto.lnrpc.ChannelPoint.prototype.clearFundingTxidBytes = function() {
  return jspb.Message.setOneofField(this, 1, proto.lnrpc.ChannelPoint.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lnrpc.ChannelPoint.prototype.hasFundingTxidBytes = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string funding_txid_str = 2;
 * @return {string}
 */
proto.lnrpc.ChannelPoint.prototype.getFundingTxidStr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.ChannelPoint} returns this
 */
proto.lnrpc.ChannelPoint.prototype.setFundingTxidStr = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.lnrpc.ChannelPoint.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lnrpc.ChannelPoint} returns this
 */
proto.lnrpc.ChannelPoint.prototype.clearFundingTxidStr = function() {
  return jspb.Message.setOneofField(this, 2, proto.lnrpc.ChannelPoint.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lnrpc.ChannelPoint.prototype.hasFundingTxidStr = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 output_index = 3;
 * @return {number}
 */
proto.lnrpc.ChannelPoint.prototype.getOutputIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.ChannelPoint} returns this
 */
proto.lnrpc.ChannelPoint.prototype.setOutputIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


