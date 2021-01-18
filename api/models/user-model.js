const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UsersSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
    unique: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  bestScore: {
    type: Number,
    required: true,
    unique: false
  },
  password: {
    type: String,
    required: true,
    unique: false
  },
});

const Users = mongoose.model('Users', UsersSchema);

Users.findUserById = (id) => {
  return Users.findById(id);
};

Users.GetAllUsers = () => {
  return Users.find({});
};

Users.saveUser = (async (nickname, email, password) => {
  let cryptPass = await bcrypt.hash(password, saltRounds);

  let user = new Users({
    nickname: nickname,
    email: email,
    password: cryptPass,
    bestScore: 0,
  });
  return user.save();

});

Users.getTopScores = (async (skip, limit) => {
  let result = await Users.GetAllUsers().sort({ bestScore: -1 });
  return result.slice(Number(skip), Number(skip) + Number(limit));
});

Users.loginUser = (async (email, password) => {
  let user = await Users.findOne({ email: email });

  if (!user)
    return { status: 400, err: `{"email": "doesn't exist"}` };

  let crypt = await bcrypt.compare(password, user.password);
  if (crypt) {
    return user;
  }
  return { status: 400, err: `{"password": "Password is wrong"}` };
});

Users.getChangeBestScore = (async (_id, bestScore) => {
  const filter = { _id: _id };
  const update = { bestScore: bestScore };
  console.log(filter, update)
  return Users.findOneAndUpdate(filter, update, {
    new: true
  });
});

Users.updateUser = (async (_id, nickname, email) => {
  const filter = { _id: _id };
  const update = { 
    nickname: nickname,
    email: email
 };
  console.log(filter, update)
  return Users.findOneAndUpdate(filter, update, {
    new: true
  });
});
module.exports = Users;
