const repository = require('../repositories/post');
const { success, created } = require('../helpers/http');
const fs = require('fs');

class PostController {
    async findAll() {
        const posts = await repository.findAll();
        return success('Found posts', posts);
    }

    async save(post) {
        const serializedPost = this.serializePostBody(post.body);
        if (post.files) {
            const attachment = this.saveFile(post.files);
            serializedPost.attachment = attachment;
        }
        const createdPost = await repository.save(serializedPost);
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

    serializePostBody(post) {
        return {
            area: JSON.parse(post.area),
            user: JSON.parse(post.user),
            text: JSON.parse(post.text),
            attachment: '',
        };
    }

    saveFile(file) {
        const fileName = `${new Date().getTime()}_${file.attachment.name}`;

        fs.writeFile(
            `public/${fileName}`,
            Buffer.from(file.attachment.data),
            'binary',
            function (err) {
                if (err) throw err;
            }
        );
        return fileName;
    }
}

module.exports = new PostController();
