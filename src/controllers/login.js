const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const repository = require('../repositories/user');

class LoginController {
    async login({ email, password }) {
        const userFound = await repository.findByCriteria({ email });

        if (!userFound) {
            return {
                code: 404,
                message: 'User not found',
            };
        }

        const correctPassword = await bcrypt.compare(password, userFound.password);
        if (correctPassword) {
            const token = jwt.sign(userFound, 'cukinha', { expiresIn: '12h' });
            return token;
        }
        return correctPassword;
    }
}

module.exports = new LoginController();
