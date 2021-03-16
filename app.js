const express = require("express");
const bp = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bp.urlencoded({ extended: true }));
app.use(express.static("public"));

var item = "";
var items = ["Buy food", "Eat food"];

app.get('/', (req, res) => {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);

    res.render('list', { kindOfDay: day, newListItems: items });
});

app.post('/', (req, res) => {
    item = req.body.newItem;
    // res.render('list', { newListItem: item });
    items.push(item);
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("server started");
});


// P1: newListItem not defined before in get request
// p2: item is created only in post request (scope is different)
// p3: only 1 item is showed up i.e. the newest one
// p4: rendered as a single list item