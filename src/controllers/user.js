const repository = require('../repositories/user');
const bcrypt = require('bcrypt');
const { success, badRequest, created, deleted } = require('../helpers/http');

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
        const userFound = await repository.findByCriteria({
            email: user.email,
        });

        if (userFound) {
            return badRequest('User already exists');
        }

        const encryptedUser = await this.encryptPassword(user);
        const createdUser = await repository.save(encryptedUser);
        return created('User created successfully', createdUser);
    }

    async deleteById(id) {
        const userFound = await repository.findByCriteria(id);

        if (!userFound) {
            return badRequest('User not exists');
        }
        await repository.deleteById(id);
        return deleted();
    }

    async update({ id, body }) {
        const userFound = await repository.findByCriteria(id);

        if (!userFound) {
            return badRequest('User not exists');
        }
        const encryptedUser = await this.encryptPassword(body);
        const user = await repository.update({ id, body: encryptedUser });
        return success('User updated', user);
    }

    async encryptPassword(user) {
        const hash = await bcrypt.hash(user.password, 10);
        return {
            ...user,
            password: hash,
        };
    }
}

module.exports = new UserController();
