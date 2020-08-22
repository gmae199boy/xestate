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