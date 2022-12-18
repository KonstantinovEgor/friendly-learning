const path = require('path');
const fs = require('fs');

const privateService = require('./privateService');

class bd {
    pathToUsersModel = path.join(__dirname, 'models', 'users.txt');

    createUser = async (obj) => {
        try {
            const id = 1;
            const login = obj.login;
            const password = obj.password;
            const hashPassword = await privateService.cryptPassword(password);
            const stringToSave = `${id} ${login} ${hashPassword}\n`;

            fs.appendFileSync(this.pathToUsersModel, stringToSave);
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = new bd();