// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.GetInfoResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.lnrpc.Chain');
goog.require('proto.lnrpc.Feature');

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
proto.lnrpc.GetInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.GetInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.GetInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.GetInfoResponse.displayName = 'proto.lnrpc.GetInfoResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.GetInfoResponse.repeatedFields_ = [16,12];



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
proto.lnrpc.GetInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.GetInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.GetInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.GetInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 14, ""),
    commitHash: jspb.Message.getFieldWithDefault(msg, 20, ""),
    identityPubkey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    alias: jspb.Message.getFieldWithDefault(msg, 2, ""),
    color: jspb.Message.getFieldWithDefault(msg, 17, ""),
    numPendingChannels: jspb.Message.getFieldWithDefault(msg, 3, 0),
    numActiveChannels: jspb.Message.getFieldWithDefault(msg, 4, 0),
    numInactiveChannels: jspb.Message.getFieldWithDefault(msg, 15, 0),
    numPeers: jspb.Message.getFieldWithDefault(msg, 5, 0),
    blockHeight: jspb.Message.getFieldWithDefault(msg, 6, 0),
    blockHash: jspb.Message.getFieldWithDefault(msg, 8, ""),
    bestHeaderTimestamp: jspb.Message.getFieldWithDefault(msg, 13, 0),
    syncedToChain: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    syncedToGraph: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    testnet: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    chainsList: jspb.Message.toObjectList(msg.getChainsList(),
    proto.lnrpc.Chain.toObject, includeInstance),
    urisList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    featuresMap: (f = msg.getFeaturesMap()) ? f.toObject(includeInstance, proto.lnrpc.Feature.toObject) : []
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
 * @return {!proto.lnrpc.GetInfoResponse}
 */
proto.lnrpc.GetInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.GetInfoResponse;
  return proto.lnrpc.GetInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.GetInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.GetInfoResponse}
 */
proto.lnrpc.GetInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitHash(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityPubkey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumPendingChannels(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumActiveChannels(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumInactiveChannels(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumPeers(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockHeight(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockHash(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBestHeaderTimestamp(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSyncedToChain(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSyncedToGraph(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTestnet(value);
      break;
    case 16:
      var value = new proto.lnrpc.Chain;
      reader.readMessage(value,proto.lnrpc.Chain.deserializeBinaryFromReader);
      msg.addChains(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addUris(value);
      break;
    case 19:
      var value = msg.getFeaturesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.lnrpc.Feature.deserializeBinaryFromReader, 0, new proto.lnrpc.Feature());
         });
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
proto.lnrpc.GetInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.GetInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.GetInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.GetInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getCommitHash();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getIdentityPubkey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAlias();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getNumPendingChannels();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getNumActiveChannels();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getNumInactiveChannels();
  if (f !== 0) {
    writer.writeUint32(
      15,
      f
    );
  }
  f = message.getNumPeers();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getBlockHash();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getBestHeaderTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getSyncedToChain();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getSyncedToGraph();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getTestnet();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getChainsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.lnrpc.Chain.serializeBinaryToWriter
    );
  }
  f = message.getUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getFeaturesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(19, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.lnrpc.Feature.serializeBinaryToWriter);
  }
};


/**
 * optional string version = 14;
 * @return {string}
 */
proto.lnrpc.GetInfoResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string commit_hash = 20;
 * @return {string}
 */
proto.lnrpc.GetInfoResponse.prototype.getCommitHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setCommitHash = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string identity_pubkey = 1;
 * @return {string}
 */
proto.lnrpc.GetInfoResponse.prototype.getIdentityPubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setIdentityPubkey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string alias = 2;
 * @return {string}
 */
proto.lnrpc.GetInfoResponse.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string color = 17;
 * @return {string}
 */
proto.lnrpc.GetInfoResponse.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional uint32 num_pending_channels = 3;
 * @return {number}
 */
proto.lnrpc.GetInfoResponse.prototype.getNumPendingChannels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setNumPendingChannels = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 num_active_channels = 4;
 * @return {number}
 */
proto.lnrpc.GetInfoResponse.prototype.getNumActiveChannels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setNumActiveChannels = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 num_inactive_channels = 15;
 * @return {number}
 */
proto.lnrpc.GetInfoResponse.prototype.getNumInactiveChannels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setNumInactiveChannels = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional uint32 num_peers = 5;
 * @return {number}
 */
proto.lnrpc.GetInfoResponse.prototype.getNumPeers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setNumPeers = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 block_height = 6;
 * @return {number}
 */
proto.lnrpc.GetInfoResponse.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string block_hash = 8;
 * @return {string}
 */
proto.lnrpc.GetInfoResponse.prototype.getBlockHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setBlockHash = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 best_header_timestamp = 13;
 * @return {number}
 */
proto.lnrpc.GetInfoResponse.prototype.getBestHeaderTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setBestHeaderTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional bool synced_to_chain = 9;
 * @return {boolean}
 */
proto.lnrpc.GetInfoResponse.prototype.getSyncedToChain = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setSyncedToChain = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool synced_to_graph = 18;
 * @return {boolean}
 */
proto.lnrpc.GetInfoResponse.prototype.getSyncedToGraph = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setSyncedToGraph = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional bool testnet = 10;
 * @return {boolean}
 */
proto.lnrpc.GetInfoResponse.prototype.getTestnet = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setTestnet = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * repeated Chain chains = 16;
 * @return {!Array<!proto.lnrpc.Chain>}
 */
proto.lnrpc.GetInfoResponse.prototype.getChainsList = function() {
  return /** @type{!Array<!proto.lnrpc.Chain>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.Chain, 16));
};


/**
 * @param {!Array<!proto.lnrpc.Chain>} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
*/
proto.lnrpc.GetInfoResponse.prototype.setChainsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.lnrpc.Chain=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lnrpc.Chain}
 */
proto.lnrpc.GetInfoResponse.prototype.addChains = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.lnrpc.Chain, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.clearChainsList = function() {
  return this.setChainsList([]);
};


/**
 * repeated string uris = 12;
 * @return {!Array<string>}
 */
proto.lnrpc.GetInfoResponse.prototype.getUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.setUrisList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.addUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.clearUrisList = function() {
  return this.setUrisList([]);
};


/**
 * map<uint32, Feature> features = 19;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.lnrpc.Feature>}
 */
proto.lnrpc.GetInfoResponse.prototype.getFeaturesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.lnrpc.Feature>} */ (
      jspb.Message.getMapField(this, 19, opt_noLazyCreate,
      proto.lnrpc.Feature));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.lnrpc.GetInfoResponse} returns this
 */
proto.lnrpc.GetInfoResponse.prototype.clearFeaturesMap = function() {
  this.getFeaturesMap().clear();
  return this;};


