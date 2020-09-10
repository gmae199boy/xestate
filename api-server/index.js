/**
 * 
 * fastify는 옵션으로 json 스키마를 검증하는 기능을 내장하고 있습니다.
 * 따라서 스키마 검증은 따로 작성합니다.
 * 서버 사이드 랜더링은 사용하지 않습니다. 
 * return은 json형식만 반환합니다.
 * 
 */

// DB
import mongoose from 'mongoose';
// auto increment index
// import * as autoIncrement from 'mongoose-auto-increment';

// 커스텀 라우터 선언
import roomRouter from './router/roomRouter';
import lessorRouter from './router/lessorRouter';
// const productRouter = require('./router/productRouter');
// const brokerRouter = require('./router/brokerRouter');
// import _ from './env';

require('dotenv').config();
// import dotenv from 'dotenv';
// dotenv.config();

/**
 * 서버 생성
 * 
 * @logger      log를 출력하는지에 대한 여부
 * @level       logger가 출력하는 로그의 레벨을 지칭함
 * @prettyPrint logger가 한줄로만 출력되서 예쁘게 출력해 주는 아이
 * @trustProxy  프록시를 신뢰해주는 아이 
 */
const fastify = require('fastify')({ 
  logger: {
    level: 'info',//info, error, debug, fatal, warn, trace, child
    prettyPrint : true, //에러로그를 pretty 하게 출력하는 놈 // npm install pino-pretty 필요
  },
  trustProxy: true,
});

// fastify.register(require('fastify-cookie'), {
//   secret: "my-secret", // for cookies signature
//   parseOptions: {}     // options for parsing cookies
// })

// listen port
const PORT = 8080;
// listen host
const HOST = '0.0.0.0';

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://172.17.0.3:27017/xestate', { useNewUrlParser: true,  useUnifiedTopology: true  });
var db = mongoose.connection;
// autoIncrement.initialize(db);

db.on('error', function(){
    console.log('MongoDB connection failed!');
});
db.once('open', function(){
    console.log('MongoDB connection success!');
});




// 커스텀 라우터 등록
roomRouter.forEach(route => {fastify.route(route);});
lessorRouter.forEach(route => {fastify.route(route);});
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