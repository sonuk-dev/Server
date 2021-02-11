const JoiRouter = require("koa-joi-router");
const userRouter = new JoiRouter();
const userController = require('../controllers/user-controller');
const validator = require('../../libs/validation');

userRouter.get('/user/:id', userController.getUserById);
userRouter.get('/users', userController.getUsers);
userRouter.get('/users/topScores', userController.topScores)

userRouter.put('/user/changeBestScore', validator.changeBestScoreValidator, userController.changeBestScore)
userRouter.put('/user/update', validator.updateUserValidator, userController.updateUser)

module.exports = userRouter;