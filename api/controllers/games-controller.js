const GamesModel = require('../models/games-model')
const jwt = require('jsonwebtoken');
let gamesController = {}

gamesController.addGame = (async (ctx) => {

    let result = await GamesModel.createGamesObj(
        ctx.request.body.userId,
        ctx.request.body.date,
        ctx.request.body.score
    )
    if (result.err) throw ctx.throw(result.status, result.err);

    ctx.status = 200;
    ctx.body = result
});

gamesController.getUserGames = (async (ctx) => {
    let result = await GamesModel.findGamesObjByUserId(ctx.params.id)

    if (result.err)
        throw ctx.throw(result.status, result.err);

    ctx.status = 200;
    ctx.body = result
});

module.exports = gamesController;