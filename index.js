const path = require('path');
const express = require('express');

const host = 'localhost';
const port = '5000';
const rout = 'registration';

const app = express();
app.use('/assets',express.static(__dirname));
const pathToIndex = path.join(__dirname, 'index.html');

var indexRout = (req,res) => {
    res.sendFile(pathToIndex);
}
app.use('/registration', indexRout);

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}/${rout}`));