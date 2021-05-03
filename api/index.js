const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.options('*', cors());

const port = 8085;

app.get('/', (req, res, next) => {
    res.send('welcome to my api ...');
});

app.get('/sum', (req, res, next) => {
    var left = req.query.left;
    var right = req.query.right;

    var result = parseFloat(left) + parseFloat(right);
    var objResult = {
        result: result
    }
    res.send(objResult);
});

app.get('/subs', (req, res, next) => {
    var left = req.query.left;
    var right = req.query.right;

    var result = parseFloat(left) - parseFloat(right);
    var objResult = {
        result: result
    }
    res.send(objResult);
});

app.get('/multiply', (req, res, next) => {
    var left = req.query.left;
    var right = req.query.right;

    var result = parseFloat(left) * parseFloat(right);
    var objResult = {
        result: result
    }
    res.send(objResult);
});

app.get('/divide', (req, res, next) => {
    var left = req.query.left;
    var right = req.query.right;

    var result = parseFloat(left) / parseFloat(right);
    var objResult = {
        result: result
    }
    res.send(objResult);
});

app.get('/power', (req, res, next) => {
    var left = req.query.left;
    var right = req.query.right;

    var result = Math.pow(parseFloat(left), parseFloat(right));
    var objResult = {
        result: result
    }
    res.send(objResult);
});

app.get('/sqrt', (req, res, next) => {
    var left = req.query.left;

    var result = Math.sqrt(parseFloat(left));
    var objResult = {
        result: result
    }
    res.send(objResult);
});

app.listen(port, () => 
    console.log('listening on port ' + port)
);
