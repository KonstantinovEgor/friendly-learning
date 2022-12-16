const bd = require('./bd');

class authRoutes {
    registration = (req, res) => {
        const body = req.body;
        bd.createUser(body);
        res.json('reg router');
    };

    login = async (req, res) => {
        const body = req.body;

        if(await bd.login(body)) res.json([{'status' : 'ok'}, {'access_token' : 'string'}, {'refresh_token' : 'string'}]);
        else res.json([{'status' : 'error'}, {'message' : 'Ошибка при выполнении запроса'}]);

    };

    users = async (req, res) => {
        const body = req.body;
        let arr = await bd.getAllUsers(body);
        res.json(arr);
    }

    user = async (req, res) => {
        const body = req.body;
        let arr = await bd.getUser(body, req.query.id);
        console.log(arr);
        res.json(arr);
    }
}

module.exports = new authRoutes();