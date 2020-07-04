const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Workspace');
const Workspace = mongoose.model('workspaces');

require ('../models/Channel');
const Channel = mongoose.model('channels');


mongoose.Promise = global.Promise;
mongoose.connect(db.mongoURI)
  .then(() => logger.info('MongoDB Connected...'))
  .catch(err => logger.error(err))


