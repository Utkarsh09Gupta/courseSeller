//using routing for better structuring of application
const { Router } = require("express");// Router start with capital leeter but it is funciton not class
const userRouter = Router();
const {userModel} = require("../db");
const { purchaesModel} = require("../db");


userRouter.post("/signup", function(req, res){
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    res.json({
        message: "Signed up successfully"
    })

});

userRouter.post("/signin", function(req, res){

    res.json({
        message: "Signed up successfully"
    })
});

userRouter.get("/purchases", function(req, res){

    res.json({
        message: "Signed up successfully"
    })

});

module.exports = {
    userRouter: userRouter
};