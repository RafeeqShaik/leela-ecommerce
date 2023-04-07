const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
});

const userCollection = "user";
const User = mongoose.model(userCollection, schema);

module.exports = { userCollection, User };
