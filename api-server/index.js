const fastify = require('fastify')({ 
  logger: {
    level: 'info',//info, error, debug, fatal, warn, trace, child
    prettyPrint : true, //에러로그를 pretty 하게 출력하는 놈 // npm install pino-pretty 필요
  },
  trustProxy: true,
});

const PORT = 8080;
const HOST = '0.0.0.0';

// DB
var mongoose = require('mongoose');

// index 
var autoIncrement = require('mongoose-auto-increment');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/xestate', { useNewUrlParser: true,  useUnifiedTopology: true  });
var db = mongoose.connection;
autoIncrement.initialize(db);

db.on('error', function(){
    console.log('MongoDB connection failed!');
});
db.once('open', function(){
    console.log('MongoDB connection success!');
});

const productRouter = require('./router/productRouter');

productRouter.forEach(route => {fastify.route(route);});
// fastify.register(indexRouter, {prefix: '/'});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT, HOST);
    console.log(`connected at ${HOST}:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();



// proxy_set_header  Host               $host;
// proxy_set_header  X-Real-IP          $remote_addr;
// proxy_set_header  X-Forwarded-Host   $host;
// proxy_set_header  X-Forwarded-Server $host;
// proxy_set_header  X-Forwarded-For    $proxy_add_x_forwarded_for;






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