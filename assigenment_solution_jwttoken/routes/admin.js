const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const {JWT_SECERT} = require("../confige");

// Admin Router
router.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  //check if a user with this username already exists
  await Admin.create({
    username: username,
    password: password,
  });
  res.json({
    msg: "Admin created successfully",
  });
});

router.post("/signin", adminMiddleware, async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({
    username,
    password,
  })
  if(user){
    const token = jwt.sign({
      username
    }, JWT_SECERT);
    res.json({
     token
    })
  }else{
    res.status(401).json({
      message: "Incorrect email and password"
    })
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });
});
router.get("/courses", adminMiddleware, async (req, res) => {
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

module.exports = router;
