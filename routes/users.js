//using routing for better structuring of application
const { Router } = require("express");// Router start with capital leeter but it is funciton not class
const userRouter = Router();
const {userModel} = require("../db");
const { purchaesModel} = require("../db");
const jwt = require("jsonwebtoken");
const jwtsecret = "shristiisbeautiful";

userRouter.use(express.json());
userRouter.post("/signup", function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    res.json({
        message: "Signed up successfully"
    })

});

function auth(){
    const email = req.body.email;
    const password = req.body.password;
    
}
userRouter.post("/signin", function(req, res){
    const email = req.body.email;
    const password = req.body.password;

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