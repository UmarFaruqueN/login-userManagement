var express = require("express");
var router = express.Router();

/* GET home page. */
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
    if (req.session.loggedIn) {
        res.render("mypage", { values, data });
    }else{
        res.redirect("/")
    }
});

module.exports = router;
