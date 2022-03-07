const repository = require('../repositories/post');
const { success, created } = require('../helpers/http');

class PostController {
    async findAll() {
        const posts = await repository.findAll();
        return success('Found posts', posts);
    }

    async findByCriteria(criteria) {
        const post = await repository.findByCriteria(criteria);
        return success('Found post', post);
    }

    async save(post) {
        const createdPost = await repository.save(post);
        return created('Post created successfully', createdPost);
    }
}

module.exports = new PostController();
