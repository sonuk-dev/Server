const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false
  },
  nickname: {
    type: String,
    required: true,
    unique: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}
);

const Users = mongoose.model('Users', UsersSchema);

Users.findUserById = (id) => {
  return Users.findById(id);
};

Users.GetAllUsers = () => {
  return Users.find({});
};

Users.saveUser = (name, email, nickname) => {
  let user = new Users({
    name: name,
    email: email,
    nickname: nickname,
  });
  return user.save();
};

Users.findByEmail = (email) => {
  return Users.findOne({ email: email });
};
module.exports = Users;
