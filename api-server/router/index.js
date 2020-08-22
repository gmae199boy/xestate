const opt = {

};

module.exports = async function(fastify, opts) {
    //return html file (SPA-MPA multiple page)
    fastify.get('/mainPageList', async (req, res) => {
        var data = {
            name: 'kim',
        };
        return data;
    })

    fastify.get('/v1', async (req, res) => {
        return {name: 'op'};
    })
}






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