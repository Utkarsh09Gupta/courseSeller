const { Router } = require("express");
const adminRouter = Router();
const {adminModel} = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const jwtsecret = "shristiisbeautiful";

// adminRouter.use(adminMiddleware);
adminRouter.post("/signin", async (req, res) =>{
    //it could be made better with zod library
    const requiredBody = z.object({
        email: z.string(),
        password: z.string().min(4).max(27),
        firstName: z.string(),
        lastName: z.string()
    });
    const parsedData = requiredBody.sageParse(req.body);//passing the zod object in req.body
    if(!parsedData){
        res.json({
            message: "invalid format"
        })
        return
    }
    const {email, password, firstName, lastName} = req.body;
    const hashPassword = await bcrypt.hash(passoword, 2);//hashing the password
    //try catch to not shut the backend
    try{
        await userModel.create({
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

adminRouter.post("/signup", async (req, res) =>{
    const {email, password} = req.body;
    //checkinig if user exists or not
    const user = await adminModel.findOne({ //we don't check password here because it is hashed
        email
    })
    if(!user){
        res.json({
            message:"invalid credentials"
        })
    }else{
        res.json({
            message: "signed in successfully"
        })
    }
    
    const passwordCheck = await bcrypt.compare(password, user.password);    
    //after password check we create jwt for the user
    if(!passwordCheck){
        req.json({message:"invalid credentials"})
    }
    //jwt.sign(payload, secret, [option, callback])
    const token = jwt.sign({id: user._id.toString()}, jwtsecret, {expiresIn: "1h"})
    res.json({
        token: token,
        message: "signed in successfully"
    })

});

adminRouter.post("/course", (req, res) =>{
    res.json({
        message: "hi there"
    })
});

adminRouter.put("/course", (req, res) =>{
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