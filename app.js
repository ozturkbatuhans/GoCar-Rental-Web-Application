const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const hbs = require("hbs");
const indexRouter = require("./routes/index");
//ben ekledim
const carsRouter = require("./routes/cars");


const app = express();
//ben ekledim data icin
const { DatabaseSync } = require("node:sqlite");
app.locals.db = new DatabaseSync("./data/cars.db");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.set("view options", { layout: "layouts/main"});
hbs.registerPartials(path.join(__dirname, "views/partials"));
hbs.registerHelper("isSelected", (type, key) => type == key ? "selected": "");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //bu form verilerini okumak icin onemli.
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
//ben yazdim
app.use("/cars", carsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
