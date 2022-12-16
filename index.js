const fs = require("fs");

const getMaxNumber = require('./function');
 
let fileContent = fs.readFileSync('ArrayTask.txt', 'utf8');
let arr = fileContent.split(' ');
let newArray = getMaxNumber(arr);

fs.writeFile('NewArray.txt', String(newArray), function(error){
    if(error) throw error; 
    console.log(`Данные записанные в файл:${newArray}`)
 });