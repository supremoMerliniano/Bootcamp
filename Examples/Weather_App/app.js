const express = require('express');
const https = require('https');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded( { extended: true }));

app.get("/", (req, res) => { // GET API
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    const query = req.body.cityName;
    const appid = "6dce802b863b346524296a0e590583dc";
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=${appid}`;

    https.get(url, (response) => { // GET URI

        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const icon = `https://openweathermap.org/img/wn/${weatherData["weather"][0].icon}@2x.png`;

            res.write(`<h1>The weather is currently \
                ${weatherData["weather"][0]["description"]}</h1>`);
            res.write(`The temperature ${query} is \
                ${weatherData["main"]["temp"]} degress celsius`);
            res.write(`<img src="${icon}" />`);
            res.send();
        });

    });
});

app.listen(5500, () => console.log("The server started at port 5500"));
    // const query = "London"
    // const appid = "6dce802b863b346524296a0e590583dc";
    // const units = "metric";
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=${appid}`;

    // https.get(url, (response) => { // GET URI

    //     response.on("data", (data) => {
    //         const weatherData = JSON.parse(data);
    //         const icon = `https://openweathermap.org/img/wn/${weatherData["weather"][0].icon}@2x.png`;

    //         res.write(`<h1>The weather is currently \
    //             ${weatherData["weather"][0]["description"]}</h1>`);
    //         res.write(`The temperature is \
    //             ${weatherData["main"]["temp"]} degress celsius`);
    //         res.write(`<img src="${icon}" />`);
    //         res.send();
    //     });

    // });