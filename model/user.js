/*
the user model used mongoose to define the schema for the users collection saved in mongodb.
the exported mongoose model object gives full access to perform crud operations on users in mongodb.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username:{type: String, unique:true, required: true},
    hash:{type:String, required:true},
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    createdDate:{type:Date, default:Date.now}
});
schema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:function (doc,ret){
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User',schema);