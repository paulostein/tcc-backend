const { db } = require('../infra');

class PostRepository {
    async findAll() {
        this.setEntityName();
        const posts = await db.findAll();
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

    setEntityName() {
        db.entityName = 'Post';
    }
}

module.exports = new PostRepository();
