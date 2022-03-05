const { db } = require('../infra');
db.entityName = 'User';
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

    setEntityName() {
        db.entityName = 'User';
    }
}

module.exports = new UserRepository();
