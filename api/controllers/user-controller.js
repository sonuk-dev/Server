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

userController.registerUser = (async (ctx) => {

  let result = await UserModel.saveUser(
    ctx.request.body.name,
    ctx.request.body.email,
    ctx.request.body.nickname,
  );

  if (result.err) throw ctx.throw(result.status, result.err)
  ctx.status = 200;
  ctx.body = result
});

userController.getUserByEmail = (async (ctx) => {
  console.log(ctx.params.email)
  let result = await UserModel.findByEmail(ctx.params.email);
  if (result.err) throw ctx.throw(result.status, result.err)
  ctx.status = 200;
  ctx.body = result
});

userController.getUsers = (async (ctx) => {
  let result = await UserModel.GetAllUsers();
  
  if (result.err) throw ctx.throw(result.status, result.err)
  ctx.status = 200;
  ctx.body = result
});

module.exports = userController;