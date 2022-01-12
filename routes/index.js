var express = require("express");
const { response } = require("../app");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    if (req.session.loggedIn) {
        res.redirect("/mypage");
    } else {
     res.render("index", { title: "week-4", name: "my name" });
    }
});

router.post("/signIn", function (req, res) {
    let uEmail = "uf@gmail.com";
    let uPas = "123";
    if (req.body.email === uEmail && req.body.password === uPas) {
        req.session.loggedIn = true;
        req.session.user = uEmail;
        res.redirect("/mypage");
    } else {
        res.redirect("/");
    }
});

router.get("/logOut", function (req, res) {
    req.session.destroy();
    res.redirect("/");
});
module.exports = router;
