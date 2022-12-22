const ApiError = require('../errors/ApiError')

class UserController {
    async login(req, res) {
        res.json({
            message: 'login'
        });
    }

    async registration(req, res, next) {
        res.json({
            message: 'registration'
        });
    }

    async auth(req, res) {
        res.json({
            message: 'auth'
        });
    }
}

module.exports = new UserController();