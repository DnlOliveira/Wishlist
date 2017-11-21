var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PeopleSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    credentials: {
        username: { type: String },
        password: { type: String }
    },
    wishlist: { type: Array }
});

var People = mongoose.model("People", PeopleSchema);
module.exports = People;