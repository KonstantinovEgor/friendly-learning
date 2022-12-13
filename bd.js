const path = require('path');
const fs = require('fs');
const { request } = require('http');
const fileService = require('./fileService');

class bd {
    pathToUsersModel = path.join(__dirname, 'models', 'users.txt');

     createUser = async(obj) => {
        try {
            await fileService.revomeEmptyRows();
            const data = fs.readFileSync(this.pathToUsersModel).toString();
            const id = data.split('\n').length || 1;
            const login = obj.login;
            const password = obj.password;
            const stringToSave = `${id}:${login}:${password}\n`;

            fs.appendFileSync(this.pathToUsersModel, stringToSave);
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = new bd();