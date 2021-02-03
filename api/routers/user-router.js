const Router = require('@koa/router');
const userRouter = new Router();
const userController = require('../controllers/user-controller')
const jwt = require('../../libs/jwt')
const validator = require('../../libs/validation')

// userRouter.post('/users/login', validator.loginValidator, userController.loginUser);
// userRouter.post('/registration', validator.registrationValidator, userController.addUser);

userRouter.get('/user/:id', userController.getUserById);
userRouter.get('/users', userController.getUsers);
userRouter.get('/users/topScores', userController.topScores)

userRouter.put('/user/changeBestScore', userController.changeBestScore)
userRouter.put('/user/update', userController.updateUser)

module.exports = userRouter;