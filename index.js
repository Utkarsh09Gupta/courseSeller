const express = require("express");
require('dotenv').config();
// using routing and 
const { userRouter } = require("./routes/users");
const { courseRouter } = require("./routes/courses")
const { adminRouter } = require("./routes/admin")
const mongoose = require("mongoose");

const app = express();
app.use(express.json());//allows parsing the json data

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000);
    console.log("listening");
}
main();//calling the main funciton to run eventually

