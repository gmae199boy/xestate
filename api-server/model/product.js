var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

const ProductSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
    },
    roomType: {
        type: String,
    },
    dealType: {
        type: String,
    },
    price: {
        type: Number,
    },
    address: {
        type: String,
    },
    registDealer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dealer',
    },
    progress: {
        type: String,
    },
    blockNumber: {
        
    }
});

ProductSchema.statics.findByProductName = async function(productName) {
    return await this.findOne({ name: productName });
};

ProductSchema.statics.findByProductId = async function(productId) {
    return await this.findOne({ id: productId });
};

ProductSchema.plugin(autoIncrement.plugin, {
	model : 'Product',
	field : 'id',
	startAt : 0, //시작
	increment : 1 // 증가
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;