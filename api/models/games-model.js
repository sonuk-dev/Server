const mongoose = require('mongoose');

const GamesSchema = new mongoose.Schema({
    userId: mongoose.Schema.ObjectId,
    date: Date,
    score: Number
});

const Games = mongoose.model('Games', GamesSchema);

Games.createGamesObj = (userId, date, score) => {
    const gameObj = new Games({
        userId,
        date,
        score
    });
    return gameObj.save();
}

Games.findGamesObjByUserId = (userId) => {
    return Games.find({ userId });
}

module.exports = Games;
