const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmiCalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmiCalculator", (req, res) => {
    let h = parseFloat(req.body.h);
    let w = parseFloat(req.body.w);

    res.send(`The bmi is: ${w / Math.pow(h, 2)}`);
})

app.listen(3000, () => console.log("Server started at port 3000"));