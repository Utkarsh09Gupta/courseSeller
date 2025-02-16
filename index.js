const express = require("express");
// using routing and 
const { userRouter } = require("./routes/users");
const { courseRouter } = require("./routes/courses")
const { adminRouter } = require("./routes/admin")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const jwtsecret = "shristiisbeautiful";

const app = express();
app.use(express.json());//allows parsing the json data

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){
    await mongoose.connect("mongodb+srv://gupta02utkarsh:Utkarsh%401234@cluster0.kytwn.mongodb.net/courseSeller");
    app.listen(3000);
    console.log("listening");
}
main();//calling the main funciton to run eventually

