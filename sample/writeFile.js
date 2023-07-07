const fs = require("fs").promises;

fs.writeFile("./writeme.txt", "글이 생성됨")
  .then(() => {
    return fs.readFile("./writeme.txt");
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  });
