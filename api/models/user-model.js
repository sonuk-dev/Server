const mongoose = require('mongoose');

//----------------
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
//--------------------------

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
  });
  return user.save();

});

Users.loginUser = (async (email, password) => {
  let user = await Users.findOne({ email: email });
  let crypt = await bcrypt.compare(password, user.password);
  if (crypt) {
    return user;
  }
  return false;
});
module.exports = Users;
