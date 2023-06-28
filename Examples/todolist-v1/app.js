const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {

    var date = new Date();
    var currentDay = date.getDay();
    var day = "";

    day = (!currentDay || currentDay === 6) ? "Weekend" : "Weekday";

    res.render("list", {
        kindOfDay: day, 
        currDay: date.toLocaleDateString('en-US', { weekday: "long" }) 
    });

});

app.listen(5500, () => console.log("Server started on port 5500"));
