var express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { response } = require("../app");
var router = express.Router();
var userHelper = require("../helper/user-helper");

/* GET login page. */
router.get("/", function (req, res, next) {
    const values = ["umar", "faruque", "N"];
    var data = [
        {
            name: "DressBerry",
            image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2278228/2018/4/5/11522913267066-DressBerry-Women-Watches-7501522913266942-1.jpg",
            description: "Woman Analouge Watch",
            price: " Rs : 929 /-",
        },
        {
            name: "DressBerry",
            image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2278228/2018/4/5/11522913267066-DressBerry-Women-Watches-7501522913266942-1.jpg",
            description: "Woman Analouge Watch",
            price: " Rs : 929 /-",
        },
        {
            name: "DressBerry",
            image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2278228/2018/4/5/11522913267066-DressBerry-Women-Watches-7501522913266942-1.jpg",
            description: "Woman Analouge Watch",
            price: " Rs : 929 /-",
        },
        {
            name: "DressBerry",
            image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2278228/2018/4/5/11522913267066-DressBerry-Women-Watches-7501522913266942-1.jpg",
            description: "Woman Analouge Watch",
            price: " Rs : 929 /-",
        },
    ];
    let homepage = true;
    let user = req.session.user;
    if (req.session.loggedIn) {
        res.render("user/index", { title: "week-6", name: "User Managment system", values, data, homepage ,admin:false});
    }else{
        res.redirect('/login')
    }
});

router.get("/login", (req, res) => {
    let login = true;
    if (req.session.loggedIn) {
        res.redirect("/");
    } else {
        res.render("user/login", { login ,loginErr: req.session.loginErr});
    }
    req.session.loginErr=false;
});

router.get("/signup", (req, res) => {
    var signup = true;
    res.render("user/signup", { signup });
});

router.post("/signup", (req, res) => {
    console.log(req.body);
    userHelper.doSignup(req.body).then((response) => {
        console.log(response);
        if (response === true) {
            res.redirect("/login");
        }
    });
});

router.post("/signin", (req, res) => {
    userHelper.doLogin(req.body).then((response) => {
        if (response.status) {
            req.session.loggedIn = true;
            req.session.user = response.user;
            res.redirect("/");
        } else {
            req.session.loginErr=true;
            res.redirect("/login");
        }
    });
});

router.get("/logOut", (req, res) => {
    console.log(req.session);
    req.session.loggedIn = false;
    res.redirect("/login");
});

module.exports = router;
