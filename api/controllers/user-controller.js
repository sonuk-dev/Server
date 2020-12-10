const UserModel = require('../models/user-model')
const User = require('../models/user-model');

let userController = {}

userController.getUserById = (async (ctx, next) => {

  let result = await UserModel.findUserById(ctx.params.id);
  if (result.err)
    throw ctx.throw(result.status, result.err);

  ctx.status = 200;
  ctx.body = result
});

userController.addUser = (async (ctx) => {
  console.log(ctx.request.body)
  let result = await UserModel.saveUser(
    ctx.request.body.nickname,
    ctx.request.body.email,
    ctx.request.body.password
  );

  if (result.err) throw ctx.throw(result.status, result.err)
  ctx.status = 200;
  ctx.body = result;
});


userController.loginUser = (async (ctx) => {
console.log('login', ctx.request.body.email, ctx.request.body.password)
  let result = await UserModel.loginUser(
    ctx.request.body.email,
    ctx.request.body.password
  );
  // if (!result || result.err) throw ctx.throw(result.status, result.err)
  // ctx.status = 200;
  ctx.body = result
});

userController.getUsers = (async (ctx) => {
  let result = await UserModel.GetAllUsers();

  if (result.err) throw ctx.throw(result.status, result.err)
  ctx.status = 200;
  ctx.body = result
});

module.exports = userController;