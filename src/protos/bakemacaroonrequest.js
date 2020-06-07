// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.BakeMacaroonRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.lnrpc.MacaroonPermission');

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
proto.lnrpc.BakeMacaroonRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.BakeMacaroonRequest.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.BakeMacaroonRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.BakeMacaroonRequest.displayName = 'proto.lnrpc.BakeMacaroonRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.BakeMacaroonRequest.repeatedFields_ = [1];



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
proto.lnrpc.BakeMacaroonRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.BakeMacaroonRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.BakeMacaroonRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.BakeMacaroonRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.lnrpc.MacaroonPermission.toObject, includeInstance)
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
 * @return {!proto.lnrpc.BakeMacaroonRequest}
 */
proto.lnrpc.BakeMacaroonRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.BakeMacaroonRequest;
  return proto.lnrpc.BakeMacaroonRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.BakeMacaroonRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.BakeMacaroonRequest}
 */
proto.lnrpc.BakeMacaroonRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.MacaroonPermission;
      reader.readMessage(value,proto.lnrpc.MacaroonPermission.deserializeBinaryFromReader);
      msg.addPermissions(value);
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
proto.lnrpc.BakeMacaroonRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.BakeMacaroonRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.BakeMacaroonRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.BakeMacaroonRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.lnrpc.MacaroonPermission.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MacaroonPermission permissions = 1;
 * @return {!Array<!proto.lnrpc.MacaroonPermission>}
 */
proto.lnrpc.BakeMacaroonRequest.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.lnrpc.MacaroonPermission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.MacaroonPermission, 1));
};


/**
 * @param {!Array<!proto.lnrpc.MacaroonPermission>} value
 * @return {!proto.lnrpc.BakeMacaroonRequest} returns this
*/
proto.lnrpc.BakeMacaroonRequest.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.lnrpc.MacaroonPermission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lnrpc.MacaroonPermission}
 */
proto.lnrpc.BakeMacaroonRequest.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.lnrpc.MacaroonPermission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lnrpc.BakeMacaroonRequest} returns this
 */
proto.lnrpc.BakeMacaroonRequest.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


