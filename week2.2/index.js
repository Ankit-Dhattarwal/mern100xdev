// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const port = process.env.POST || 3000;

// app.use(express.json());
// app.use(bodyParser.json());

// app.post("/", (req, res) => {
//   const message = req.query.message;
//   console.log(message);
//   //console.log(req.body);
//   res.send("Hello World ankit!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

/// Simple example

// const express = require("express");

// function calculateSum(n) {
//   let ans = 0;
//   for (let i = 0; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

// const app = express();

// app.get("/", function (req, res) {
//   const n = req.query.n;
//   const ans = calculateSum(n);
//   res.send(ans.toString());
// });

// app.listen(3001);

/// Real Life example with expres.js

const express = require("express");

const users = [
  {
    name: "Ankit",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

const app = express();

app.use(express.json()); // This is use for handle take input from the body that's why this line use.

app.get("/", function (req, res) {
  const ankitkidneys = users[0].kidneys;
  const numberOfKidneys = ankitkidneys.length;
  let healthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (ankitkidneys[i].healthy) {
      healthyKidneys += 1;
    }
  }
  const unhealthyKidneys = numberOfKidneys - healthyKidneys;

  res.json({
    numberOfKidneys,
    healthyKidneys,
    unhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({}); // This is imp bcz to tell that everything ok so that's why it imp to send this.
});

app.delete("/", function (req, res) {
  if (isThereHealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      msg: "Done!",
    });
  } else {
    res.status(411).json({
      msg: "You not have bad kidneys.",
    });
  }
});

function isThereHealthyKidney() {
  let atleastOneHealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys.healthy) {
      atleastOneHealthyKidney = true;
    }
  }
  return atleastOneHealthyKidney;
}

app.listen(3001);

/// Read data from file

// const expres = require("express");
// const fs = require("fs");

// const app = expres();

// app.get("/file/:fileName", function (req, res) {
//   const name = req.params.fileName;
//   console.log(name);
//   fs.readFile(name, "utf-8", function (err, data) {
//     res.json({
//       data,
//     });
//   });
// });

// app.listen(3000);
