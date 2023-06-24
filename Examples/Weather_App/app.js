const express = require('express');
const https = require('https');

const app = express();

app.get("/", (req, res) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=6dce802b863b346524296a0e590583dc";

    https.get(url, (reponse) => {
        console.log(reponse.statusCode);
    });

    res.send("Server is runing");
})

app.listen(3000, () => console.log("The server started at port 3000"));