const arrayService = require("./arrayService");
const fileWriter = require("./fileService");
const express = require('express');

const app = express();

var arr = process.argv.slice(2);



uniqueArr = arrayService(arr);



startServer = () => {
    console.log(`Изначальный массив: ${arr}`);
    console.log(`Уникальный массив: ${uniqueArr}`);
}

fileWriter(uniqueArr);

app.listen(5000, startServer);