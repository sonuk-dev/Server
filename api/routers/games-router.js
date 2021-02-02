const Router = require('@koa/router');
const gamesRouter = new Router();
const gamesController = require('../controllers/games-controller')
const jwt = require('../../libs/jwt')

gamesRouter.put('/games/addGame', jwt, gamesController.addGame);
gamesRouter.get('/games/getUserGames/:id', jwt, gamesController.getUserGames);

module.exports = gamesRouter;