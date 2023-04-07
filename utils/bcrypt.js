const bcrypt = require("bcrypt");

function hashPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) return reject(err);
      resolve(hash);
    });
  });
}

function comparePassword(password, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, function (err, result) {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

module.exports = { hashPassword, comparePassword };
