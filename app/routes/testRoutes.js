module.exports = app => {
  const route = require("./../controllers/testController");

  app.get("/test", route.test);
};
