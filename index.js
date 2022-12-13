const express = require('express');

const arrayTask = require('./arrayTask');

const app = express();
let arr = process.argv.slice(2);
let newArr = arrayTask(arr)

console.log(`Массив простых чисел: ${newArr}`);



