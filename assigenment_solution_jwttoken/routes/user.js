const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");
const { default: mongoose } = require("mongoose");
const router = Router();

// User Router
router.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  User.create({
    username,
    password,
  });
  res.json({
    message: "User created successfully",
  });
});

router.get("/courses", async (req, res) => {
  const response = await Course.find({
    /// Here use some logic like use some boolen value on DB to show the some course public
  });

  res.json({
    message: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async function (req, res) {
  const courseId = req.params.courseId;
  const username = req.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.json({
    message: "Purchase complete",
  });
});

router.get("/purchasedCourse", userMiddleware, async (req, res) => {
  const user = await User.findOne({
    username: req.headers.username,
  });

  const courses = await Course.find({
    _id: {
      "$in": user.purchasedCourses
    }
  });
  res.json({
    courses: courses 
  })

});

module.exports = router;
