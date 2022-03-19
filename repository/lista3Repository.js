
var mongoose = require('mongoose');
Lista3 = require('../models/Lista3');

var lista3 = mongoose.model('lista3', Lista3);
module.exports = lista3;