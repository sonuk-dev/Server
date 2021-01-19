const Router = require('@koa/router');
const userRouter = new Router();
const koaBody = require('koa-body');
const userController = require('../controllers/user-controller')
const jwt = require('../../libs/jwt')

userRouter.post('/users/login', koaBody(), userController.loginUser);
userRouter.post('/registration', koaBody(), userController.addUser);

userRouter.get('/user/:id', jwt, userController.getUserById);
userRouter.get('/users', jwt, userController.getUsers);
userRouter.get('/users/topScores', jwt, userController.topScores)

userRouter.put('/user/changeBestScore', jwt, koaBody(), userController.changeBestScore)
userRouter.put('/user/update', jwt, koaBody(), userController.updateUser)

module.exports = userRouter;