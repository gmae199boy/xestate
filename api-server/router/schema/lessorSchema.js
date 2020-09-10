/**
 * JSON Schema 관리
 * 
 * input, output 데이터를 사전 지정해서 
 * 스키마에 맞지 않게 들어온 input 값이 있으면
 * 400 Error return
 * 
 * 스키마에 맞는 데이터 값만 return 하게 된다
 * 
 * 반드시 지정 properties 만 받아야 하며,
 * 지정된 properties만 return 하게 되어서
 * 데이터 컨트롤이 용이해진다.
 */

const createLessorSchema = {
    body: {
        type: 'object',
        required: [
            'name',
            'password',
        ],
        properties: {
            name: {type: 'string'},
            password: {type: 'string'},
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

const readLessorSchema = {
    params: {
        id: {type: 'integer'},
    },
};

const readLessorListSchema = {
    querystring: {
        page: {type: 'ingeter'},
    },
}

export { 
    createLessorSchema,
    readLessorListSchema,
    readLessorSchema,
};