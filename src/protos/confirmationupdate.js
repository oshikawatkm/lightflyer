// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.ConfirmationUpdate');

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
proto.lnrpc.ConfirmationUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ConfirmationUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.ConfirmationUpdate.displayName = 'proto.lnrpc.ConfirmationUpdate';
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
proto.lnrpc.ConfirmationUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ConfirmationUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ConfirmationUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.ConfirmationUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockSha: msg.getBlockSha_asB64(),
    blockHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    numConfsLeft: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.lnrpc.ConfirmationUpdate}
 */
proto.lnrpc.ConfirmationUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ConfirmationUpdate;
  return proto.lnrpc.ConfirmationUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ConfirmationUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ConfirmationUpdate}
 */
proto.lnrpc.ConfirmationUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockSha(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBlockHeight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumConfsLeft(value);
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
proto.lnrpc.ConfirmationUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.ConfirmationUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ConfirmationUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.ConfirmationUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockSha_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNumConfsLeft();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional bytes block_sha = 1;
 * @return {string}
 */
proto.lnrpc.ConfirmationUpdate.prototype.getBlockSha = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes block_sha = 1;
 * This is a type-conversion wrapper around `getBlockSha()`
 * @return {string}
 */
proto.lnrpc.ConfirmationUpdate.prototype.getBlockSha_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockSha()));
};


/**
 * optional bytes block_sha = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockSha()`
 * @return {!Uint8Array}
 */
proto.lnrpc.ConfirmationUpdate.prototype.getBlockSha_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockSha()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.lnrpc.ConfirmationUpdate} returns this
 */
proto.lnrpc.ConfirmationUpdate.prototype.setBlockSha = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int32 block_height = 2;
 * @return {number}
 */
proto.lnrpc.ConfirmationUpdate.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.ConfirmationUpdate} returns this
 */
proto.lnrpc.ConfirmationUpdate.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 num_confs_left = 3;
 * @return {number}
 */
proto.lnrpc.ConfirmationUpdate.prototype.getNumConfsLeft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.ConfirmationUpdate} returns this
 */
proto.lnrpc.ConfirmationUpdate.prototype.setNumConfsLeft = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


