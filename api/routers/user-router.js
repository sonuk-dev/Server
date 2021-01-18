const Router = require('@koa/router');
const koaBody = require('koa-body');
const userRouter = new Router();
const userController = require('../controllers/user-controller')

const koaJwt = require('koa-jwt');

let jwt = koaJwt({
  secret: 'A very secret key', // Should not be hardcoded
});

userRouter.get('/user/:id', jwt, userController.getUserById);
userRouter.post('/users/login', koaBody(), userController.loginUser);
userRouter.get('/users', jwt, userController.getUsers);
userRouter.get('/users/topScores', jwt, userController.topScores)
userRouter.post('/registration', koaBody(), userController.addUser);
userRouter.put('/user/changeBestScore', jwt, koaBody(), userController.changeBestScore)
userRouter.put('/user/update', jwt, koaBody(), userController.updateUser)

module.exports = userRouter;