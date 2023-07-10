const express = require("express");
const path = require("path");

const app = express();

app.use(
  (req, res, next) => {
    console.log("미들웨어 실행중");
    next();
  },
  (req, res, next) => {
    try {
      console.log("에러발생");
    } catch (error) {
      next(error);
    }
  }
);

app.set("port", process.env.PORT || 3000);

app.get("/cat/:name", (req, res) => {
  res.send(`현재위치는 ${req.params.name}`);
});

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, index.html))
  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.end(JSON.stringify({ hello: "jongwon" }));
  res.json({ hello: "jongwon" });
});

app.use((req, res, next) => {
  res.status(200).send("404 페이지입니다");
});

app.use((err, req, res, next) => {
  console.error(err);
});

app.listen(3000, () => {
  console.log("서버 실행중");
});
