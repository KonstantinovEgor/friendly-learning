const path = require('path');
const fs = require('fs');

class bd {
    pathToUsersModel = path.join(__dirname, 'models', 'users.txt');

    createUser = (obj) => {
        try {
            const id = 1;
            const login = obj.login;
            const password = obj.password;
            const stringToSave = `${id} ${login} ${password}\n`;

            fs.appendFileSync(this.pathToUsersModel, stringToSave);
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = new bd();