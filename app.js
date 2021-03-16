const express = require("express");
const bp = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);

    res.render('list', { kindOfDay: day });
});



app.listen(3000, () => {
    console.log("server started");
});