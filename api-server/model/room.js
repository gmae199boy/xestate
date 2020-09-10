import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const RoomSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    roomType: {
        type: Number,
        required: true,
    },
    deposit: {
        type: Number,
    },
    monthlyPayment: {
        type: Number,
    },
    address: {
        type: String,
    },
    registLessor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lessor',
    },
    state: {
        type: Number,
    },
    reported: [
        {
            // reportLessee: {
            //     type: mongoose.Schema.Types.ObjectId,
            //     ref: 'Lessee',
            // },
            reason: {
                type: String,
            },
            stars: {
                type: Number,
            },
        }
    ],

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
            },
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
    ],
});

RoomSchema.statics.findByRoomName = async function(roomName) {
    return await this.findOne({ name: roomName });
};

RoomSchema.statics.findByRoomId = async function(roomId) {
    return await this.findOne({ id: roomId });
};

RoomSchema.statics.getRoomList = async function( page = 1 ) {
    const perPage = 20;
    return await this.find({}, { 
        _id: 0, 
        id: 1,
        name: 1,
        roomType: 1,
        deposit: 1,
        monthlyPayment: 1,
        address: 1,
        state: 1,
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

RoomSchema.statics.Save = async function(instant) {
    if(instant.id != undefined) return await instant.save();

    let idNum = await this.estimatedDocumentCount({});

    instant.id = idNum;
    return await instant.save();
}

// RoomSchema.plugin(autoIncrement.plugin, {
// 	model : 'Room',
// 	field : 'id',
// 	startAt : 0, //시작
// 	increment : 1 // 증가
// });

const Room = mongoose.model('Room', RoomSchema);
export {Room};