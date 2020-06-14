const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});

const bodyParser = (req, res, next) => {
  if (req.method === 'POST') {
    req.on("data", (data) => {
      const parsed = data.toString("utf8").split("&");
      const formData = {};
      for (let pair of parsed) {
        const [key, value] = pair.split("=");
        formData[key] = value;
      }
      req.body = formData;
      next();
    });
  } else {
    next();
  }
};

app.post("/", bodyParser, (req, res) => {
  // bodyParser(req,res);
  console.log(req.body);
  res.send("congrats on your new fake account");
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
