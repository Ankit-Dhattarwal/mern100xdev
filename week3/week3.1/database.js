// const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://ankitdhattarwal:fIgh5a3P7wq1zY8P@mern-100x.5va3ghu.mongodb.net/userappnew?retryWrites=true&w=majority&appName=mern-100x"
// );

// const User = mongoose.model("Users", {
//   name: String,
//   email: String,
//   password: String,
// });

// const user = new User({
//   name: "Zid",
//   email: "zid@gmail.com",
//   password: "zid123",
// });
// user.save().then(console.log("new user"));

///-----------------------------------------------------------
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://ankitdhattarwal:fIgh5a3P7wq1zY8P@mern-100x.5va3ghu.mongodb.net/userappnew?retryWrites=true&w=majority&appName=mern-100x"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });

  if (existingUser) {
    res.status(400).send("Username is alreday exist ");
  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });
  user.save();
  res.json({
    msg: " User saved successfully",
  });
});

app.listen(2000);
