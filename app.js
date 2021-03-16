const express = require("express");
const bp = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var today = new Date();

    if (today.getDay() === 2 || today.getDay() === 0) {
        res.send("<h1>Weekend</h1>");
    } else {
        res.send("Weekday");
    }
});

app.listen(3000, () => {
    console.log("server started");
});