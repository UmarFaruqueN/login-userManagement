const async = require("hbs/lib/async");
var db = require("../config/connections");

module.exports = {
    addUser: (users)=>{
        console.log(users);
        return new Promise( (resolve, reject) => {
            db.get()
                .collection("users")
                .insertOne(users)
                .then((data) => {
                    resolve(data.acknowledged)
                });
        });
    },
    

    doSignup: (userData) => {
        return new Promise((resolve, reject) => {
            db.get()
                .collection("users")
                .insertOne(userData)
                .then((data) => {
                    resolve(data.acknowledged);
                });
        });
    },

    doLogin: (userData) => {
        return new Promise(async (resolve, reject) => {
            let loginStatus = false;
            let response = {};
            let user = await db.get().collection("users").findOne({ user_email: userData.user_email });
            if (user) {
                if (userData.user_password === user.user_password) {
                    console.log("login sucesss");
                    response.user = user;
                    response.status = true;
                    resolve(response);
                } else {
                    console.log("login failed");
                    resolve({ status: false });
                }
            } else {
                console.log("login failed");
                resolve({ status: false });
            }
        });
    },
    getUser: () => {
        return new Promise(async (resolve, reject) => {
            let userData = await db.get().collection("users").find().toArray();
            resolve(userData);
        });
    },
};
