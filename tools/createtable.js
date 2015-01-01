var utf8 = require("./utf8");
var win1251 = require("./win1251");

var data = {};

for (var i = 0; i < win1251.length; i++) {
	var cpcode = win1251.charCodeAt(i);
	var utf8code = utf8.charCodeAt(i);
	// console.log(cpcode);
	data[cpcode] = utf8code;
};

var json = JSON.stringify(data);

console.log(json);