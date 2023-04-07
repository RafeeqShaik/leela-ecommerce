const healthRoute = require("../routes/health/healthRouter");
const userRouter = require("../routes/user/userRouter");

module.exports = function routes(app) {
  const prefix = process.env.url_prefix;

  app.use(`${prefix}/health`, healthRoute);
  app.use(`${prefix}/user`, userRouter);
};
