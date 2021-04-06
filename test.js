const express = require("express");
const app = express();

app.post('/', (req, res) => {
    let obj = req.body;
    res.send(obj);
});

app.listen(3001, () => {
    console.log(`App running on port 3001`);
});