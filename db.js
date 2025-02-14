// we should design the schema first in
// schema is what kind of data is required for user, admin, courses  and purchases 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
// const {Schema} = require("mongoose"); // all two lines could be written as
// const z = require("zod");
mongoose.connect("mongodb+srv://gupta02utkarsh:Utkarsh%401234@cluster0.kytwn.mongodb.net/courseSeller");
// we are writing Schema which is clas so we should initialize an intance of the class
const userSchema = new Schema({
    _id : ObjectId,
    email: String,
    password: String,
    firstName: String,
    lastName: String
});

const adminSchema = new Schema({
    _id: ObjectId,
    email: String,
    password: String,
    firstName: String,
    lastName: String
});

const courseSchema = new Schema({
    _id: ObjectId,
    title: String,
    description: String,
    price: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({
    _id: ObjectId,
    courseId: ObjectId,
    description: ObjectId
    
});

// we will use thses as export data
const userModule = mongoose.model("user", userSchema);
const adminModule = mongoose.model("admin", adminSchema);
const courseModule = mongoose.model("course", courseSchema);
const purchaseModule = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModule,
    adminModule,
    courseModule,
    purchaseModule
}