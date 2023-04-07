module.exports = function server(app) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, console.log(`🚀 server started on port ${PORT}`));
};
