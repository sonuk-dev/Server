const JoiRouter = require("koa-joi-router");
const gamesRouter = new JoiRouter();
const gamesController = require('../controllers/games-controller');
const validator = require('../../libs/validation');

gamesRouter.post('/games/addGame', validator.gameValidator, gamesController.addGame);
gamesRouter.get('/games/getUserGames/:id', gamesController.getUserGames);

module.exports = gamesRouter;