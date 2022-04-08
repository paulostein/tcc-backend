const repository = require('../repositories/post');
const { success, created, deleted } = require('../helpers/http');
const fs = require('fs');
const jwt = require('jsonwebtoken');

class PostController {
    async findAll(headers) {
        const areaId = this.getUserAreaId(headers);
        const posts = await repository.findAll(areaId);
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

    extractToken(headers) {
        const { authorization } = headers;
        return authorization.replace('Bearer ', '');
    }

    getUserAreaId(headers) {
        const { area } = jwt.decode(this.extractToken(headers));
        return area.id;
    }
}

module.exports = new PostController();
