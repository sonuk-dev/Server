const JoiRouter = require("koa-joi-router");
const authRouter = new JoiRouter();
const userController = require('../controllers/user-controller')
const validator = require('../../libs/validation')

authRouter.post('/users/login', validator.loginValidator, userController.loginUser);
authRouter.post('/registration', validator.registrationValidator, userController.addUser);

module.exports = authRouter;