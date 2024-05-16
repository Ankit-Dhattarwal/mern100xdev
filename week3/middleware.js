// const express = require("express");

// const app = express();

// app.get("/healthy-checkup", (req, res) => {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//   if (username != "ankit" || password != "pass") {
//     res.status(401).json({
//       msg: "Something is wrong and change in input",
//     });
//     return;
//   }

//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(401).json({
//       msg: "Something wrong your kideny id not match",
//     });
//     return; /// this say controll go to next aand say same like if and else use
//   }

//   res.json({
//     msg: "Your kideny is fine",
//   });
// });

// app.listen(4001);

// /// the above is ugly way to code bcz if new routes like

///-----------------------------

// const express = require("express");

// const app = express();

// let numberOfRequest = 0;
// function calulateRequest(req, res, next) {
//   numberOfRequest++;
//   console.log(numberOfRequest);
//   next();
// }

// app.use(calulateRequest);

// app.post("/healthy-checkup", (req, res) => {
//   res.json({
//     msg: "ankit this side",
//   });
// });
// app.get("/healthy-checkup2", (req, res) => {});

// app.listen(4001);

/// the above is ugly way to code bcz if new routes like

////---------------------

// const express = require("express");

// const app = express();

// app.use(express.json());

// app.post("/healthy-checkup", (req, res) => {
//   /// kidnesy = [1,2]
//   const kidenys = req.body.kidenys;
//   const kidneyLength = kidenys.length;

//   res.send("you have " + kidneyLength + " kidneys");
// });

// /// global catches (handle the expection)
// app.use(function (err, req, res, next) {
//   res.json({
//     msg: "Sorry something is up with our server...",
//   });
// });

// app.listen(4001);

/// --------------------------------------------------------

const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

/*
{
  email: string => email
  password: alteat 8 letter
  country: "IN" , "US"

  /// for that what the zod are that's is:

  const schema = zod.object{
    email: zod.string()
    password: zod.string()
    conutry: zod.literal("IN").or(zod.literal("US")),
    
  }
}
*/

app.use(express.json());

app.post("/healthy-checkup", (req, res) => {
  /// kidnesy = [1,2]
  const kidenys = req.body.kidenys;
  const response = schema.safeParse(kidenys);
  if (!response.success) {
    res.status(411).json({
      msg: "Input is invalid",
    });
  } else {
    res.send({
      response,
    });
  }
});

app.listen(4001);
