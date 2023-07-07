const fs = require("fs");

const readStream = fs.createReadStream("./big.txt");
const writeStream = fs.createWriteStream("./big.txt");

readStream.pipe(writeStream);

readStream.on("end", () => {
  console("stream", process.memoryUsage().rss);
});
