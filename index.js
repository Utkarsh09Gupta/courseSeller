const express = require("express");
// using routing and 
const { userRouter } = require("./routes/users");
const { courseRouter } = require("./routes/courses")
const { adminRouter } = require("./routes/admin")

// const jwt = require("jsonwebtoken");
// const jwtSecret = "shiristilooksbeautiful";
// const mongoose = require("mongoose");

const app = express();
app.use(express.json());//allows parsing the json data


app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);

app.listen(3000);
