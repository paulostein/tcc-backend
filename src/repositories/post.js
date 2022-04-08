const { db } = require('../infra');
const { In } = require('typeorm');

class PostRepository {
    async findAll(areaId) {
        this.setEntityName();

        const posts = await db.findAll({
            where: { area: { id: In([areaId, 7]) } },
            relations: ['area', 'user'],
        });
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
