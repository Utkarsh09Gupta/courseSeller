const { Router } = require("express");
const courseRouter = Router();
const { userMiddleware } = require("../middleware/user");
const { purchaseModel,courseModel } = require("../db");

courseRouter.post("/purchase", userMiddleware, async function(req, res){
    const userId = req.userId;
    const courseId = req.body.courseId;
    try{
        await purchaseModel.create({
            courseId: courseId,
            userId: userId
        })
        res.json({
            message: "Course buy successfully"
        })
    }catch(e){
        res.json({
            message: "cannot buy course"
        })
    }

});

courseRouter.post("/preview",async function(req, res){
    const course = await courseModel.find({});

    res.json({
        course
    })

});

module.exports = {
    courseRouter: courseRouter
};