var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var hbs = require('express-handlebars');
var db = require('./config/connections');


var adminRoute = require("./routes/admin");
var userRoute = require("./routes/user");
const { Db } = require("mongodb");
const { log } = require("console");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine('hbs',hbs.engine({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/layout/',patialsDir:__dirname+'/views/partials/',runtimeOptions: { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true,}}))

app.use(function (req, res, next) {
    res.set("cache-control", "no-cache,no-store,must-revalidate");
    next();
});
app.use(session({ secret: "Key", cookie: { maxAge: 600000 } }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

db.connect((err)=>{
    if(err)
    console.log("db err"+err);
    else
    console.log("db connected");
});

app.use("/", userRoute);
app.use("/admin", adminRoute);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
