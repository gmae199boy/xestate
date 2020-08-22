const opt = {

}


module.exports = async function(fastify, opts) {
    //Q&A 메인 페이지
    fastify.get('/', async (req, res) => {
        return {name: 'kim'};
    })

    //
    fastify.get('/v1', async (req, res) => {
        return {name: 'op'};
    })
}