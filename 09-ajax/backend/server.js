const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res, next) => {
    //  res.send("<h1>Success</h1>");
    console.log("@@");
    const jsonFile = fs.readFileSync("./backend/data.json", "utf8");
    console.log(jsonFile);
    const jsonData = JSON.parse(jsonFile);
    console.log(jsonData);

    res.json(jsonData);
});

app.listen(3001);
