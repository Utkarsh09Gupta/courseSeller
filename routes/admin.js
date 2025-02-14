const { Router } = require("express");
const adminRouter = Router();
const {adminModel} = require("../db");

// adminRouter.use(adminMiddleware);
adminRouter.post("/signin", (req, res) =>{
    res.json({
        message: "hi there"
    })
});

adminRouter.post("/signup", (req, res) =>{
    res.json({
        message: "hi there"
    })
});

adminRouter.post("/course", (req, res) =>{
    res.json({
        message: "hi there"
    })
});

adminRouter.post("/course", (req, res) =>{
    res.json({
        message: "hi there"
    })
});

adminRouter.get("/course/bulk", (req, res) =>{
    res.json({
        message: "hi there"
    })
});
module.exports = {
    adminRouter: adminRouter
}