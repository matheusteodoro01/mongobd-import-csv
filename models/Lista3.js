var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Lista3 = new Schema({
    name: String,
    email: String,
    phone: String,
    recipient: String,
    model: String,
    sendEmail: Boolean

});

module.exports = Lista3;
