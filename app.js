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

let port = process.env.PORT;

if(port == null || port == "") {
    port = 3000
}

app.listen(port, function () {
    console.log('Server has started sucessfully');
});