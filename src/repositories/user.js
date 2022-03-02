const { db } = require('../infra');
db.entityName = 'User';
class UserRepository {
    async findAll() {
        this.setEntityName();
        const users = await db.findAll();
        return users;
    }

    async findById(id) {
        this.setEntityName();
        const user = await db.findById(id);
        return user;
    }

    async save(user) {
        this.setEntityName();
        return db.save(user);
    }

    setEntityName() {
        db.entityName = 'User';
    }
}

module.exports = new UserRepository();
