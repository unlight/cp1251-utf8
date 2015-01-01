var fs = require("fs");
module.exports = fs.readFileSync("./win1251.txt", {encoding: "binary"});