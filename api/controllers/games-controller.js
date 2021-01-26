const GamesModel = require('../models/games-model')

let gamesController = {}

gamesController.addGame = (async (ctx) => {
    const games = {
        date: ctx.request.body.date,
        score: ctx.request.body.score
    };
    let res = await GamesModel.findOneAndUpdate({ userId: ctx.request.body.userId }, { $push: { games } }, {
        new: true
    });
    ctx.body = res
})

module.exports = gamesController;