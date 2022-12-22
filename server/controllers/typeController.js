const { Type } = require('../models/index');

const ApiError = require('../errors/ApiError');
const helperService = require('../services/helperService');

class TypeController {
    async create(req, res, next) {
        const itContains = helperService.itContains(req.body, ['name', 'description']);
        if (!itContains.result)
            return next(ApiError.badRequest(`Параметр ${itContains.field} не найден`));

        const { name, description } = req.body;

        const type = await Type.create({ name, description });
        res.status(200).json(type);
    }

    async get(req, res, next) {
        const id = req.query?.id;
        let type = (id) ? await Type.findOne({ where: { id } }) : await Type.findAll();

        if (!type)
            return next(ApiError.badRequest(`Обьeкт не найден`));
        res.status(200).json(type);
    }
}

module.exports = new TypeController();