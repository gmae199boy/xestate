import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const UserSchema = new mongoose.Schema({
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
    latelySeeRoom: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        }
    ],
});

UserSchema.statics.findByProductName = async function(userName) {
    return await this.findOne({ name: userName });
};

UserSchema.statics.findByProductId = async function(userId) {
    return await this.findOne({ id: userId });
};

UserSchema.plugin(autoIncrement.plugin, {
	model : 'User',
	field : 'id',
	startAt : 0, //시작
	increment : 1 // 증가
});

const User = mongoose.model('Product', UserSchema);
export {User};