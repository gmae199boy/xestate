const createRoomSchema = {
    body: {
        type: 'object',
        required: [
            'name',
            'roomType',
            'address',
            'progress',
        ],
        properties: {
            name: {type: 'string'},
            roomType: {type: 'integer'},
            deposit: {type: 'integer'},
            monthlyPayment: {type: 'integer'},
            address: {type: 'string'},
            progress: {type: 'integer'},
        },
    },
    // response: {
    //     200: {
    //         type: 'object',
    //         properties: {
    //             name: {type: 'string'},
    //         }
    //     }
    // },
};

const readRoomSchema = {
    params: {
        id: {type: 'integer'},
    },
};

const readRoomListSchema = {
    querystring: {
        page: {type: 'ingeter'},
    },
}

export { 
    createRoomSchema,
    readRoomListSchema,
    readRoomSchema,
};