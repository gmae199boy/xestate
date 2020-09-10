import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const LesseeSchema = new mongoose.Schema({
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

LesseeSchema.statics.findByProductName = async function(lesseeName) {
    return await this.findOne({ name: lesseeName });
}

LesseeSchema.statics.findByProductId = async function(lesseeId) {
    return await this.findOne({ id: lesseeId });
}

LesseeSchema.statics.Save = async function(instant) {
    if(instant.id != undefined) return await instant.save();

    let idNum = await this.estimatedDocumentCount({});

    instant.id = idNum;
    return await instant.save();
}

// LesseeSchema.plugin(autoIncrement.plugin, {
// 	model : 'User',
// 	field : 'id',
// 	startAt : 0, //시작
// 	increment : 1 // 증가
// });

const Lessee = mongoose.model('Lessee', LesseeSchema);
export {Lessee};