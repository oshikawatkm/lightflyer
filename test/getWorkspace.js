const mongoose = require('mongoose');
require ('../lib/models/Workspace');
const Workspace = mongoose.model('workspaces');

const db = require('../cfg/db')

mongoose.Promise = global.Promise;

mongoose.connect(db.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



Workspace.find({name: "test-ws"})
      .then(res => {
        console.log("Hello")
        console.log(res)
      })



