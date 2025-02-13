const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/course/purchase", function(req, res){

    res.json({
        message: "Signed up successfully"
    })

});

courseRouter.post("/courses/preview", function(req, res){

});

module.exports({
    courseRouter: courseRouter
});