var mongoose = require('../modules/db/mongo_db');
var PostSchema = new mongoose.Schema({
    mobile: {type:String},
    post: {type:String},
    time: {type:Date}
});

module.exports = mongoose.model('Post',PostSchema);