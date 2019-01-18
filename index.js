const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const passport = require("passport");

const keys = require("./config/keys");

//---Services Start

//---Services End

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(compression());
} else {
  app.use(morgan("dev"));
}

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookieKey]
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

//---Routes Start
require("./app/routes/testRoutes")(app);
//---Routes End

if (process.env.NODE_ENV === "production") {
  //Express will serve up production assets
  //like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  //Express will serve up the index.html file
  //if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log(`Server Running at http://localhost:${PORT}`);
});
