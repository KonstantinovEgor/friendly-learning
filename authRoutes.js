const bd = require('./bd');

class authRoutes {
    registration = (req, res) => {
        const body = req.body;
        bd.createUser(body);
        console.log(req.body.name);
        res.json('reg router');
    };

    login = (req, res) => {
        res.json('login router');
    };

    users = (req, res) => {
        const body = req.body;
        bd.getAllUsers(body);
        var arr = bd.getAllUsers(body);
        
        res.json(`{user_id: ${arr[0][0]}, user_login: "${arr[0][1]}", user_password: "${arr[0][2]}"}`);
    }
}

module.exports = new authRoutes();