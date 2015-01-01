var tr = require("./table.js");

module.exports = function(string) {
	var result = new Array(string.length);
	for (var i = 0; i < string.length; i++) {
		var code = string.charCodeAt(i);
		var newChar = tr[code];
		// console.log(newChar, String.fromCharCode(newChar));
		if (newChar != null) {
			result[i] = String.fromCharCode(newChar);
		} else {
			result[i] = string[i];
		}
	}
	result = result.join("");
	return result;
}