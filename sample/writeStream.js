const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2.txt");

writeStream.on("finish", () => {
  console.log("파일 쓰기 완료");
});
writeStream.write("이글이씁니다 \n");
writeStream.write("한번더 씁니다");
writeStream.end();
