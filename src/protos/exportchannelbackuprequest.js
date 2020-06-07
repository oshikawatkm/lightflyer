// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.ExportChannelBackupRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.lnrpc.ChannelPoint');

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
proto.lnrpc.ExportChannelBackupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ExportChannelBackupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.ExportChannelBackupRequest.displayName = 'proto.lnrpc.ExportChannelBackupRequest';
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
proto.lnrpc.ExportChannelBackupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ExportChannelBackupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ExportChannelBackupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.ExportChannelBackupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chanPoint: (f = msg.getChanPoint()) && proto.lnrpc.ChannelPoint.toObject(includeInstance, f)
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
 * @return {!proto.lnrpc.ExportChannelBackupRequest}
 */
proto.lnrpc.ExportChannelBackupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ExportChannelBackupRequest;
  return proto.lnrpc.ExportChannelBackupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ExportChannelBackupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ExportChannelBackupRequest}
 */
proto.lnrpc.ExportChannelBackupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.ChannelPoint;
      reader.readMessage(value,proto.lnrpc.ChannelPoint.deserializeBinaryFromReader);
      msg.setChanPoint(value);
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
proto.lnrpc.ExportChannelBackupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.ExportChannelBackupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ExportChannelBackupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.ExportChannelBackupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChanPoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.lnrpc.ChannelPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional ChannelPoint chan_point = 1;
 * @return {?proto.lnrpc.ChannelPoint}
 */
proto.lnrpc.ExportChannelBackupRequest.prototype.getChanPoint = function() {
  return /** @type{?proto.lnrpc.ChannelPoint} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.ChannelPoint, 1));
};


/**
 * @param {?proto.lnrpc.ChannelPoint|undefined} value
 * @return {!proto.lnrpc.ExportChannelBackupRequest} returns this
*/
proto.lnrpc.ExportChannelBackupRequest.prototype.setChanPoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lnrpc.ExportChannelBackupRequest} returns this
 */
proto.lnrpc.ExportChannelBackupRequest.prototype.clearChanPoint = function() {
  return this.setChanPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lnrpc.ExportChannelBackupRequest.prototype.hasChanPoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


