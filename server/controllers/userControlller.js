const { User } = require('../models/index');

const ApiError = require('../errors/ApiError')

const userService = require('../services/userService');
const helperService = require("../services/helperService");
const tokenService = require("../services/tokenService");

class UserController {
    async login(req, res, next) {
        try {
            const pool = req.body;
            const itContains = helperService.itContains(pool, ['email', 'password']);
            if (!itContains.result)
                return next(ApiError.badRequest(`Параметр ${itContains.field} не найден`));
            const user = await User.findOne({ where: { email: pool.email } });
            if (!user)
                return next(ApiError.badRequest(`Пользователь не найден`));
            const successLogin = await userService.login(pool, user);
            if (!successLogin)
                return next(ApiError.badRequest(`Неверный пароль`));
            const token = tokenService.generate({
                id: user.dataValues.id,
                email: user.dataValues.email
            });
            res.setHeader('Authorization', `Bearer ${token}`);
            res.json({ Authorization: `Bearer ${token}` });
        } catch (error) {
            return next(new Error());
        }
    }

    async registration(req, res, next) {
        try {
            const pool = req.body;
            const itContains = helperService.itContains(pool, ['email', 'password']);
            if (!itContains.result)
                return next(ApiError.badRequest(`Параметр ${itContains.field} не найден`));
            const candidate = await User.findOne({ where: { email: pool.email } });
            if (candidate)
                return next(ApiError.badRequest(`Пользователь с таким email уже создан`));
            const user = await userService.registration(pool);
            res.json({
                user
            });
        } catch (error) {
            return next(new Error());
        }

    }

    async auth(req, res, next) {
        try {
            let token = req.headers.authorization?.split(' ')[1];
            const refreshResult = tokenService.refreshAccessToken(token);
            if (!refreshResult)
                return next(ApiError.badRequest(`Токен не валидный`));
            token = tokenService.refreshAccessToken(token);
            res.setHeader('Authorization', `Bearer ${token}`);
            res.json({ Authorization: `Bearer ${token}` });
        } catch (error) {
            return next(new Error());
        }
    }
}

module.exports = new UserController();