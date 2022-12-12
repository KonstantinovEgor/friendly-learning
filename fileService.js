var fs = require('fs');

const fileWriter = arr => {

    fs.open('result.txt', 'w', (err) => {
        if(err) throw err;
        console.log('Файлик создан');
    });
    
    fs.appendFile('result.txt', `Уникальный массив: ${arr}`, (err) => {
        if(err) throw err;
        console.log('Результат записан в файлик!');
    });
}

module.exports = fileWriter;