const express = require("express");

module.exports = function middleware(app) {
  app.use(express.json());
};
