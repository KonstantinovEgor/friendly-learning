const path = require('path');
const fs = require('fs');

class FileService{
    pathToUsersModel = path.join(__dirname, 'models', 'users.txt');

    async revomeEmptyRows() {
        let arr = await fs.readFileSync(this.pathToUsersModel, 'utf-8');
        if(arr === '') return;
        arr = arr.split('');
        let resultStr = '';
        for(let l of arr) if(l !== '\n') resultStr += l; else resultStr += ' ';
        const arrS = resultStr.split(' ');
        resultStr = arrS.filter(l => l).join(' ');
        const temp = resultStr.replaceAll(' ', '\n');
        await fs.writeFileSync(this.pathToUsersModel, temp+'\n');
    }
}

module.exports = new FileService();