const { db } = require('../infra');

class UserRepository {
    async findAll() {
        this.setEntityName();
        const users = await db.findAll({ relations: ['area'] });
        return users;
    }

    async findByCriteria(criteria) {
        this.setEntityName();
        const user = await db.findByCriteria({
            where: { ...criteria },
            relations: ['area'],
        });
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

    async update(user) {
        this.setEntityName();
        return db.update(user);
    }

    setEntityName() {
        db.entityName = 'User';
    }
}

module.exports = new UserRepository();
