import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const LessorSchema = new mongoose.Schema({
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
            ref: 'Room',
        }
    ],
    review: [
        {
            auth: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Lessee',
            },
            stars: {
                type: Number,
            },
            content: {
                type: String,
            },
        }
    ]
});

LessorSchema.statics.findByBrokerName = async function(lessorName) {
    return await this.findOne({ name: lessorrName });
};

LessorSchema.statics.findByBrokerId = async function(lessorId) {
    return await this.findOne({ id: lessorId });
};

LessorSchema.statics.Save = async function(instant) {
    let idNum = await this.estimatedDocumentCount({});
    
    instant.id = idNum;
    return await instant.save();
}

// LessorSchema.plugin(autoIncrement.plugin, {
// 	model : 'Broker',
// 	field : 'id',
// 	startAt : 0, //시작
// 	increment : 1 // 증가
// });

const Lessor = mongoose.model('Lessor', LessorSchema);
export {Lessor};