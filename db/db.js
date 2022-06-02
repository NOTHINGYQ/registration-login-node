const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
// we don't need these options, because they are no longer supported
// const connectionOptions = {useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify: false};
//connect
mongoose.connect(process.env.MONGODB_URI);
//
mongoose.Promise = global.Promise;

module.exports={
    User: require('../model/user')
}