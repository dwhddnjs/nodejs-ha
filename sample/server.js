const http = require("http");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Cotent-Type": "text/html; charset=utf-8" });
    res.write("<h1>hello world</h1>");
    res.write("<h2>hello node</h2>");
    res.end("<h3>hello ddd</h3>");
  })
  .listen(8080, () => {
    console.log("8080으로실행");
  });

server.on("listening", () => {
  console.log("8080번 포트에서 서버 대기중");
});

server.on("error", (error) => {
  console.error(error);
});
