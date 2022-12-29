const bcrypt = require('bcrypt');

require('dotenv')
    .config();

const {
    User,
    Basket,
    UserRole
} = require('../models/index');

class UserService {

    async registration(pool) {
        const hashPassword = await bcrypt.hash(pool.password, Number(process.env.PASSWORD_SALT));
        const user = await User.create({ password: hashPassword, email: pool.email });
        await Basket.create({ user_id: user.dataValues.id });
        await UserRole.create({ user_id: user.dataValues.id });
        return user;
    }

    async login(pool, user) {
        return await bcrypt.compare(pool.password, user.password);
    }


}

module.exports = new UserService();