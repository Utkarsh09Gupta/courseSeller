const express = require("express");
const jwt = require("jsonwebtoken");
const jwtSecret = "shiristilooksbeautiful";
const mongoose = require("mongoose");
const z = require("zod");
mongoose.connect("");

const app = express();
app.use(express.json());//allows parsing the json data

app.post("/signup", function(req, res){
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    res.json({
        message: "Signed up successfully"
    })

});

app.post("/user/signin", function(req, res){

    res.json({
        message: "Signed up successfully"
    })
});

app.post("/user/purchases", function(req, res){

    res.json({
        message: "Signed up successfully"
    })

});

app.post("/course/purchase", function(req, res){

    res.json({
        message: "Signed up successfully"
    })

});

app.post("/courses", function(req, res){

});

app.listen(3000);
