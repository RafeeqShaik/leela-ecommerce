const express = require("express");
const { getUsers } = require("./userController");
const { User } = require("../../models/User");
const router = express.Router();

router.get("/", getUsers);
router.post("/", async (req, res, next) => {
  // check if already user exists in database
  const userExists = await User.exists({ email: req.body.email });
  if (!userExists) {
    const user = await new User(req.body).save();
    return res.send(user);
  }

  return res.status(400).send({ error: true, message: "user already exists" });
});

module.exports = router;
