const Koa = require("koa");
const app = new Koa();
const config = require('./config/index');
const userRouter = require('./api/routers/user-router');
const mongoConnect = require('./libs/mongo-connection');


mongoConnect(config);
app
  .use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = { error: err.message || err }
      ctx.app.emit('error', err, ctx);
    }
  })
  .use(userRouter.routes())
  .use(userRouter.allowedMethods())

  app.on('error', (err, ctx) => {
    console.error('server error', err.message);
    console.error(err);
  });
app.listen(config.port);

