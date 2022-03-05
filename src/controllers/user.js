const repository = require('../repositories/user');
const bcrypt = require('bcrypt');

class UserController {
    async findAll() {
        return repository.findAll();
    }

    async findByCriteria(criteria) {
        return repository.findByCriteria(criteria);
    }

    async save(user) {
        const userFound = await this.findByCriteria({ email: user.email });

        if (userFound) {
            return {
                code: 400,
                message: 'User already exists',
            };
        }

        const hash = await bcrypt.hash(user.password, 10);
        const encryptedUser = {
            ...user,
            password: hash,
        };

        return repository.save(encryptedUser);
    }
}

module.exports = new UserController();
