const repository = require('../repositories/user');
const bcrypt = require('bcrypt');

class UserController {
    async findAll() {
        return repository.findAll();
    }

    async findById(id) {
        return repository.findById(id);
    }

    async save(user) {
        const hash = await bcrypt.hash(user.password, 10);
        const encryptedUser = {
            ...user,
            password: hash,
        };

        return repository.save(encryptedUser);
    }
}

module.exports = new UserController();
