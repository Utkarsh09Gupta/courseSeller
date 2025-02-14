const { Router } = require("express");
const courseRouter = Router();
const {courseModel} = require("../db");

courseRouter.post("/purchase", function(req, res){

    res.json({
        message: "Signed up successfully"
    })

});

courseRouter.post("/preview", function(req, res){

});

module.exports = {
    courseRouter: courseRouter
};