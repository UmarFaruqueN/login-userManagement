var express = require("express");
const app = require("../app");
var router = express.Router();
var userHelper = require("../helper/user-helper");
var adminHelper = require("../helper/admin-helper");
const { response } = require("express");

router.get("/", function (req, res, next) {
    if (req.session.aLoggedIn) {
        userHelper.getUser().then((userData) => {
            console.log(userData);
            res.render("admin/userManagement", { admin: true, userData, userM: true ,});
        });
    } else {
        res.redirect("/admin/adminLogin",);
    }
});

router.get("/add-user", function (req, res) {
    console.log("1");
    res.render("admin/add-user", { admin: true, aUser: true });
});

router.post("/addUser", function (req, res) {
    console.log("2");
    console.log(req.body);
    userHelper.addUser(req.body).then((response) => {
        res.redirect("/admin");
    });
});

router.get("/cancel", (req, res) => {
    res.redirect("/admin");
});

router.get("/adminLogin", (req, res) => {
    if (req.session.aLoggedIn) {
        res.redirect("/admin");
    } else {
        res.render("admin/adminLogin", { admin: true, aLogin: true ,loginErr: req.session.loginErr});
    }
    req.session.loginErr=false;
});

router.post("/adminSignin", (req, res) => {
    console.log(" Sign in route");
    adminHelper.doLogin(req.body).then((response) => {
        if (response.status) {
            console.log("req came here");
            req.session.aLoggedIn = true;
            req.session.auser = response.user;
            res.redirect("/admin");
        } else {
            req.session.loginErr = true;
            res.redirect("/admin/adminLogin");
        }
    });
});

router.get("/adminLogOut", (req, res) => {
    console.log(req.session);
    req.session.aLoggedIn = false;
    res.redirect("/admin");
});

router.get("/cancel", (req, res) => {
    res.redirect("/admin");
});

router.get("/delete_user/:id", (req, res) => {
    let userId = req.params.id;
    adminHelper.deleteUser(userId).then((response) => {
        res.redirect("/admin");
    });
});

router.get("/edit_user/:id", async (req, res) => {
    let userDat = await adminHelper.getUserDetail(req.params.id);
    console.log(userDat);
    res.render("admin/edit_user", { userDat, admin: true, eUser: true });
});

router.post("/edit_user/:id", (req, res) => {
    adminHelper.updateUserDetail(req.params.id, req.body).then(() => {
        res.redirect("/admin");
    });
});

module.exports = router;
