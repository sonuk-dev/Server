const Router = require('@koa/router');
const gamesRouter = new Router();
const gamesController = require('../controllers/games-controller')
const koaBody = require('koa-body');
const jwt = require('../../libs/jwt')

gamesRouter.put('/games/addGame', jwt, koaBody(), gamesController.addGame);

module.exports = gamesRouter;