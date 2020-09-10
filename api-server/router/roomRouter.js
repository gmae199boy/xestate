import {
    getRoom,
    registRoom,
    deleteRoom,
    updateRoom,
    getRoomList,
    reportRoom,
} from './ctrl/room.ctrl';
import {     
    getRoomSchema,
    getRoomListSchema,
    registRoomSchema, 
} from './schema/roomSchema';

const routes = [
    {
        method: 'GET',
        url: '/rooms',
        handler: getRoomList,
    },
    {
        method: 'POST',
        url: '/room/create',
        handler: registRoom,
        schema: registRoomSchema,
    },
    {
        method: 'POST',
        url: '/room/report/:id',
        handler: reportRoom,
    },
    {
        method: 'GET',
        url: '/room/:id',
        handler: getRoom,
    },
    {
        method: 'DELETE',
        url: '/room/:id',
        handler: deleteRoom,
    },
    {
        method: 'PUT',
        url: '/room/:id',
        handler: updateRoom,
    },
];


export default routes;













// const opt = {

// };

// module.exports = async function(fastify, opts) {
//     //return html file (SPA-MPA multiple page)
//     fastify.get('/mainPageList', async (req, res) => {
//         var data = {
//             name: 'kim',
//         };
//         return data;
//     })

//     fastify.get('/v1', async (req, res) => {
//         return {name: 'op'};
//     })
// }






// var got = require('got');

// const opt = {

// }

// module.exports = async function(fastify, opts) {
//     //return html file (SPA-MPA multiple model)
//     fastify.get('/', async (req, res) => {
//         // .json() -> json으로 직렬화
//         var data = await got('http://172.17.0.1:27000/mainPageList').json();
//         return data;
//     })

//     fastify.get('/v1', async (req, res) => {
//         return {name: 'op'};
//     })
// }