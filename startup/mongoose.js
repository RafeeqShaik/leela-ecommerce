const mongoose = require("mongoose");

mongoose
  .connect(process.env.database)
  .then(() => console.log("connected to database"));
