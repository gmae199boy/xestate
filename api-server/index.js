const fastify = require('fastify')({ 
  logger: {
    level: 'error',//info, error, debug, fatal, warn, trace, child
    prettyPrint : true, //에러로그를 pretty 하게 출력하는 놈 // npm install pino-pretty 필요
  },
});

const PORT = 27000;
const HOST = '0.0.0.0';

const indexRouter = require('./router/index');

fastify.register(indexRouter, {prefix: '/'});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT, HOST);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();