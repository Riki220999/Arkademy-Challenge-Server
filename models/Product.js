const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const productSchema = new Schema({
	title : {
		type : String,
		required : true
	},
	image : {
		type : String,
		required : true
	},
	price : {
		type : String,
		required : true
	},
	descriptions : {
		type : String,
		required : true
	}
})

productSchema.plugin(mongoosePaginate)

const Product = mongoose.model("product", productSchema);

module.exports = Product;