var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

const PostSchema = new mongoose.Schema({
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
    }
});

PostSchema.statics.findByPostName = async function(postName) {
    return await this.findOne({ name: postName });
};

PostSchema.statics.findByPostId = async function(postId) {
    return await this.findOne({ postId });
}

PostSchema.plugin(autoIncrement.plugin,{
	model : 'Post',
	field : 'id',
	startAt : 0, //시작
	increment : 1 // 증가
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;