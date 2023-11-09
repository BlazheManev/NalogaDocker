var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CarSchema = new Schema({
	'carBrend' : String,
	'carModel' : String,
	'manufacturingYear' : Date,
	'color' : String,
	'isAutomatic' : Boolean,
	'price' : Number
});

module.exports = mongoose.model('Car', CarSchema);
