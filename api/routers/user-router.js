const Router = require('@koa/router');
const koaBody = require('koa-body');
const userRouter = new Router();
const userController = require('../controllers/user-controller')


userRouter.get('/user/:id', userController.getUserById);
userRouter.get('/users/login/:email', userController.getUserByEmail);
userRouter.get('/users/userslist', userController.getUsers)
userRouter.post('/users', koaBody(), userController.registerUser);

module.exports = userRouter;