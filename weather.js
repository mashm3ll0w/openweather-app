// jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const request = require("request");
const port = process.env.PORT || 3515;
const API_KEY = "";	// Enter your API Key Here

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/html/index.html");
});

app.post("/", (req, res) => {
	var baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
	var city = req.body.cityName;
	var fullURL = baseURL + city + "&APPID=" + API_KEY;

	request(fullURL, (error, response, body) => {
		console.log("error:", error);
		console.log("response: ", response.statusCode);
		var data = JSON.parse(body);
		res.send();
	});
});

app.listen(port, (req, res) => {
	console.log(`Listening on port ${port}...`);
});

