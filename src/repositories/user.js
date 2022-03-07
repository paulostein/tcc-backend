const { db } = require('../infra');

class UserRepository {
    async findAll() {
        this.setEntityName();
        const users = await db.findAll();
        return users;
    }

    async findByCriteria(criteria) {
        this.setEntityName();
        const user = await db.findByCriteria(criteria);
        return user;
    }

    async save(user) {
        this.setEntityName();
        return db.save(user);
    }

    async deleteById(id) {
        this.setEntityName();
        await db.deleteById(id);
    }

    setEntityName() {
        db.entityName = 'User';
    }
}

module.exports = new UserRepository();
