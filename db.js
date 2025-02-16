// we should design the schema first in
// schema is what kind of data is required for user, admin, courses  and purchases 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
// const {Schema} = require("mongoose"); // all two lines could be written as
// const z = require("zod");
// we are writing Schema which is clas so we should initialize an intance of the class
const userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
});

const adminSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId,    
});

// we will use thses as export data
const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}