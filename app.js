const express = require("express");
const bp = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var today = new Date();
    let day;
    if (today.getDay() === 6 || today.getDay() === 0) {
        day = "Weekend";
    } else {
        day = "Weekday";
    }
    res.render('list', { kindOfDay: day });
});

app.listen(3000, () => {
    console.log("server started");
});