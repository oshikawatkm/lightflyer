const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReqHistorySchema = new Schema({
  workspace: {
    type: Schema.Types.ObjectId,
    ref: 'workspaces'
  },
  request: { // ex. lnrpc.ChangePasswordRequest or GET /v1/channels
    type: String,
    required: true,
  },
  sender: {  // Sender Node Name
    type: String,
    required: true,
  },
  receiver: {  // Receiver Node Name
    type: String,
  },
  type: { // HTTP or gRPC
    type: String,
    required: true,
  },
  timestamp: { 
    type: Date, 
    default: Date.now()
  }
})

mongoose.model('reqhistorys', ReqHistorySchema);