const fs = require("fs").promises;

fs.readFile("./readme.txt")
  .then((data) => {
    console.log("1");
  })
  .catch((err) => {
    throw err;
  });

fs.readFile("./readme.txt")
  .then((data) => {
    console.log("2");
  })
  .catch((err) => {
    throw err;
  });
fs.readFile("./readme.txt")
  .then((data) => {
    console.log("3");
  })
  .catch((err) => {
    throw err;
  });
fs.readFile("./readme.txt")
  .then((data) => {
    console.log("4");
  })
  .catch((err) => {
    throw err;
  });

async function asyncOrderPromise() {
  let data = await fs.readFile("./readme.txt");
  console.log("1번", data.toString());
  data = await fs.readFile("./readme.txt");
  console.log("2번", data.toString());
  data = await fs.readFile("./readme.txt");
  console.log("3번", data.toString());
  data = await fs.readFile("./readme.txt");
  console.log("4번", data.toString());
}

asyncOrderPromise();
