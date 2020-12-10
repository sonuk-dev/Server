const Router = require('@koa/router');
const koaBody = require('koa-body');
const userRouter = new Router();
const userController = require('../controllers/user-controller')


userRouter.get('/user/:id', userController.getUserById);
userRouter.post('/users/login', koaBody(), userController.loginUser);
userRouter.get('/users/userslist', userController.getUsers)
userRouter.post('/registration', koaBody(), userController.addUser);

module.exports = userRouter;