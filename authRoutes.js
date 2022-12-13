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
}

module.exports = new authRoutes();