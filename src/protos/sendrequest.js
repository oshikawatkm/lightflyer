// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.SendRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.lnrpc.FeeLimit');

goog.forwardDeclare('proto.lnrpc.FeatureBit');
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
proto.lnrpc.SendRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.SendRequest.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.SendRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.SendRequest.displayName = 'proto.lnrpc.SendRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.SendRequest.repeatedFields_ = [15];



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
proto.lnrpc.SendRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.SendRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.SendRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.SendRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dest: msg.getDest_asB64(),
    destString: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    amtMsat: jspb.Message.getFieldWithDefault(msg, 12, 0),
    paymentHash: msg.getPaymentHash_asB64(),
    paymentHashString: jspb.Message.getFieldWithDefault(msg, 5, ""),
    paymentRequest: jspb.Message.getFieldWithDefault(msg, 6, ""),
    finalCltvDelta: jspb.Message.getFieldWithDefault(msg, 7, 0),
    feeLimit: (f = msg.getFeeLimit()) && proto.lnrpc.FeeLimit.toObject(includeInstance, f),
    outgoingChanId: jspb.Message.getFieldWithDefault(msg, 9, "0"),
    lastHopPubkey: msg.getLastHopPubkey_asB64(),
    cltvLimit: jspb.Message.getFieldWithDefault(msg, 10, 0),
    destCustomRecordsMap: (f = msg.getDestCustomRecordsMap()) ? f.toObject(includeInstance, undefined) : [],
    allowSelfPayment: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    destFeaturesList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f
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
 * @return {!proto.lnrpc.SendRequest}
 */
proto.lnrpc.SendRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.SendRequest;
  return proto.lnrpc.SendRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.SendRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.SendRequest}
 */
proto.lnrpc.SendRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestString(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmt(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmtMsat(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPaymentHash(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentHashString(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentRequest(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFinalCltvDelta(value);
      break;
    case 8:
      var value = new proto.lnrpc.FeeLimit;
      reader.readMessage(value,proto.lnrpc.FeeLimit.deserializeBinaryFromReader);
      msg.setFeeLimit(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setOutgoingChanId(value);
      break;
    case 13:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLastHopPubkey(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCltvLimit(value);
      break;
    case 11:
      var value = msg.getDestCustomRecordsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readBytes, null, 0, "");
         });
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowSelfPayment(value);
      break;
    case 15:
      var value = /** @type {!Array<!proto.lnrpc.FeatureBit>} */ (reader.readPackedEnum());
      msg.setDestFeaturesList(value);
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
proto.lnrpc.SendRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.SendRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.SendRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.SendRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDest_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDestString();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAmtMsat();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getPaymentHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getPaymentHashString();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPaymentRequest();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFinalCltvDelta();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getFeeLimit();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.lnrpc.FeeLimit.serializeBinaryToWriter
    );
  }
  f = message.getOutgoingChanId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      9,
      f
    );
  }
  f = message.getLastHopPubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      13,
      f
    );
  }
  f = message.getCltvLimit();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getDestCustomRecordsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(11, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getAllowSelfPayment();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getDestFeaturesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      15,
      f
    );
  }
};


/**
 * optional bytes dest = 1;
 * @return {string}
 */
proto.lnrpc.SendRequest.prototype.getDest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes dest = 1;
 * This is a type-conversion wrapper around `getDest()`
 * @return {string}
 */
proto.lnrpc.SendRequest.prototype.getDest_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDest()));
};


/**
 * optional bytes dest = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDest()`
 * @return {!Uint8Array}
 */
proto.lnrpc.SendRequest.prototype.getDest_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDest()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.setDest = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string dest_string = 2;
 * @return {string}
 */
proto.lnrpc.SendRequest.prototype.getDestString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.setDestString = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 amt = 3;
 * @return {number}
 */
proto.lnrpc.SendRequest.prototype.getAmt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.setAmt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 amt_msat = 12;
 * @return {number}
 */
proto.lnrpc.SendRequest.prototype.getAmtMsat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.setAmtMsat = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional bytes payment_hash = 4;
 * @return {string}
 */
proto.lnrpc.SendRequest.prototype.getPaymentHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes payment_hash = 4;
 * This is a type-conversion wrapper around `getPaymentHash()`
 * @return {string}
 */
proto.lnrpc.SendRequest.prototype.getPaymentHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPaymentHash()));
};


/**
 * optional bytes payment_hash = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPaymentHash()`
 * @return {!Uint8Array}
 */
proto.lnrpc.SendRequest.prototype.getPaymentHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPaymentHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.setPaymentHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional string payment_hash_string = 5;
 * @return {string}
 */
proto.lnrpc.SendRequest.prototype.getPaymentHashString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.setPaymentHashString = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string payment_request = 6;
 * @return {string}
 */
proto.lnrpc.SendRequest.prototype.getPaymentRequest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.setPaymentRequest = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 final_cltv_delta = 7;
 * @return {number}
 */
proto.lnrpc.SendRequest.prototype.getFinalCltvDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.setFinalCltvDelta = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional FeeLimit fee_limit = 8;
 * @return {?proto.lnrpc.FeeLimit}
 */
proto.lnrpc.SendRequest.prototype.getFeeLimit = function() {
  return /** @type{?proto.lnrpc.FeeLimit} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.FeeLimit, 8));
};


/**
 * @param {?proto.lnrpc.FeeLimit|undefined} value
 * @return {!proto.lnrpc.SendRequest} returns this
*/
proto.lnrpc.SendRequest.prototype.setFeeLimit = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.clearFeeLimit = function() {
  return this.setFeeLimit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lnrpc.SendRequest.prototype.hasFeeLimit = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 outgoing_chan_id = 9;
 * @return {string}
 */
proto.lnrpc.SendRequest.prototype.getOutgoingChanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, "0"));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.setOutgoingChanId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 9, value);
};


/**
 * optional bytes last_hop_pubkey = 13;
 * @return {string}
 */
proto.lnrpc.SendRequest.prototype.getLastHopPubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * optional bytes last_hop_pubkey = 13;
 * This is a type-conversion wrapper around `getLastHopPubkey()`
 * @return {string}
 */
proto.lnrpc.SendRequest.prototype.getLastHopPubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLastHopPubkey()));
};


/**
 * optional bytes last_hop_pubkey = 13;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLastHopPubkey()`
 * @return {!Uint8Array}
 */
proto.lnrpc.SendRequest.prototype.getLastHopPubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLastHopPubkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.setLastHopPubkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 13, value);
};


/**
 * optional uint32 cltv_limit = 10;
 * @return {number}
 */
proto.lnrpc.SendRequest.prototype.getCltvLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.setCltvLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * map<uint64, bytes> dest_custom_records = 11;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!(string|Uint8Array)>}
 */
proto.lnrpc.SendRequest.prototype.getDestCustomRecordsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 11, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.clearDestCustomRecordsMap = function() {
  this.getDestCustomRecordsMap().clear();
  return this;};


/**
 * optional bool allow_self_payment = 14;
 * @return {boolean}
 */
proto.lnrpc.SendRequest.prototype.getAllowSelfPayment = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.setAllowSelfPayment = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * repeated FeatureBit dest_features = 15;
 * @return {!Array<!proto.lnrpc.FeatureBit>}
 */
proto.lnrpc.SendRequest.prototype.getDestFeaturesList = function() {
  return /** @type {!Array<!proto.lnrpc.FeatureBit>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<!proto.lnrpc.FeatureBit>} value
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.setDestFeaturesList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {!proto.lnrpc.FeatureBit} value
 * @param {number=} opt_index
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.addDestFeatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lnrpc.SendRequest} returns this
 */
proto.lnrpc.SendRequest.prototype.clearDestFeaturesList = function() {
  return this.setDestFeaturesList([]);
};


