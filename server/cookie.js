const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Set-Cookie": "mycookie=test" });
    if (req.headers.cookie) {
      res.end(req.headers.cookie);
    } else {
      res.end("");
    }
  })
  .listen(8083);
