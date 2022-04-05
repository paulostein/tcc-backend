const { db } = require('../infra');

class PostRepository {
    async findAll() {
        this.setEntityName();
        const posts = await db.findAll({ relations: ['area', 'user'] });
        return posts;
    }

    async findByCriteria(criteria) {
        this.setEntityName();
        const post = await db.findByCriteria(criteria);
        return post;
    }

    async save(post) {
        this.setEntityName();
        return db.save(post);
    }

    async deleteById(id) {
        this.setEntityName();
        await db.deleteById(id);
    }

    setEntityName() {
        db.entityName = 'Post';
    }
}

module.exports = new PostRepository();
