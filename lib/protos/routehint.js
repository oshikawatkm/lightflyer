// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.RouteHint');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.lnrpc.HopHint');

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
proto.lnrpc.RouteHint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.RouteHint.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.RouteHint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.RouteHint.displayName = 'proto.lnrpc.RouteHint';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.RouteHint.repeatedFields_ = [1];



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
proto.lnrpc.RouteHint.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.RouteHint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.RouteHint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.RouteHint.toObject = function(includeInstance, msg) {
  var f, obj = {
    hopHintsList: jspb.Message.toObjectList(msg.getHopHintsList(),
    proto.lnrpc.HopHint.toObject, includeInstance)
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
 * @return {!proto.lnrpc.RouteHint}
 */
proto.lnrpc.RouteHint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.RouteHint;
  return proto.lnrpc.RouteHint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.RouteHint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.RouteHint}
 */
proto.lnrpc.RouteHint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.HopHint;
      reader.readMessage(value,proto.lnrpc.HopHint.deserializeBinaryFromReader);
      msg.addHopHints(value);
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
proto.lnrpc.RouteHint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.RouteHint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.RouteHint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.RouteHint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHopHintsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.lnrpc.HopHint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated HopHint hop_hints = 1;
 * @return {!Array<!proto.lnrpc.HopHint>}
 */
proto.lnrpc.RouteHint.prototype.getHopHintsList = function() {
  return /** @type{!Array<!proto.lnrpc.HopHint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.HopHint, 1));
};


/**
 * @param {!Array<!proto.lnrpc.HopHint>} value
 * @return {!proto.lnrpc.RouteHint} returns this
*/
proto.lnrpc.RouteHint.prototype.setHopHintsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.lnrpc.HopHint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lnrpc.HopHint}
 */
proto.lnrpc.RouteHint.prototype.addHopHints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.lnrpc.HopHint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lnrpc.RouteHint} returns this
 */
proto.lnrpc.RouteHint.prototype.clearHopHintsList = function() {
  return this.setHopHintsList([]);
};

