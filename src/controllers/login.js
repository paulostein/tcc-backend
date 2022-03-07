const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const repository = require('../repositories/user');
const { success, notFound, unauthorized } = require('../helpers/http');
require('dotenv').config();

class LoginController {
    async login({ email, password }) {
        const userFound = await repository.findByCriteria({ email });

        if (!userFound) {
            return notFound('User not found');
        }

        const correctPassword = await bcrypt.compare(password, userFound.password);
        if (correctPassword) {
            const jwtToken = await jwt.sign(userFound, process.env.JWT_SECRET_KEY, { expiresIn: '12h' });
            return success('Login succesfull', jwtToken);
        }
        return unauthorized();
    }
}

module.exports = new LoginController();
