const GamesModel = require('../models/games-model')

let gamesController = {}

gamesController.addGame = (async (ctx) => {
   let games = {
        date: ctx.request.body.date,
        score: ctx.request.body.score
    };
    console.log(games)
    let g = await GamesModel.findOne({userId: ctx.request.body.userId});
    console.log(g)
    let res = await GamesModel.findOneAndUpdate({userId: ctx.request.body.userId}, {$push: {games}}, {
        new: true
      });
    ctx.body = res
})

module.exports = gamesController;