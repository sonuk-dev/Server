const mongoose = require('mongoose');

const GamesSchema = new mongoose.Schema({
    userId: mongoose.Schema.ObjectId,
    games: [
        {
            date: Date,
            score: Number
        }
    ]
});

const Games = mongoose.model('Games', GamesSchema);

Games.createGamesObj = (userId) => {
    const games = new Games({
        userId: userId,
        games: []
    });
    return games.save();
}

Games.findGamesObjByUserId = (userId) => {
    return Games.findOne({ userId });
}

module.exports = Games;
