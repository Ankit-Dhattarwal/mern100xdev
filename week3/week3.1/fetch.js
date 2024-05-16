const express = require("express");

const jwt = require("jsonwebtoken");

const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "ankit@gmail.com",
    password: "ankit123",
    name: "ankit dhattarwal",
  },
  {
    username: "amit@gmail.com",
    password: "amit@123",
    name: "amit dhattarwal",
  },
  {
    username: "ajay@gmail.com",
    password: "ajay@123",
    name: "ajay dhattarwal",
  },
];

function userExists(username, password) {
  // write a logic to return true and false if the user exists
  let userExists = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username == username &&
      ALL_USERS[i].password == password
    ) {
      return (userExists = true);
    }
  }
  return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exsit in our local storage",
    });
  }

  var token = jwt.sign(
    {
      username: username,
    },
    jwtPassword
  );
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({
      users: ALL_USERS,
    });
    // return a list of users other than this username
  } catch (err) {
    return res.status(401).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3004);
