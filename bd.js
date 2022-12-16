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
<<<<<<< Updated upstream
=======

    getAllUsers = async(obj) => {
        try{
            const array = (await fs.readFileSync(this.pathToUsersModel, () => {})).toString().split("\n");

            var arrayObj = [];
            for(let i = 0; i < array.length - 1; i++){
                var temp = array[i].split(':');
                let arr = {
                    id: parseInt(temp[0]),
                    login: temp[1],
                    password: temp[2]
                }
                arrayObj[i] = arr;
            } 

            return arrayObj;
        } catch(error) {
            console.log(error);
        }
    }

    getUser = async(obj, id) => {
        try{
            const array = (await fs.readFileSync(this.pathToUsersModel, () => {})).toString().split("\n");

            var arrayObj = [];
            for(let i = 0; i < array.length - 1; i++){
                var temp = array[i].split(':');
                if(temp[0] === id){
                    let arr = {
                        id: parseInt(temp[0]),
                        login: temp[1],
                        password: temp[2]
                    }

                    arrayObj = arr;
                }
            } 
            return arrayObj;
        } catch(error) {
            console.log(error);
        }
    }

    login = async(obj) => {
        try{
            console.log(obj.login);
            console.log(obj.password);
            const array = (await fs.readFileSync(this.pathToUsersModel, () => {})).toString().split("\n");

            let userTemp =  false;
            for(let i = 0; i < array.length - 1; i++){
                let temp = array[i].split(':');

                if(obj.login.toString() === temp[1] && obj.password.toString() === temp[2] && userTemp === false) {
                    return true;
                }
                else {
                    return false;
                }
            }

        } catch(error) {
            console.log(error);
        }
    }
>>>>>>> Stashed changes
}

module.exports = new bd();