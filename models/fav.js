var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;


var favSchema = new Schema({
	postedBy: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
	},

	dishes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Dish'
	}]

}, {timestamps: true});

module.exports = mongoose.model('Fav', favSchema);