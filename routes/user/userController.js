const { User } = require("../../models/User");
const bcrypt = require("bcrypt");
const { hashPassword, comparePassword } = require("../../utils/bcrypt");

function getUsers(req, res) {
  res.send([]);
}

// create user and save
async function createUser(req, res, next) {
  const { email, password, username } = req.body;
  // check if already user exists in database
  const userExists = await User.exists({ email });

  if (!userExists) {
    let hash = await hashPassword(password);

    const user = await new User({
      email,
      password: hash,
      username,
    }).save();
    return res.send(user);
  }

  return res.status(400).send({ error: true, message: "user already exists" });
}

// login user
async function loginUser(req, res, next) {
  const { email, password } = req.body;

  // get user
  const user = await User.findOne({ email });
  if (!user) return next(new Error("user not found"));

  const isValidPassword = await comparePassword(password, user.password);

  if (!isValidPassword) return next(new Error("username/password wrong"));

  res.send(user);
}

module.exports = { getUsers, createUser, loginUser };
