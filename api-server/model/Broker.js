var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

const BrokerSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    registRoom: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        }
    ],
});

BrokerSchema.statics.findByBrokerName = async function(brokerName) {
    return await this.findOne({ name: brokerName });
};

BrokerSchema.statics.findByBrokerId = async function(brokerId) {
    return await this.findOne({ id: brokerId });
};

BrokerSchema.plugin(autoIncrement.plugin, {
	model : 'Broker',
	field : 'id',
	startAt : 0, //시작
	increment : 1 // 증가
});

const Broker = mongoose.model('Product', BrokerSchema);
module.exports = Broker;