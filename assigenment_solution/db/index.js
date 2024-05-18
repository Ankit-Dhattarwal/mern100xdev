const mongoose = require("mongoose");

///Connect to MongoDB
mongoose.connect(
  "mongodb+srv://ankitdhattarwal:fIgh5a3P7wq1zY8P@mern-100x.5va3ghu.mongodb.net/course_selling_app?retryWrites=true&w=majority&appName=mern-100x"
);

// Define Schema
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageLink: String,
  price: Number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
