// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.KeyDescriptor');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.lnrpc.KeyLocator');

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
proto.lnrpc.KeyDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.KeyDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.KeyDescriptor.displayName = 'proto.lnrpc.KeyDescriptor';
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
proto.lnrpc.KeyDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.KeyDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.KeyDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.KeyDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    rawKeyBytes: msg.getRawKeyBytes_asB64(),
    keyLoc: (f = msg.getKeyLoc()) && proto.lnrpc.KeyLocator.toObject(includeInstance, f)
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
 * @return {!proto.lnrpc.KeyDescriptor}
 */
proto.lnrpc.KeyDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.KeyDescriptor;
  return proto.lnrpc.KeyDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.KeyDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.KeyDescriptor}
 */
proto.lnrpc.KeyDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRawKeyBytes(value);
      break;
    case 2:
      var value = new proto.lnrpc.KeyLocator;
      reader.readMessage(value,proto.lnrpc.KeyLocator.deserializeBinaryFromReader);
      msg.setKeyLoc(value);
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
proto.lnrpc.KeyDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.KeyDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.KeyDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.KeyDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRawKeyBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getKeyLoc();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.lnrpc.KeyLocator.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes raw_key_bytes = 1;
 * @return {string}
 */
proto.lnrpc.KeyDescriptor.prototype.getRawKeyBytes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes raw_key_bytes = 1;
 * This is a type-conversion wrapper around `getRawKeyBytes()`
 * @return {string}
 */
proto.lnrpc.KeyDescriptor.prototype.getRawKeyBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRawKeyBytes()));
};


/**
 * optional bytes raw_key_bytes = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRawKeyBytes()`
 * @return {!Uint8Array}
 */
proto.lnrpc.KeyDescriptor.prototype.getRawKeyBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRawKeyBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.lnrpc.KeyDescriptor} returns this
 */
proto.lnrpc.KeyDescriptor.prototype.setRawKeyBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional KeyLocator key_loc = 2;
 * @return {?proto.lnrpc.KeyLocator}
 */
proto.lnrpc.KeyDescriptor.prototype.getKeyLoc = function() {
  return /** @type{?proto.lnrpc.KeyLocator} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.KeyLocator, 2));
};


/**
 * @param {?proto.lnrpc.KeyLocator|undefined} value
 * @return {!proto.lnrpc.KeyDescriptor} returns this
*/
proto.lnrpc.KeyDescriptor.prototype.setKeyLoc = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lnrpc.KeyDescriptor} returns this
 */
proto.lnrpc.KeyDescriptor.prototype.clearKeyLoc = function() {
  return this.setKeyLoc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lnrpc.KeyDescriptor.prototype.hasKeyLoc = function() {
  return jspb.Message.getField(this, 2) != null;
};


