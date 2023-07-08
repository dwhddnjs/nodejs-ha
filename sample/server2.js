const http = require("http");
const fs = require("fs").promises;

const server = http
  .createServer(async (req, res) => {
    try {
      res.writeHead(200, { "Cotent-Type": "text/html; charset=utf-8" });
      const data = await fs.readFile("./main.html");
      res.end(data);
    } catch (error) {
      res.writeHead(200, { "Cotent-Type": "text/plain; charset=utf-8" });
      console.log("error: ", error);
      res.end(error.message);
    }
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
