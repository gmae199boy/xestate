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










// const fastify = require('fastify')({ 
//   logger: {
//     level: 'error',//info, error, debug, fatal, warn, trace, child
//     prettyPrint : true, //에러로그를 pretty 하게 출력하는 놈 // npm install pino-pretty 필요
//   },
// });
// const path = require('path');
// const fastifyStatic = require('fastify-static');
// // const log = require('fastify-log');

// const PORT = 9000;
// const HOST = '0.0.0.0';

 
// // app.register(engine, {
// //    templateDir: 'views'
// // });

// // fastify.register(log);
// fastify.register(require('point-of-view'), {
//   engine: {
//     ejs: require('ejs')
//   },
// });

// fastify.register(fastifyStatic, {
//   root: path.join(__dirname, 'views'),
//   prefix: '/',
// })

// const indexRouter = require('./router/index');
// // const qaRouter = require('./router/qa');
// // const adminRouter = require('./router/admin');
// // const signupRouter = require('./router/signup');

// fastify.register(indexRouter, {prefix: '/'});
// // fastify.register(qaRouter, {prefix: '/qa'});
// // fastify.register(adminRouter, {prefix: '/admin'});
// // fastify.register(signupRouter, {prefix:'/signup'});

// // Run the server!
// const start = async () => {
//   try {
//     await fastify.listen(PORT, HOST);
//     fastify.log.info(`server listening on ${fastify.server.address().port}`);
//   } catch (err) {
//     fastify.log.error(err);
//     process.exit(1);
//   }
// }
// start();