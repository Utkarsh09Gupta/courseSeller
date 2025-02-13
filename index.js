const express = require("express");
// using routing and 
const { userRouter } = require("./routes/users");
const { courseRouter } = require("./routes/courses")
const jwt = require("jsonwebtoken");
const jwtSecret = "shiristilooksbeautiful";
const mongoose = require("mongoose");
const z = require("zod");
mongoose.connect("");

const app = express();
app.use(express.json());//allows parsing the json data


app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(3000);
