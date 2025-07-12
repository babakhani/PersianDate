module.exports = {
	babel: false,
	require: {
		"persian-date": require("./dist/persian-date.js"),
	},
	globals: {
		persianDate: require("./dist/persian-date.js"),
	},
};
