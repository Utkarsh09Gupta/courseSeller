//using routing for better structuring of application
const { Router } = require("express");// Router start with capital leeter but it is funciton not class
const userRouter = Router();
const {z} = require("zod");
const bcrypt = require("bcrypt");
const {userModel} = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");// const { purchaesModel} = require("../db");

// userRouter.use(express.json());//no need for this because this only runs after index.js
userRouter.post("/signup", async function(req, res){
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
        // putting the data in database
        try{
            await userModel.create({
                email: email,
                password: hashPassword,
                firstName: firstName,
                lastName: lastName
            })
            
        }catch(e){
            res.status(404).json({
                message: "signup failed"
            })
        }
        res.json({
            message: "Signed up successfully"
        })

});

userRouter.post("/signin", async function(req, res){
    const {email, password} = req.body;
    //checkinig if user exists or not
    const user = await userModel.findOne({ //we don't check password here because it is hashed
        email
    })
    if(!user){
        res.json({
            message:"invalid credentials"
        })
    }
    
    const passwordCheck = await bcrypt.compare(password, user.password);    
    //after password check we create jwt for the user
    if(!passwordCheck){
        req.json({message:"invalid credentials"})
    }
    //jwt.sign(payload, secret, [option, callback])
    const token = jwt.sign({id: user._id.toString()}, userSecret, {expiresIn: "1h"});
    res.json({
        token: token,
        message: "signed in successfully"
    });

});

userRouter.post("/course", (req, res) =>{
    res.json({
        message: "hi there"
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