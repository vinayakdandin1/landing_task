const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/aidkit', function (req, res) {
    res.render('aidkit');
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Server started on port 3000');
});