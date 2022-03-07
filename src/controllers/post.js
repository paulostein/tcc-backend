const repository = require('../repositories/post');
const { success, created } = require('../helpers/http');

class PostController {
    async findAll() {
        const posts = await repository.findAll();
        return success('Found posts', posts);
    }

    async save(post) {
        const createdPost = await repository.save(post);
        return created('Post created successfully', createdPost);
    }

    async deleteById(id) {
        const postFound = await repository.findByCriteria(id);

        if (!postFound) {
            return badRequest('Post not exists');
        }
        await repository.deleteById(id);
        return deleted();
    }
}

module.exports = new PostController();
