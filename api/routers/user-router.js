// const Router = require('@koa/router');
// const userRouter = new Router();
const JoiRouter = require("koa-joi-router");
const userRouter = new JoiRouter();
const userController = require('../controllers/user-controller')
const jwt = require('../../libs/jwt')
const validator = require('../../libs/validation')
const Joi = JoiRouter.Joi;

userRouter.post('/users/login', validator.loginValidator, userController.loginUser);
userRouter.post('/registration', validator.registrationValidator, userController.addUser);

userRouter.get('/user/:id', jwt, userController.getUserById);
userRouter.get('/users', jwt, userController.getUsers);
userRouter.get('/users/topScores', jwt, userController.topScores)

userRouter.put('/user/changeBestScore', jwt, userController.changeBestScore)
userRouter.put('/user/update', jwt, userController.updateUser)

module.exports = userRouter;