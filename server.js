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
    await next();
    
  })
  .use(userRouter.routes())
  .use(userRouter.allowedMethods());

app.listen(config.port);

