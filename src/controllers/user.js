const repository = require('../repositories/user');
const bcrypt = require('bcrypt');
const { success, badRequest, created } = require('../helpers/http');

class UserController {
    async findAll() {
        const users = await repository.findAll();
        return success('Users found', users);
    }

    async findByCriteria(criteria) {
        const user = await repository.findByCriteria(criteria);
        return success('User', user);
    }

    async save(user) {
        const userFound = await this.findByCriteria({ email: user.email });

        if (userFound.data) {
            return badRequest('User already exists');
        }

        const hash = await bcrypt.hash(user.password, 10);
        const encryptedUser = {
            ...user,
            password: hash,
        };
        const createdUser = await repository.save(encryptedUser);
        return created('User created successfully', createdUser);
    }
}

module.exports = new UserController();
