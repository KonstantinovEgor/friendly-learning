const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv')
    .config();

class privateService {
    expiresIn = process.env.ACCESS_EXPIRES_IN;
    accessSecretKey = process.env.JWT_SECRET_KEY;
    salt = Number(process.env.SALT);

    generateAccessToken(payload) { // Создание access токена
        return jwt.sign(payload, this.secretKey, { expiresIn: this.expiresIn });
    }

    verifyAndDecodeAccessToken(accessToken) { // Проверка access токена и его расшифровка
        try {
            const verify = jwt.verify(accessToken, this.accessSecretKey);

            return {
                result: true,
                id: verify.id,
                login: verify.login
            };
        } catch (e) {
            return {
                result: false
            }
        }
    }

    async cryptPassword(password) { // Хеширование пароля
        return await bcrypt.hash(password, this.salt);
    }

    async comparePassword(password, hashPassword) { // Сравнение пароля с паролем в хеш виде
        return await bcrypt.compare(password, hashPassword);
    }

}

module.exports = new privateService();