const { db } = require('../infra');

module.exports = (router) => {
    router.get('/post', async (req, res) => {
        const repository = await db.getRepository('Post');
        const posts = await repository.find();

        res.send(posts);
    });
};
