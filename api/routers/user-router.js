const Router = require('@koa/router');
const userRouter = new Router();
const userController = require('../controllers/user-controller')
const jwt = require('../../libs/jwt')

userRouter.post('/users/login', userController.loginUser);
userRouter.post('/registration', userController.addUser);

userRouter.get('/user/:id', jwt, userController.getUserById);
userRouter.get('/users', jwt, userController.getUsers);
userRouter.get('/users/topScores', jwt, userController.topScores)

userRouter.put('/user/changeBestScore', jwt, userController.changeBestScore)
userRouter.put('/user/update', jwt, userController.updateUser)

module.exports = userRouter;