const UserModel = require('../models/user-model');
const GamesModel = require('../models/games-model')
const jwt = require('jsonwebtoken');

let userController = {}

userController.getUserById = (async (ctx, next) => {

  let result = await UserModel.findUserById(ctx.params.id);
  if (result.err)
    throw ctx.throw(result.status, result.err);

  ctx.status = 200;
  ctx.body = result
});

userController.addUser = (async (ctx) => {
  let result = await UserModel.saveUser(
    ctx.request.body.nickname,
    ctx.request.body.email,
    ctx.request.body.password
  );

  if (result.err) throw ctx.throw(result.status, result.err)
  const token = jwt.sign({ user: result }, 'A very secret key');
  GamesModel.createGamesObj(result._id);
  ctx.status = 200;
  ctx.body = {
    user: result,
    token
  }
});

userController.loginUser = (async (ctx) => {
  let result = await UserModel.loginUser(
    ctx.request.body.email,
    ctx.request.body.password
  );
  if (!result || result.err) throw ctx.throw(result.status, result.err)
  const token = jwt.sign({ user: result }, 'A very secret key')
  ctx.status = 200;
  ctx.body = {
    user: result,
    token
  }
});

userController.getUsers = (async (ctx) => {
  let result = await UserModel.GetAllUsers();

  if (result.err) throw ctx.throw(result.status, result.err)
  ctx.status = 200;
  ctx.body = result
});

userController.topScores = (async (ctx) => {

  let result = await UserModel.getTopScores(ctx.request.query.skip, ctx.request.query.limit)

  if (result.err) throw ctx.throw(result.status, result.err)
  ctx.status = 200;
  ctx.body = result;
});

userController.changeBestScore = (async (ctx) => {
  let result = await UserModel.getChangeBestScore(ctx.request.body._id, ctx.request.body.bestScore)

  const token = jwt.sign({ user: result }, 'A very secret key')
  ctx.status = 200;
  ctx.body = {
    user: result,
    token
  }
});

userController.updateUser = (async (ctx) => {
  let result = await UserModel.updateUser(ctx.request.body._id, ctx.request.body.nickname, ctx.request.body.email)

  const token = jwt.sign({ user: result }, 'A very secret key')
  ctx.status = 200;
  ctx.body = {
    user: result,
    token
  }
});
module.exports = userController;