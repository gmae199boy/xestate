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
    saleType: {
        type: String,
    },
    salePrice: {
        type: Number,
    },
    deposit: {
        type: Number,
    },
    monthlyPrice: {
        type: Number,
    },
    jeonse: {
        type: Number,
    },
    address: {
        type: String,
    },
    registBroker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Broker',
    },
    progress: {
        type: String,
    },

    // 필터링용 DB
    area: {
        type: String,
    },
    nearStation: [
        {
            name: {
                type: String,
            },
            walkTime: {
                type: Number,
            }
        }
    ]
});

ProductSchema.statics.findByProductName = async function(productName) {
    return await this.findOne({ name: productName });
};

ProductSchema.statics.findByProductId = async function(productId) {
    return await this.findOne({ id: productId });
};

ProductSchema.statics.getProductList = async function( page = 1 ) {
    const perPage = 20;
    return await this.find({}, { 
        _id: 0, 
        name: 1,
        roomType: 1,
        saleType: 1,
    })
    .sort({ $natural: 1 })
    .skip((page - 1) * perPage)
    .limit(perPage)
    .lean();
    // .exec((err, result) => {
    //     if (err) {console.log(err);return null;}
    //     return result;
    // });
}

ProductSchema.plugin(autoIncrement.plugin, {
	model : 'Product',
	field : 'id',
	startAt : 0, //시작
	increment : 1 // 증가
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;