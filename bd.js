const path = require('path');
const fs = require('fs');
const { request } = require('http');
const fileService = require('./fileService');
const readline = require('readline');
const { json } = require('body-parser');

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

    getAllUsers = async(obj) => {
        try{
            const array = fs.readFileSync(this.pathToUsersModel).toString().split("\n");

            var arr = [];
            
            for(let i = 0; i < array.length - 1; i++){
                var temp = array[i].split(':');
                arr[i] = [parseInt(temp[0]), temp[1], temp[2]];
            }
            
            // let jsonArr = {};
            
            // for(let i = 0; i < arr.length; i++) {
            //     for(let j = 0; j < 2; j++){
            //         jsonArr.push(`{user_id: ${arr[i][0]}, user_login: "${arr[i][1]}", user_password: "${arr[i][2]}"}`)
            //     }
            // }

            // const jsonString = JSON.stringify([1, 2, 3, 4, 5]);
            // console.log(jsonString);

            return arr;
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = new bd();