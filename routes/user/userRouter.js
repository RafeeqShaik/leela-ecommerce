const express = require("express");
const { getUsers, createUser, loginUser } = require("./userController");
const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.post("/login", loginUser);

module.exports = router;
