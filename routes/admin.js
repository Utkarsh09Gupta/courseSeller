const { Router } = require("express");
const adminRouter = Router();
const {z} = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const {adminModel, courseModel} = require("../db");
const { adminMiddleware } = require("../middleware/admin");

// adminRouter.use(adminMiddleware);
adminRouter.post("/signup", async (req, res) =>{
    //it could be made better with zod library
    const requiredBody = z.object({
        email: z.string(),
        password: z.string().min(4).max(27),
        firstName: z.string(),
        lastName: z.string()
    });
    const parsedData = requiredBody.safeParse(req.body);//passing the zod object in req.body
    if(!parsedData){
        res.json({
            message: "invalid format"
        })
        return
    }
    const {email, password, firstName, lastName} = req.body;
    const hashPassword = await bcrypt.hash(password, 2);//hashing the password
    //try catch to not shut the backend
    try{
        await adminModel.create({
            email: email,
            password: hashPassword,
            firstName: firstName,
            lastName: lastName
        })
        res.json({
            message: "Signed up successfully"
        })
    }catch(e){
        message: "signup failed"
    }
    
});

adminRouter.post("/signin", async (req, res) =>{
    const {email, password} = req.body;
    //checkinig if admin exists or not
    const admin = await adminModel.findOne({ //we don't check password here because it is hashed
        email
    })
    if(!admin){
        res.json({
            message:"invalid credentials"
        })
    }
    
    const passwordCheck = await bcrypt.compare(password, admin.password);    
    //after password check we create jwt for the admin
    if(!passwordCheck){
        req.json({message:"invalid credentials"})
    }
    //jwt.sign(payload, secret, [option, callback])
    const token = jwt.sign({id: admin._id.toString()}, JWT_ADMIN_PASSWORD, {expiresIn: "1h"})
    res.json({
        token: token,
        message: "signed in successfully"
    })

});

adminRouter.post("/course",adminMiddleware, async (req, res) =>{
    const adminId = req.userId;//getting id from middleware
    const requiredData = z.object({
        title: z.string(),
        description: z.string(),
        imgageUrl: z.string(),
        price: z.number(),
    });
    const parsedData = requiredData.safeParse(req.body);    
    const {title, description, imageUrl, price } = req.body;
    //creating the database model for courses
    try{
       const course = await courseModel.create({
            title: title,
            description: description,
            price: price,
            imageUrl: imageUrl,
            creatorId: adminId
        });

        res.json({
            message: "Course created Successfully",
            courseId: course._id
        })
    }catch(e){
        res.json({
            message: "failed"
        })
    }
});
//editing the current course by id, updateOne, updateMany
adminRouter.put("/course",adminMiddleware, async (req, res) =>{
    const adminId = req.userId;
    const {title, description, imageUrl, price, courseId} = req.body;     

    try{
        const updateCourse = await courseModel.updateOne({
            _id: courseId,
            creatorId: adminId
        },{
            title: title,
            description: description,
            imageUrl: imageUrl,
            price: price    
        })
        res.json({
            message: "course updated",
            courseId: updateCourse._id
        })
    }catch(e){
        res.status(403).json({
            message: "updation failed"
        })
    }
}); 

adminRouter.get("/course/bulk",adminMiddleware, async (req, res) =>{
    const adminId = req.uesrId;
    const allCourses = await courseModel.find({
        adminId
    })
    res.json({
        message: "all courses",
        allCourses
    })    
});
module.exports = {
    adminRouter: adminRouter
}