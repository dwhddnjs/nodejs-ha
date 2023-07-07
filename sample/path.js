const path = require("path");

path.join(__dirname, "this.js");
console.log(path.join(__dirname, "..", "/this.js"));

path.resolve(__dirname, "..", "/this.js");
console.log(path.resolve(__dirname, "..", "/this.js"));
