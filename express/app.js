const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "password",
    cookie: {
      httpOnly: true,
    },
    name: "connect.sid",
  })
);
//경로 파일 제공을 위한 미들웨어
app.use("/", (req, res, next) => {
  //미들웨어 확장법
  if (req.session.id) {
    express.static(path.join(__dirname, "public"))(req, res, next);
  } else {
    next();
  }
});
app.use(cookieParser("password"));
// body-parser
app.use(express.json()); //bodyJson
app.use(express.urlencoded({ extended: true })); //form parsing

// app.use(
//   (req, res, next) => {
//     console.log("미들웨어 실행중");
//     next();
//   },
//   (req, res, next) => {
//     try {
//       console.log("에러발생");
//     } catch (error) {
//       next(error);
//     }
//   }
// );

app.get("/cat/:name", (req, res) => {
  res.send(`현재위치는 ${req.params.name}`);
});

app.get("/", (req, res, next) => {
  req.body.name; //body-parser

  req.cookies; // cookies
  req.signedCookies; // cookies

  req.session.id;

  res.cookie("name", encodeURIComponent(name), {
    expires: new Date(),
    httpOnly: true,
    path: "/",
  });
  res.clearCookie("name", encodeURIComponent(name), {
    httpOnly: true,
    path: "/",
  });
  res.sendFile(path.join(__dirname, index.html));
  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.end(JSON.stringify({ hello: "jongwon" }));
  // res.status(200).json({ hello: "jongwon" });
  // if (true) {
  //   next("route"); // 다음 라우터가 실행함
  // } else {
  //   next(); // 여기에서 걸리면
  // }
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
